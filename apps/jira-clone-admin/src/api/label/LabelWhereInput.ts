import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type LabelWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
};
