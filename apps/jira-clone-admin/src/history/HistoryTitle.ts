import { History as THistory } from "../api/history/History";

export const HISTORY_TITLE_FIELD = "action";

export const HistoryTitle = (record: THistory): string => {
  return record.action?.toString() || String(record.id);
};
