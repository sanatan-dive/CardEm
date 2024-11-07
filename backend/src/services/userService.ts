import { User, createUserModel } from '../models/userModel';

const users: User[] = [];

export const createUser = (name: string): User => {
  const newUser = createUserModel(name);
  users.push(newUser);
  return newUser;
};

export const getUser = (userId: string): User | undefined => {
  return users.find((user) => user.id === userId);
};
