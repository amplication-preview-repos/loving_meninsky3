import { CommentUpdateManyWithoutTasksInput } from "./CommentUpdateManyWithoutTasksInput";
import { HistoryUpdateManyWithoutTasksInput } from "./HistoryUpdateManyWithoutTasksInput";
import { LabelUpdateManyWithoutTasksInput } from "./LabelUpdateManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StepsUpdateManyWithoutTasksInput } from "./StepsUpdateManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  comments?: CommentUpdateManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  histories?: HistoryUpdateManyWithoutTasksInput;
  labels?: LabelUpdateManyWithoutTasksInput;
  priority?: "Option1" | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  stepsItems?: StepsUpdateManyWithoutTasksInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
