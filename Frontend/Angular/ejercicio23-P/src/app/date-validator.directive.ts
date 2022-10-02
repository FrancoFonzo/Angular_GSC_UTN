import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ]
})

export class DateValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl): ValidationErrors | null{
    let fecha: Date = new Date(control.value);
  
    if (fecha.toString() === "Invalid Date" && control.touched) {
      return { 'isValid': true, message: 'Campo obligatorio!' };
    }
    if (fecha.getDay() === 5) {
      return { 'isValid': true, message: 'No puede ser un sábado!' };
    }
    if (fecha.getDay() === 6) {
      return { 'isValid': true, message: 'No puede ser un domingo!' };
    }
    return null;
  }
  
}
