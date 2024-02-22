// password-input.component.ts
import { Component, forwardRef, OnInit } from '@angular/core';
import { ColorService } from '../../color/color.service';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
  }]
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit {
  password: string = '';
  formGroup: FormGroup;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private colorService: ColorService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
    });
  } 

  ngOnInit(): void {
    this.formGroup.addControl('password', new FormControl(''));
  }

  writeValue(value: any): void {
    this.formGroup.get('password')?.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  checkPasswordStrength() {
    this.password = this.formGroup.get('password')?.value;
    this.colorService.password = this.password;
    this.colorService.checkPasswordStrength();    
  }

}
