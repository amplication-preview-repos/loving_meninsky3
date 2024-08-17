import { Sprint as TSprint } from "../api/sprint/Sprint";

export const SPRINT_TITLE_FIELD = "name";

export const SprintTitle = (record: TSprint): string => {
  return record.name?.toString() || String(record.id);
};
