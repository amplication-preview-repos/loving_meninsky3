import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type LabelCreateInput = {
  color?: string | null;
  name?: string | null;
  task?: TaskWhereUniqueInput | null;
};
