import { Module } from "@nestjs/common";
import { StepsModuleBase } from "./base/steps.module.base";
import { StepsService } from "./steps.service";
import { StepsController } from "./steps.controller";
import { StepsResolver } from "./steps.resolver";

@Module({
  imports: [StepsModuleBase],
  controllers: [StepsController],
  providers: [StepsService, StepsResolver],
  exports: [StepsService],
})
export class StepsModule {}
