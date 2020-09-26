import { Droppable } from '@shopify/draggable';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DragDropModule, CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import { coerceBooleanProperty, coerceElement } from '@angular/cdk/coercion';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements OnInit {
  board = new Array(8).fill(undefined).map(() => new Array(8).fill(undefined));

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    const droppy = new Droppable(elRef.nativeElement, {
      draggable: 'app-chesspiece',
      dropzone: 'div',
    });
  }

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<any>) {
    console.log(event);
    let dragged = event.item.element.nativeElement;
    let dropTarget = event.container.element.nativeElement;

    this.renderer.appendChild(dropTarget, dragged);
  }

  logPredicate(drag: any, drop: any) {
    console.log(drag, drop);
    return !drop.element.nativeElement.querySelector('.cdk-drag');
  }

  logEvent(e: any) {
    console.log(e);
  }
}
