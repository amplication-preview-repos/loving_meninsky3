import * as graphql from "@nestjs/graphql";
import { SprintResolverBase } from "./base/sprint.resolver.base";
import { Sprint } from "./base/Sprint";
import { SprintService } from "./sprint.service";

@graphql.Resolver(() => Sprint)
export class SprintResolver extends SprintResolverBase {
  constructor(protected readonly service: SprintService) {
    super(service);
  }
}
