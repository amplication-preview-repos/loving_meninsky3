import { SortOrder } from "../../util/SortOrder";

export type HistoryOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
