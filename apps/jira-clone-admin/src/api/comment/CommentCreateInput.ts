import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  task?: TaskWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
