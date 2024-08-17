import { Task } from "../task/Task";

export type Steps = {
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  task?: Task | null;
  updatedAt: Date;
};
