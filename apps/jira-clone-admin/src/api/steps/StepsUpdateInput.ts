import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type StepsUpdateInput = {
  description?: string | null;
  status?: "Option1" | null;
  task?: TaskWhereUniqueInput | null;
};
