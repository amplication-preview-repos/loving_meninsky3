import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HistoryService } from "./history.service";
import { HistoryControllerBase } from "./base/history.controller.base";

@swagger.ApiTags("histories")
@common.Controller("histories")
export class HistoryController extends HistoryControllerBase {
  constructor(protected readonly service: HistoryService) {
    super(service);
  }
}
