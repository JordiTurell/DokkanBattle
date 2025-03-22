import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  imports: [],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.css'
})
export class ButtonSubmitComponent {
  @Input() textValue:string = ""
  @Output() clicked = new EventEmitter<void>()
  @Input()isLoading:boolean = false

  onClick(){
    this.clicked.emit()
  }
}
