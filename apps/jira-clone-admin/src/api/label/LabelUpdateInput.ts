import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type LabelUpdateInput = {
  color?: string | null;
  name?: string | null;
  task?: TaskWhereUniqueInput | null;
};
