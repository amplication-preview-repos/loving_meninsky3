import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  task?: TaskWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
