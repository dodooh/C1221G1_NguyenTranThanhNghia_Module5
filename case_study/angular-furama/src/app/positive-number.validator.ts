import {AbstractControl, ValidationErrors} from '@angular/forms';

export function positive_number(control: AbstractControl): ValidationErrors | null {

  const v = control.value;

  if (isNaN(v)) {
    return { positive_number: true, requiredValue: 1 };
  }

  if (v <= 0) {
    return { positive_number: true, requiredValue: 1 };
  }

  return null;

}
