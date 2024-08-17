import { Steps as TSteps } from "../api/steps/Steps";

export const STEPS_TITLE_FIELD = "description";

export const StepsTitle = (record: TSteps): string => {
  return record.description?.toString() || String(record.id);
};
