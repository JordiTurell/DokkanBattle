import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {
  options = [
    { id: 1, name: 'Opción 1', selected: false },
    { id: 2, name: 'Opción 2', selected: false },
    { id: 3, name: 'Opción 3', selected: false },
    { id: 4, name: 'Opción 4', selected: false }
  ];

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSelection(option: any) {
    option.selected = !option.selected;
  }

  get selectedOptions() {
    return this.options.filter(opt => opt.selected).map(opt => opt.name).join(', ');
  }
}
