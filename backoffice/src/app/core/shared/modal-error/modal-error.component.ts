import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  imports: [],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.css'
})
export class ModalErrorComponent {
  @Input() errorMessage:string = ''
  @Output() show = new EventEmitter<boolean>
  @Input() isModalOpen:boolean = false

  constructor(){

  }

  onShow(){
    this.show.emit()
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
