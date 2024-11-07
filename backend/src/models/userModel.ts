export interface User {
    id: string;
    name: string;
    score: number;
  }
  
  export const createUserModel = (name: string): User => ({
    id: Date.now().toString(),
    name,
    score: 0,
  });
  