export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message ?? 'UUID must be a valid UUID'); 
    this.name = 'InvalidUuidError';
  }
}