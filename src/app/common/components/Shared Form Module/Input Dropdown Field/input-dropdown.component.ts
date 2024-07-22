import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DropDownItem } from '../../../model/SharedFormModule';

@Component({
  selector: 'app-gl-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrl: './input-dropdown.component.scss'
})

//Todo Modify This component for invalid, required fields validations
export class GLInputDropdownComponent {

  @Input() options: DropDownItem[] = [];
  @Input() placeholder: string = 'Select an option';
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  filteredOptions: DropDownItem[] = [];
  selectedOption: DropDownItem | null = null;

  filterOptions($event:any) {
    const query = $event.query.toLowerCase();
    this.filteredOptions = this.options.filter(option => option.label.toLowerCase().includes(query));
  }
  onOptionSelect($event:any) {
    this.selectionChange.emit($event);
  }
  
}
