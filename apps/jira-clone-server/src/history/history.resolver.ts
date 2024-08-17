import * as graphql from "@nestjs/graphql";
import { HistoryResolverBase } from "./base/history.resolver.base";
import { History } from "./base/History";
import { HistoryService } from "./history.service";

@graphql.Resolver(() => History)
export class HistoryResolver extends HistoryResolverBase {
  constructor(protected readonly service: HistoryService) {
    super(service);
  }
}
