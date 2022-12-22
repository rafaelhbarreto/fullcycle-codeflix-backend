import ValidationError from "./validation-error";
import ValidatorRules from "./validation-rules";

interface arrangeValidationError {
  field: string, 
  value: string | null | undefined | number,
  message: string
}; 

describe("Validator unit testes", () => {
  
  it('should thrown an error when the field is required', () => {
    const arrange: arrangeValidationError[] = [
      {field: 'field', value: null, message: 'Some message'},
      {field: 'field', value: undefined, message: 'Some message'},
      {field: 'field', value: '', message: 'Some message'}
    ]; 

    arrange.forEach(caseTest => {
      expect(() => {
        ValidatorRules.values(caseTest.field, caseTest.value).required()
      }).toThrowError(ValidationError); 
    }); 
  });


  it('should not thrown error when the field is correct', () => {
    const arrange: arrangeValidationError[] = [
      {field: 'field', value: 'some value', message: 'Some message'},
      {field: 'field', value: 0, message: 'Some message'},
      {field: 'field', value: '0', message: 'Some message'},
    ]; 

    arrange.forEach(caseTest => {
      expect(() => {
        ValidatorRules.values(caseTest.field, caseTest.value).required()
      }).not.toThrowError(ValidationError); 
    });
  }); 

  it('should thrown an error when the type is not a string', () => {
    expect(() => {
      ValidatorRules.values('field', 0).string(); 
    }).toThrowError(ValidationError); 
  });

  it('should not thrown an error when the type is a string', () => {
    expect(() => {
      ValidatorRules.values('field', 'some string').string(); 
    }).not.toThrowError(ValidationError); 
  });

  it('should thrown an error when the value length is greather than max allowed', () => {
    expect(() => {
      ValidatorRules.values('field', 'some value').max(2); 
    }).toThrowError(ValidationError); 
  });

  it('should not thrown an error when the value length is correc', () => {
    expect(() => {
      ValidatorRules.values('field', 'some').max(4); 
    }).not.toThrowError(ValidationError); 
  });

  it('should thrown an error when the value length is less than min allowed', () => {
    expect(() => {
      ValidatorRules.values('field', 'some value').min(20); 
    }).toThrowError(ValidationError); 
  });

  it('should not thrown an error when the value length is correct', () => {
    expect(() => {
      ValidatorRules.values('field', 'some').min(2); 
    }).not.toThrowError(ValidationError); 
  });

  it('should thrown an error when the value is not a boolean', () => {
    expect(() => {
      ValidatorRules.values('field', 'some value').bool(); 
    }).toThrowError(ValidationError); 
  });

  it('should not thrown an error when the boolean value is correct', () => {
    expect(() => {
      ValidatorRules.values('field', true).bool(); 
    }).not.toThrowError(ValidationError); 
    expect(() => {
      ValidatorRules.values('field', false).bool(); 
    }).not.toThrowError(ValidationError); 
  });
}); 