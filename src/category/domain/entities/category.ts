import Entity from '../../../@shared/domain/entity/entity';
import UniqueUUid from '../../../@shared/domain/value-objects/unique-uuid-vo';

interface CategoryProperties {
  name: string,
  description?: string,
  is_active?: boolean,
  date?: Date
}

export class Category extends Entity<CategoryProperties>
{
  constructor(public readonly props: CategoryProperties, id?: UniqueUUid) {
    super(props, id);

    this.description = props.description ?? null; 
    this.is_active = props.is_active ?? true; 
    this.date = props.date ?? new Date(); 
  }

  get name(): string {
    return this.props.name; 
  }

  get description(): string {
    return this.props.description;
  }

  private set description(str: string) {
    this.props.description = str; 
  }

  get is_active(): boolean {
    return this.props.is_active; 
  }

  private set is_active(value: boolean) {
    this.props.is_active = value;
  }

  get date(): Date {
    return this.props.date;
  }

  private set date(date: Date) {
    this.props.date = date; 
  }
}