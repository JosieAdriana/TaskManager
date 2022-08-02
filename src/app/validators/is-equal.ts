import { FormGroup } from '@angular/forms';

export function isEqual(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['match']) {
      return;
    }

    if (!matchingControl.value) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      return matchingControl.setErrors({ match: true });
    } else {
      return matchingControl.setErrors(null);
    }
  };
}