import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Validator } from "../../../@shared/validation/validator";
import { CategoryProperties } from "./category";

export class CategoryRules 
{
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsOptional()
  description: string; 

  @IsBoolean()
  @IsOptional()
  is_active: boolean; 

  @IsOptional()
  @IsDate()
  created_at: Date; 

  constructor(props: CategoryProperties) {
    Object.assign(this, props);
  }
}

export class CategoryValidator extends Validator<CategoryRules> 
{
  public validate(categoryProps: CategoryProperties): boolean {
    return super.validate(new CategoryRules(categoryProps ?? {} as any));
  }
}

export default class CategoryValidatorFactory {
  public static create() {
    return new CategoryValidator();
  }
}