/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HistoryWhereInput } from "./HistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HistoryOrderByInput } from "./HistoryOrderByInput";

@ArgsType()
class HistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HistoryWhereInput, { nullable: true })
  @Type(() => HistoryWhereInput)
  where?: HistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [HistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HistoryOrderByInput], { nullable: true })
  @Type(() => HistoryOrderByInput)
  orderBy?: Array<HistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HistoryFindManyArgs as HistoryFindManyArgs };
