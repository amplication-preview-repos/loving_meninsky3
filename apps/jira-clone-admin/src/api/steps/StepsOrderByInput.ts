import { SortOrder } from "../../util/SortOrder";

export type StepsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
