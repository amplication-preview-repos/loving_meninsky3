import { SortOrder } from "../../util/SortOrder";

export type LabelOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
