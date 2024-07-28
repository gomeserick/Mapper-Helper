import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {

  @Input() public name: string = "select-dropdown";
  @Input() public data: string[] = ['Test', 'Test2'];
  @Input() public selected: string = "";
  @Output() public onSelected = new EventEmitter<string>();

  public toggleSelected(event: Event) {

    let element = event.currentTarget as HTMLElement;

    this.showOrHideElement(element);
  }

  private showOrHideElement(element: HTMLElement) {
    element.ariaExpanded = (!(element.ariaExpanded === 'true')).toString();

    if(element.ariaExpanded === 'true') {
      element.parentElement!.children.namedItem(this.name)!.classList.add('active');
    } else {
      element.parentElement!.children.namedItem(this.name)!.classList.remove('active');
    }
  }

  public onSelection(event: Event, value: string) {
    this.selected = value;
    this.onSelected.emit(value);
    let element = event.currentTarget as HTMLElement;
    this.showOrHideElement(element.parentElement!.parentElement!.children.namedItem('button') as HTMLElement);
  }
}
