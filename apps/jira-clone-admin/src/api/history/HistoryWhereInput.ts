import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type HistoryWhereInput = {
  action?: StringNullableFilter;
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
