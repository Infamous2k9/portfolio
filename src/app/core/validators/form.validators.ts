import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Fails when the value only consists of whitespace ("   " passes Validators.required). */
export const notBlank: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (typeof value !== 'string' || value.length === 0) {
    return null; // empty values are handled by Validators.required
  }
  return value.trim().length === 0 ? { blank: true } : null;
};

/** Like Validators.minLength, but ignores leading and trailing whitespace. */
export function trimmedMinLength(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'string' || value.length === 0) {
      return null;
    }
    const actualLength = value.trim().length;
    return actualLength < minLength
      ? { minlength: { requiredLength: minLength, actualLength } }
      : null;
  };
}
