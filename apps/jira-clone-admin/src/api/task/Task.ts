import { Comment } from "../comment/Comment";
import { History } from "../history/History";
import { Label } from "../label/Label";
import { Project } from "../project/Project";
import { Steps } from "../steps/Steps";
import { User } from "../user/User";

export type Task = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  histories?: Array<History>;
  id: string;
  labels?: Array<Label>;
  priority?: "Option1" | null;
  project?: Project | null;
  status?: "Option1" | null;
  stepsItems?: Array<Steps>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
