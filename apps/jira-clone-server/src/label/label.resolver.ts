import * as graphql from "@nestjs/graphql";
import { LabelResolverBase } from "./base/label.resolver.base";
import { Label } from "./base/Label";
import { LabelService } from "./label.service";

@graphql.Resolver(() => Label)
export class LabelResolver extends LabelResolverBase {
  constructor(protected readonly service: LabelService) {
    super(service);
  }
}
