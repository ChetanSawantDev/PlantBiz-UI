import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './user-sign-in.component.html',
  styleUrl: './user-sign-in.component.scss'
})
export class UserSignInComponent {

}
