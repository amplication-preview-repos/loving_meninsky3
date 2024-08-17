import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HistoryListRelationFilter } from "../history/HistoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabelListRelationFilter } from "../label/LabelListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StepsListRelationFilter } from "../steps/StepsListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  histories?: HistoryListRelationFilter;
  id?: StringFilter;
  labels?: LabelListRelationFilter;
  priority?: "Option1";
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  stepsItems?: StepsListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
