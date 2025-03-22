import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToolbarComponent } from './shared/back-toolbar/back-toolbar.component';
import { BackAsiderComponent } from './shared/back-asider/back-asider.component';

@Component({
  selector: 'app-core',
  imports: [RouterOutlet, BackToolbarComponent, BackAsiderComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
