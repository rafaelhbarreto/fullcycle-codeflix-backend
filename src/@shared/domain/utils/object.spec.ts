import { deepFreeze } from "./object";

describe("Object utils tests", () => {

  it('should cannot freeze scalar types', () => {
    const str = deepFreeze('a'); 
    expect(typeof str).toBe('string'); 
    
    const b = deepFreeze(true); 
    expect(typeof b).toBe("boolean");

    const n = deepFreeze(1); 
    expect(typeof n).toBe("number");
  }); 

  it('should freeze a object', () => {
    const obj = {
      prop1: 'aaa',
      prop2: 'bbb',
      prop3: {
        prop31: 'aaaa'
      }
    }; 

    deepFreeze(obj); 


    expect(() => {obj.prop1 = '111'; }).toThrow(TypeError);
    
  })
}); 