import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedFormModule } from './common/components/Shared Form Module/shared-form-module.module';
import { DropDownItem } from './common/model/SharedFormModule';
import { AppShellModule } from './common/components/App Shell/app-shell.module';

class City extends DropDownItem{
  constructor(label:string, value:any, rowObjData:Object){
    super(label, value, rowObjData);
  }

}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedFormModule,AppShellModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PlantBiz_MIS';
  inputValue :boolean = false;

  cities: City[] = [];
  selectedCity: City | null = null;
  

  selecteDate :string= '';

  constructor() {
    this.cities = [
      new City('New York', 'NY', new Object()),
      new City('Rome', 'RM', new Object()),
      new City('London', 'LDN', new Object()),
      new City('Paris', 'PRS', new Object()),
      new City('Berlin', 'BRL', new Object())
    ];
  }

  onCityChange($event:any) {
    console.log('Selected City:', $event);
  }
}
