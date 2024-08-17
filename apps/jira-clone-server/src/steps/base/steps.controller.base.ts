/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StepsService } from "../steps.service";
import { StepsCreateInput } from "./StepsCreateInput";
import { Steps } from "./Steps";
import { StepsFindManyArgs } from "./StepsFindManyArgs";
import { StepsWhereUniqueInput } from "./StepsWhereUniqueInput";
import { StepsUpdateInput } from "./StepsUpdateInput";

export class StepsControllerBase {
  constructor(protected readonly service: StepsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Steps })
  async createSteps(@common.Body() data: StepsCreateInput): Promise<Steps> {
    return await this.service.createSteps({
      data: {
        ...data,

        task: data.task
          ? {
              connect: data.task,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Steps] })
  @ApiNestedQuery(StepsFindManyArgs)
  async stepsItems(@common.Req() request: Request): Promise<Steps[]> {
    const args = plainToClass(StepsFindManyArgs, request.query);
    return this.service.stepsItems({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Steps })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async steps(
    @common.Param() params: StepsWhereUniqueInput
  ): Promise<Steps | null> {
    const result = await this.service.steps({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        status: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Steps })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSteps(
    @common.Param() params: StepsWhereUniqueInput,
    @common.Body() data: StepsUpdateInput
  ): Promise<Steps | null> {
    try {
      return await this.service.updateSteps({
        where: params,
        data: {
          ...data,

          task: data.task
            ? {
                connect: data.task,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,

          task: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Steps })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSteps(
    @common.Param() params: StepsWhereUniqueInput
  ): Promise<Steps | null> {
    try {
      return await this.service.deleteSteps({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          status: true,

          task: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
