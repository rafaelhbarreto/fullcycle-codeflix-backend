import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Validator } from "../validator";

class RulesStub {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsNumber()
  @IsNotEmpty()
  price: number;

  constructor(data: any) {
    Object.assign(this, data);
  } 
}

class ValidatorStub extends Validator<RulesStub> {
  public validate(data: any): boolean {
    return super.validate(new RulesStub(data));
  }
}

describe('validator integration tests', () => {

  it('should be valid when the validate contain errors', () => {
    const validator = new ValidatorStub(); 
    expect(validator.validate(null)).toBeFalsy();
    expect(validator.errors).toStrictEqual(
      {
        name: [
          'name should not be empty',
          'name must be a string',
          'name must be shorter than or equal to 255 characters'
        ],
        price: [
          'price should not be empty',
          'price must be a number conforming to the specified constraints'
        ]
      }
    );
    expect(validator.validatedData).toBeNull();
  });


  it('should be valida when the validate does not contain errors', () => {
    const validator = new ValidatorStub(); 
    const dataToValidation = {name: 'John doe', price: 5}; 

    expect(validator.validate(dataToValidation)).toBeTruthy(); 
    expect(validator.validatedData).toStrictEqual(new RulesStub(dataToValidation));
  })
});