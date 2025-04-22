import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  imports: [],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})

export class FileInputComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();
  selectedFileName: string = 'Ningún archivo seleccionado';

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFileName = file.name;
      this.fileSelected.emit(file);
    }
  }
}
