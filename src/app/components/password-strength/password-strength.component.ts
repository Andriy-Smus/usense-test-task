// password-strength.component.ts
import { Component } from '@angular/core';
import { ColorService } from '../../color/color.service';


@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {

  constructor(private colorService: ColorService) {}

  get easyColor(): string {
    return this.colorService.easyColor;
  }

  get mediumColor(): string {
    return this.colorService.mediumColor;
  }

  get strongColor(): string {
    return this.colorService.strongColor;
  }

}
