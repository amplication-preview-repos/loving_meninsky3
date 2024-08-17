import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type HistoryUpdateInput = {
  action?: string | null;
  task?: TaskWhereUniqueInput | null;
  timestamp?: Date | null;
};
