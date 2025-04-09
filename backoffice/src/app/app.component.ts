import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from '@infrastructure/services/loading/loading.service';
import { NgxSonnerToaster } from 'ngx-sonner';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DokanBattle';
  loadingService: LoadingService = inject(LoadingService);
  
  isLoading = this.loadingService.loading$;

}
