import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type HistoryCreateInput = {
  action?: string | null;
  task?: TaskWhereUniqueInput | null;
  timestamp?: Date | null;
};
