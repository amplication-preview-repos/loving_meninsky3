import { Task } from "../task/Task";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  task?: Task | null;
  updatedAt: Date;
  user?: User | null;
};
