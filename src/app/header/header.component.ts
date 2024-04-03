import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  pageRender: string;
  @Output() pageView = new EventEmitter<string>();

  pageDisplay(event: string) {
    this.pageView.emit(event);
  }
}
