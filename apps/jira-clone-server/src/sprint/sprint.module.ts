import { Module } from "@nestjs/common";
import { SprintModuleBase } from "./base/sprint.module.base";
import { SprintService } from "./sprint.service";
import { SprintController } from "./sprint.controller";
import { SprintResolver } from "./sprint.resolver";

@Module({
  imports: [SprintModuleBase],
  controllers: [SprintController],
  providers: [SprintService, SprintResolver],
  exports: [SprintService],
})
export class SprintModule {}
