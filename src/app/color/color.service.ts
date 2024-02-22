// color.servise
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  easyColor: string = 'gray';
  mediumColor: string = 'gray';
  strongColor: string = 'gray';
  password: string = '';

  constructor() { }

  private setColors(easyColor: string, mediumColor: string, strongColor: string) {
    this.easyColor = easyColor;
    this.mediumColor = mediumColor;
    this.strongColor = strongColor;
  }

  checkPasswordStrength() {
    if (!this.password) {
      this.setColors('gray', 'gray', 'gray');
      return;
   }

    if (this.password.length < 8) {
      this.setColors('red', 'red', 'red');
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (hasLetters && hasDigits && hasSymbols) {
      this.setColors('green', 'green', 'green');
    } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
        this.setColors('yellow', 'yellow', 'gray');
    } else {
      this.setColors('red', 'gray', 'gray');
    }
  }
}
