import { Module } from "@nestjs/common";
import { HistoryModuleBase } from "./base/history.module.base";
import { HistoryService } from "./history.service";
import { HistoryController } from "./history.controller";
import { HistoryResolver } from "./history.resolver";

@Module({
  imports: [HistoryModuleBase],
  controllers: [HistoryController],
  providers: [HistoryService, HistoryResolver],
  exports: [HistoryService],
})
export class HistoryModule {}
