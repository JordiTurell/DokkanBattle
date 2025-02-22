import { Component } from '@angular/core';
import { BackAsiderComponent } from '../../back/components/back-asider/back-asider.component';
import { BackToolbarComponent } from '../../back/components/back-toolbar/back-toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-back',
  imports: [RouterOutlet, BackToolbarComponent, BackAsiderComponent],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
