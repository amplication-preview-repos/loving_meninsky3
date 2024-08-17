import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StepsServiceBase } from "./base/steps.service.base";

@Injectable()
export class StepsService extends StepsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
