export type FieldsErrors = {
  [field: string]: string[];
}

export interface ValidatorInterface<PropsValidated> {
  errors: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean; 
}