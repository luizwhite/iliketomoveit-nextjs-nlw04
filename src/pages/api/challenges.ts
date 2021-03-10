import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db, Collection, MongoError } from 'mongodb';

let cachedDb: Db;

interface CollectionSchema {
  username: string;
  name: string;
  level: number;
  currentXP: number;
  challengesCompleted: number;
  image: string;
}

interface ErrorSchema {
  error?: MongoError;
  message?: string;
}

export async function connectToMongoDatabase(uri: string): Promise<Db> {
  if (cachedDb) return cachedDb;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) await client.connect();

  const dbName = uri.split('/').pop()?.split('?').shift();
  const db = client.db(dbName);
  cachedDb = db;

  return db;
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<
    CollectionSchema | CollectionSchema[] | ErrorSchema
  >,
): Promise<void> => {
  const db = await connectToMongoDatabase(process.env.MONGODB_URI || 'default');

  const collection: Collection<CollectionSchema> = db.collection(
    process.env.NEXTAUTH_COLLECTION || 'userUsers',
  );

  if (request.method === 'POST') {
    const { username, level, currentXP, challengesCompleted } = request.body;
    let userFound = {} as CollectionSchema | null;
    let mongoResponse:
      | MongoError
      | CollectionSchema[]
      | CollectionSchema = {} as CollectionSchema;

    await collection.updateOne(
      { username },
      {
        $set: {
          level,
          currentXP,
          challengesCompleted,
        },
      },
    );

    try {
      userFound = await collection.findOne({ username });
    } catch (err) {
      mongoResponse = err;
    } finally {
      mongoResponse = userFound || mongoResponse;
    }

    if (mongoResponse instanceof MongoError)
      return response.status(400).json({ error: mongoResponse });

    return response.status(200).json(mongoResponse);
  }
  if (request.method === 'GET') {
    let mongoResponse:
      | MongoError
      | CollectionSchema[]
      | CollectionSchema = {} as CollectionSchema;

    if (request.query.users === 'all') {
      mongoResponse = await new Promise((resolve, reject) => {
        collection
          .find()
          .sort('level', -1)
          .toArray((err, result) => {
            if (err) reject(err);
            else resolve(result);
          });
      });
    } else if (request.query.users) {
      let userFound = {} as CollectionSchema | null;
      const { users: username } = request.query as { users: string };

      try {
        userFound = await collection.findOne({ username });
      } catch (err) {
        mongoResponse = err;
      } finally {
        mongoResponse = userFound || mongoResponse;
      }
    }

    if (mongoResponse instanceof MongoError)
      return response.status(400).json({ error: mongoResponse });

    return response.status(200).json(mongoResponse);
  }
  return response.status(400).json({ message: 'Invalid method' });
};
