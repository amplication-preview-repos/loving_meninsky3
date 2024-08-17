import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StepsService } from "./steps.service";
import { StepsControllerBase } from "./base/steps.controller.base";

@swagger.ApiTags("steps")
@common.Controller("steps")
export class StepsController extends StepsControllerBase {
  constructor(protected readonly service: StepsService) {
    super(service);
  }
}
