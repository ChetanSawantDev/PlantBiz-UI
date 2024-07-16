import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedFormModule } from './common/components/Shared Form Module/shared-form-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedFormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PlantBiz_MIS';
}
