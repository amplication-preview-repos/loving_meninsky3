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
import { Label } from "./Label";
import { LabelCountArgs } from "./LabelCountArgs";
import { LabelFindManyArgs } from "./LabelFindManyArgs";
import { LabelFindUniqueArgs } from "./LabelFindUniqueArgs";
import { CreateLabelArgs } from "./CreateLabelArgs";
import { UpdateLabelArgs } from "./UpdateLabelArgs";
import { DeleteLabelArgs } from "./DeleteLabelArgs";
import { Task } from "../../task/base/Task";
import { LabelService } from "../label.service";
@graphql.Resolver(() => Label)
export class LabelResolverBase {
  constructor(protected readonly service: LabelService) {}

  async _labelsMeta(
    @graphql.Args() args: LabelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Label])
  async labels(@graphql.Args() args: LabelFindManyArgs): Promise<Label[]> {
    return this.service.labels(args);
  }

  @graphql.Query(() => Label, { nullable: true })
  async label(
    @graphql.Args() args: LabelFindUniqueArgs
  ): Promise<Label | null> {
    const result = await this.service.label(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Label)
  async createLabel(@graphql.Args() args: CreateLabelArgs): Promise<Label> {
    return await this.service.createLabel({
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

  @graphql.Mutation(() => Label)
  async updateLabel(
    @graphql.Args() args: UpdateLabelArgs
  ): Promise<Label | null> {
    try {
      return await this.service.updateLabel({
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

  @graphql.Mutation(() => Label)
  async deleteLabel(
    @graphql.Args() args: DeleteLabelArgs
  ): Promise<Label | null> {
    try {
      return await this.service.deleteLabel(args);
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
  async getTask(@graphql.Parent() parent: Label): Promise<Task | null> {
    const result = await this.service.getTask(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
