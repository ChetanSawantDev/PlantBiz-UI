import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule,ButtonDirective,Button } from 'primeng/button';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
