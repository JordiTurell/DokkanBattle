import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-asider',
  imports: [RouterLink],
  templateUrl: './back-asider.component.html',
  styleUrl: './back-asider.component.css'
})
export class BackAsiderComponent {
  @Input() isOpen = true;
}
