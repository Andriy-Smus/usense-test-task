import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usense-test-task';
  password: string = '';
  easyColor = 'gray';
  mediumColor = 'gray';
  strongColor = 'gray';

  checkPasswordStrength() {
  
    const password = this.password;
    
    if (!password) {
      this.easyColor = "gray";
      this.mediumColor = "gray";
      this.strongColor = "gray";
      return;
  }

    if (password.length < 8) {
        this.easyColor = "red";
        this.mediumColor = "red";
        this.strongColor = "red";
        return;
    }
  
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (hasLetters && hasDigits && hasSymbols) {
        this.easyColor = "green";
        this.mediumColor = "green";
        this.strongColor = "green";
    } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
        this.easyColor = "yellow";
        this.mediumColor = "yellow";
        this.strongColor = "gray";
    } else {
        this.easyColor = "red";
        this.mediumColor = "gray";
        this.strongColor = "gray";
    }
  }
  

}

