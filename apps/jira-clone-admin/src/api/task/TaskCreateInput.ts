import { CommentCreateNestedManyWithoutTasksInput } from "./CommentCreateNestedManyWithoutTasksInput";
import { HistoryCreateNestedManyWithoutTasksInput } from "./HistoryCreateNestedManyWithoutTasksInput";
import { LabelCreateNestedManyWithoutTasksInput } from "./LabelCreateNestedManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StepsCreateNestedManyWithoutTasksInput } from "./StepsCreateNestedManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  comments?: CommentCreateNestedManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  histories?: HistoryCreateNestedManyWithoutTasksInput;
  labels?: LabelCreateNestedManyWithoutTasksInput;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  stepsItems?: StepsCreateNestedManyWithoutTasksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
