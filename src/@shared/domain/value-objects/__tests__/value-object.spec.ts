import UniqueUUid from "../unique-uuid-vo";
import { ValueObject } from "../value-object";
import { StubUniqueUuid } from "./unique-uuid-vo-stub";

describe("Value object tests", () => {
  
  it('should be valid when return the same value', () => {
    const vo = new StubUniqueUuid('some string'); 
    expect(vo.value).toStrictEqual('some string');
  });

  it('should valid when is assigned a object type', () => {
    let object: Object = {name: 'some name'};
    const vo = new StubUniqueUuid(object); 

    expect(vo.value).toStrictEqual(object); 
  });

  describe("should convert to a string", () => {
    const date = new Date();
    let arrange = [
      { received: "", expected: "" },
      { received: "fake test", expected: "fake test" },
      { received: 0, expected: "0" },
      { received: 1, expected: "1" },
      { received: 5, expected: "5" },
      { received: true, expected: "true" },
      { received: false, expected: "false" },
      { received: date, expected: date.toString() },
      {
        received: { prop1: "value1" },
        expected: JSON.stringify({ prop1: "value1" }),
      },
    ];

    test.each(arrange)(
      "from $received to $expected",
      ({ received, expected }) => {
        const vo = new StubUniqueUuid(received);
        expect(vo + "").toBe(expected);
      }
    );
  });

});