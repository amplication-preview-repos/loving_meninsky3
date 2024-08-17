import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type StepsCreateInput = {
  description?: string | null;
  status?: "Option1" | null;
  task?: TaskWhereUniqueInput | null;
};
