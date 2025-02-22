import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-asider',
  imports: [],
  templateUrl: './back-asider.component.html',
  styleUrl: './back-asider.component.css'
})
export class BackAsiderComponent {
  @Input() isOpen = true;
}
