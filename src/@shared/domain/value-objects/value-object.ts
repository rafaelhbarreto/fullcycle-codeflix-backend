export class ValueObject<Type = string> {
  constructor(protected _value: Type) {}

  get value(): Type {
    return this._value;
  }
}