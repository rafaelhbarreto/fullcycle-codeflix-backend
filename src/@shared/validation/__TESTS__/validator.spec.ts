import { Validator } from "../validator";
import * as libClassValidator from 'class-validator'; 

class ValidatorStub extends Validator<{field: string}> 
{}

describe("Validator tests", () => {
  it('should initialize validationData and errors with null', () => {
    const validatorStub = new ValidatorStub();

    expect(validatorStub.errors).toBeNull();
    expect(validatorStub.validatedData).toBeNull();
  });

  it('should be valid when the validator contains errors', () => {
    // define the spy 
    const spyValidator = jest.spyOn(libClassValidator, "validateSync"); 
    
    // define the value when the spy was called. 
    spyValidator.mockReturnValue([
      {property: "field", constraints: {isRequired: "Some Error"}}
    ]);

    const validator = new ValidatorStub(); 

    expect(validator.validate(null)).toBeFalsy();
    expect(spyValidator).toHaveBeenCalled();
    expect(validator.validatedData).toBeNull();
    expect(validator.errors).toStrictEqual({field: ["Some Error"]});
  });

  it('should be valid when the validator not contain errors', () => {
    const spyValidator = jest.spyOn(libClassValidator, "validateSync"); 

    spyValidator.mockReturnValue([]);

    const validator = new ValidatorStub(); 

    expect(validator.validate(null)).toBeTruthy();
    expect(spyValidator).toHaveBeenCalled();
    expect(validator.validatedData).toBeNull();
    expect(validator.errors).toBeNull();
  });

}); 