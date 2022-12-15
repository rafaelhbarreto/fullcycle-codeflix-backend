import Entity from "./entity";
import { validate } from 'uuid'; 
import UniqueUUid from "../value-objects/unique-uuid-vo";

class EntityStub extends Entity<{prop1: string, prop2: number}> {}

describe('Generic entity unit tests', () => {

  it('should validate the entity props', () => {
    const props = {
      prop1: 'something', 
      prop2: 10
    }; 
  
    const stubEntity = new EntityStub(props);
    expect(stubEntity.props).toMatchObject(props);
  });


  it('should be valid when the entity id is a valid uuid', () => {
    const props = {prop1: 'something', prop2: 10}; 
    const uniqueId = new UniqueUUid(); 

    const stubEntity = new EntityStub(props, uniqueId); 

    expect(stubEntity.id).toBe(uniqueId.value)
    expect(validate(stubEntity.id)).toBeTruthy();
    expect(stubEntity.uniqueId).toBeInstanceOf(UniqueUUid)
  });

  it('should convert the entity to object', () => {
    const props = {prop1: 'something', prop2: 10}; 
    const uniqueId = new UniqueUUid(); 
    const stubEntity = new EntityStub(props, uniqueId);
    
    expect(stubEntity.toJSON()).toStrictEqual({
      id: uniqueId.value,
      ...props
    });
  });

});