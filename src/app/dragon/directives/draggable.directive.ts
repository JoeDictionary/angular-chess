import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dgnDraggable]',
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  private _dragging = false;

  @HostListener('pointerdown') onPointerDown(): void {
    this._dragging = true;
    console.log('DragStart');
  }

  @HostListener('document:pointermove') onPointerMove(): void {
    if (!this._dragging) return;
    console.log('DragMove');
	}
	
	@HostListener('document:pointerup') onPointerUp() {
		this._dragging = false

	}
}
