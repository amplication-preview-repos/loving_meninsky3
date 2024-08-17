/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StepsWhereUniqueInput } from "../../steps/base/StepsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StepsUpdateManyWithoutTasksInput {
  @Field(() => [StepsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StepsWhereUniqueInput],
  })
  connect?: Array<StepsWhereUniqueInput>;

  @Field(() => [StepsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StepsWhereUniqueInput],
  })
  disconnect?: Array<StepsWhereUniqueInput>;

  @Field(() => [StepsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StepsWhereUniqueInput],
  })
  set?: Array<StepsWhereUniqueInput>;
}

export { StepsUpdateManyWithoutTasksInput as StepsUpdateManyWithoutTasksInput };
