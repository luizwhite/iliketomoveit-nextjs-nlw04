import Adapters, { TypeORMUserModel } from 'next-auth/adapters';

export default class User extends (Adapters.TypeORM.Models.User
  .model as typeof TypeORMUserModel) {
  username: string;

  githubProfile: string;

  rank: number;

  level: number;

  challengesCompleted: number;

  currentXP: number;

  constructor(
    name: string,
    email: string,
    image: string,
    emailVerified: Date | undefined,
  ) {
    super(name, email, image, emailVerified);

    this.username = '';
    this.githubProfile = '';
    this.rank = 0;
    this.level = 1;
    this.challengesCompleted = 0;
    this.currentXP = 0;
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    username: {
      type: 'varchar',
    },
    githubProfile: {
      type: 'varchar',
    },
    rank: {
      type: 'int',
    },
    level: {
      type: 'int',
    },
    challengesCompleted: {
      type: 'int',
    },
    currentXP: {
      type: 'int',
    },
  },
};
