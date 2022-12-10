import { InvalidUuidError } from "../errors/invalid-uuid-error";
import { v4 as uuid, validate as validateUUID } from "uuid";

export default class UniqueUUid
{
  constructor(public readonly id?: string) {
    this.id = id ?? uuid(); 
    this.validate(); 
  }

  private validate() {
    const isValid = validateUUID(this.id);
    
    if(!isValid) {
      throw new InvalidUuidError(); 
    }
  }
}