import { Task } from "../task/Task";

export type History = {
  action: string | null;
  createdAt: Date;
  id: string;
  task?: Task | null;
  timestamp: Date | null;
  updatedAt: Date;
};
