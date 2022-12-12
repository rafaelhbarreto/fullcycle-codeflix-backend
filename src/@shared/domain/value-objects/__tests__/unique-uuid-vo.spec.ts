import { v4 as uuid } from "uuid";
import { InvalidUuidError } from "../../../errors/invalid-uuid-error";
import UniqueUUid from "./../unique-uuid-vo";

describe('Unique ID value object tests', () => {
  it('should throw an error when the uuid is invalid', () => {
    expect(() => new UniqueUUid('some id')).toThrow(new InvalidUuidError());
  });

  it('The validate method should be called', () => {
    // Is necessary create an alias "as any" because the validate method is private.
    const validateSpy = jest.spyOn(UniqueUUid.prototype as any, 'validate'); 
    expect(() => new UniqueUUid('some id')).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled(); 
  });


  it('should be valid when the unique id is ok', () => {
    expect(new UniqueUUid(uuid())).toBeInstanceOf(UniqueUUid);
  });
}); 