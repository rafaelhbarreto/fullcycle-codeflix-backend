import ValidationError from "./validation-error";

export default class ValidatorRules {

  private constructor(private property: string, private value: any) {}

  public static values(property: string, value: any): ValidatorRules {
    return new ValidatorRules(property, value);
  }

  public required(): this {
    if (this.value === undefined || this.value === null || this.value === "") {
      throw new ValidationError(`The field ${this.property} is required`);
    }

    return this;
  } 

  public string(): this {
    if (!empty(this.value) && typeof this.value !== 'string') {
      throw new ValidationError(`The field ${this.property} must be a string`);
    }

    return this;
  }

  public max(maxLength: number): this {
    if (this.value.length > maxLength) {
      throw new ValidationError(`The field ${this.property} must have less than ${maxLength} caracters`);
    }

    return this;
  }

  public min(minLength: number): this {
    if (this.value.length < minLength) {
      throw new ValidationError(`The field ${this.property} must have greather than ${minLength} caracters`);
    }

    return this;
  }

  public bool(): this {
    if(!empty(this.value) && typeof this.value !== 'boolean') {
      throw new ValidationError(`The field ${this.property} must be a boolean`); 
    }

    return this;
  }
}

export function empty(value: any) {
  return value === undefined || value === null;
}