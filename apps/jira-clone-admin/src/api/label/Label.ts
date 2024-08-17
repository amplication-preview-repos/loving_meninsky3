import { Task } from "../task/Task";

export type Label = {
  color: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  task?: Task | null;
  updatedAt: Date;
};
