import { HistoryWhereInput } from "./HistoryWhereInput";
import { HistoryOrderByInput } from "./HistoryOrderByInput";

export type HistoryFindManyArgs = {
  where?: HistoryWhereInput;
  orderBy?: Array<HistoryOrderByInput>;
  skip?: number;
  take?: number;
};
