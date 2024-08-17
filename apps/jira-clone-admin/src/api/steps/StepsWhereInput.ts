import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type StepsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  task?: TaskWhereUniqueInput;
};
