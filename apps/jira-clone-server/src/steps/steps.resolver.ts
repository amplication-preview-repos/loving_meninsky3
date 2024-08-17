import * as graphql from "@nestjs/graphql";
import { StepsResolverBase } from "./base/steps.resolver.base";
import { Steps } from "./base/Steps";
import { StepsService } from "./steps.service";

@graphql.Resolver(() => Steps)
export class StepsResolver extends StepsResolverBase {
  constructor(protected readonly service: StepsService) {
    super(service);
  }
}
