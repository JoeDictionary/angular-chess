import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  CdkDrag,
  CdkDragRelease,
  CdkDragEnd,
} from '@angular/cdk/drag-drop';
import { coerceBooleanProperty, coerceElement } from '@angular/cdk/coercion';

// https://stackoverflow.com/questions/54547772/removing-placeholder-for-drop-area-when-cursor-not-in-drop-zone-in-material-cdk
@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements OnInit {
  board = new Array(8).fill(undefined).map(() => new Array(8).fill(undefined));

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<any>) {
    console.log(event);
    let dragged = event.item.element.nativeElement;
    let dropTarget = event.container.element.nativeElement;

    this.renderer.appendChild(dropTarget, dragged);
  }

  logPredicate(drag: CdkDrag, drop: any) {
    // Gets the first draggable element, if there are any, in the attempted drop container
    let dropElContent = drop.element.nativeElement.querySelector('.cdk-drag');

    // console.log(dropElContent, drag.element.nativeElement);
    if (dropElContent === drag.element.nativeElement) return true;
    return !drop.element.nativeElement.querySelector('app-chesspiece');
  }

  logEvent(e: any) {
    console.log(e);
  }

  dragReleased(e: CdkDragRelease) {
    e.source.reset();
    console.log('Released', e);
  }

  dragDropped(e: any) {
    console.log('Dropped', e);
  }

  dragEnded(e: CdkDragEnd) {
    console.log('Ended', e);
  }
}
