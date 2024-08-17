import { StepsWhereInput } from "./StepsWhereInput";
import { StepsOrderByInput } from "./StepsOrderByInput";

export type StepsFindManyArgs = {
  where?: StepsWhereInput;
  orderBy?: Array<StepsOrderByInput>;
  skip?: number;
  take?: number;
};
