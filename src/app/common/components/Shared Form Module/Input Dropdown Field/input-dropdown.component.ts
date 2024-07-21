import {Component} from '@angular/core';


@Component({
  selector: 'app-gl-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrl: './input-dropdown.component.scss'
})
export class GLInputDropdownComponent {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
