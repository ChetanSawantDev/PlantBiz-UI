import { Component } from '@angular/core';
import { ButtonModule,ButtonDirective,Button } from 'primeng/button';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
