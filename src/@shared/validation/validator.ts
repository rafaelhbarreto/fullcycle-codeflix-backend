import { validateSync } from "class-validator";
import { FieldsErrors, ValidatorInterface } from "./validator-interface";

export abstract class Validator<PropsValidated> implements ValidatorInterface<PropsValidated> {
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;

  public validate(data: any): boolean {
    const errors = validateSync(data); 

    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        let field = error.property; 
        this.errors[field] = Object.values(error.constraints); 
      }
    } else {
      this.validatedData = data;
    }

    return !errors.length; 
  } 
}