import ValidatorRules from '../../../@shared/validation/validation-rules';
import Entity from '../../../@shared/domain/entity/entity';
import UniqueUUid from '../../../@shared/domain/value-objects/unique-uuid-vo';
import CategoryValidatorFactory from './category-validator';

export interface CategoryProperties {
  name: string,
  description?: string,
  is_active?: boolean,
  date?: Date
}

export class Category extends Entity<CategoryProperties>
{
  constructor(public readonly props: CategoryProperties, id?: UniqueUUid) {

    Category.validate(props); 

    super(props, id);

    this.description = props.description; 
    this.is_active = props.is_active ?? true; 
    this.date = props.date ?? new Date(); 
  }

  // static validate(props: Omit<CategoryProperties, 'id' | 'date'>): void {
  //   ValidatorRules.values('name', props.name).required().string();
  //   ValidatorRules.values('description', props.description).string();
  //   ValidatorRules.values('is_active', props.is_active).bool();
  // }

  public static validate(categoryProps: CategoryProperties) {
    const validator = CategoryValidatorFactory.create(); 
    return validator.validate(categoryProps);
  }

  get name(): string {
    return this.props.name; 
  }

  get description(): string {
    return this.props.description ?? null;
  }

  private set description(str: string) {
    this.props.description = str ?? null; 
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

  public update(name: string, description: string) {
    
    Category.validate({
      name,
      description
    }); 

    this.props.name = name; 
    this.props.description = description; 
  }

  public activate() {
    this.props.is_active = true; 
  }

  public deactivate() { 
    this.props.is_active = false;
  }
}