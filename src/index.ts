import { NgModule } from '@angular/core';

import { email, EmailValidator } from './email';
import { max, MaxValidator } from './max';
import { min, MinValidator } from './min';
import { number, NumberValidator } from './number';

export const CustomValidators: any = {
  email,
  max,
  min,
  number
};

const CUSTOM_FORM_DIRECTIVES = [
  EmailValidator,
  MaxValidator,
  MinValidator,
  NumberValidator];

@NgModule({
  declarations: [CUSTOM_FORM_DIRECTIVES],
  exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule {
}
