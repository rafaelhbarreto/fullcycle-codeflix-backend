import UniqueUUid from "../value-objects/unique-uuid-vo";

export default abstract class Entity<Props>
{
  public readonly uniqueId: UniqueUUid; 

  constructor(public props: Props, uniqueId?: UniqueUUid) {
    this.uniqueId = uniqueId || new UniqueUUid(); 
  }

  get id(): string {
    return this.uniqueId.value;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id, 
      ...this.props
    } as Required<{ id: string } & Props>;
  } 
}