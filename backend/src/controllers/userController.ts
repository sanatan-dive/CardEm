import { Request, Response } from 'express';
import { createUser, getUser } from '../services/userService';

export const createUserController = (req: Request, res: Response) => {
  const { name } = req.body;
  const user = createUser(name);
  res.json(user);
};

export const getUserController = (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = getUser(userId);
  res.json(user);
};
