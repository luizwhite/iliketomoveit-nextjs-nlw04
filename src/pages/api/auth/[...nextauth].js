import NextAuth from 'next-auth';
import { TypeORMAdapter } from 'next-auth/adapters';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { MongoClient, ObjectId } from 'mongodb';

import Models from '../../../models';
let cachedDb;

export async function connectToMongoDatabase(uri) {
  if (cachedDb) return cachedDb;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) await client.connect();

  const dbName = uri.split('/').pop().split('?').shift();
  const db = client.db(dbName);
  cachedDb = db;

  return db;
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || 'default',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'default',
      scope: 'read:user user:email',
    }),
  ],
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      console.log('START - cbjwt');

      isNewUser && console.log('cbjwt new user');

      if (account?.accessToken) token.accessToken = account.accessToken;

      if (user) {
        await fetch('https://api.github.com/user/emails', {
          method: 'GET',
          headers: {
            Authorization: `token ${token.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const { email } = data.find(({ primary }) => primary === true);
            user.email = email;
          })
          .catch((err) => {
            console.error(err);
          });

        token.user = {
          ...token.user,
          name: user.name,
          email: user.email,
          image: user.image,
          username: profile.login,
          githubProfile: profile.html_url,
        };

        const db = await connectToMongoDatabase(process.env.MONGODB_URI);
        const collection = db.collection(
          process.env.NEXTAUTH_COLLECTION || 'userUsers',
        );

        await collection.updateOne(
          { _id: ObjectId(user.id) },
          {
            $set: {
              ...token.user,
            },
          },
        );
      }

      token?.user && console.log(token);
      console.log('END - cbjwt');
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.user = token.user;

      return Promise.resolve(session);
    },
  },
  events: {
    createUser: async () => {
      console.log('event - user created');
    },
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: Adapters.TypeORM.Adapter(
    // The first argument should be a database connection string or TypeORM config object
    process.env.MONGODB_URI,
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        User: Models.User,
      },
    },
  ),
  secret: process.env.NEXTAUTH_JWTSECRET,
});

// export default (req, res) => NextAuth(req, res, options);
