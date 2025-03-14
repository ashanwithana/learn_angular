import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnClass: string = '';
  @Input() btnText: string = '';

  @Output() onBtnClicked = new EventEmitter<any>();

  onclick() {
    this.onBtnClicked.emit('admin');
  }
}
