/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Steps } from "./Steps";
import { StepsCountArgs } from "./StepsCountArgs";
import { StepsFindManyArgs } from "./StepsFindManyArgs";
import { StepsFindUniqueArgs } from "./StepsFindUniqueArgs";
import { CreateStepsArgs } from "./CreateStepsArgs";
import { UpdateStepsArgs } from "./UpdateStepsArgs";
import { DeleteStepsArgs } from "./DeleteStepsArgs";
import { Task } from "../../task/base/Task";
import { StepsService } from "../steps.service";
@graphql.Resolver(() => Steps)
export class StepsResolverBase {
  constructor(protected readonly service: StepsService) {}

  async _stepsItemsMeta(
    @graphql.Args() args: StepsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Steps])
  async stepsItems(@graphql.Args() args: StepsFindManyArgs): Promise<Steps[]> {
    return this.service.stepsItems(args);
  }

  @graphql.Query(() => Steps, { nullable: true })
  async steps(
    @graphql.Args() args: StepsFindUniqueArgs
  ): Promise<Steps | null> {
    const result = await this.service.steps(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Steps)
  async createSteps(@graphql.Args() args: CreateStepsArgs): Promise<Steps> {
    return await this.service.createSteps({
      ...args,
      data: {
        ...args.data,

        task: args.data.task
          ? {
              connect: args.data.task,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Steps)
  async updateSteps(
    @graphql.Args() args: UpdateStepsArgs
  ): Promise<Steps | null> {
    try {
      return await this.service.updateSteps({
        ...args,
        data: {
          ...args.data,

          task: args.data.task
            ? {
                connect: args.data.task,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Steps)
  async deleteSteps(
    @graphql.Args() args: DeleteStepsArgs
  ): Promise<Steps | null> {
    try {
      return await this.service.deleteSteps(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Task, {
    nullable: true,
    name: "task",
  })
  async getTask(@graphql.Parent() parent: Steps): Promise<Task | null> {
    const result = await this.service.getTask(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
