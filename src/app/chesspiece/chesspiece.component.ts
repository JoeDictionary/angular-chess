import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-chesspiece',
  templateUrl: './chesspiece.component.html',
  styleUrls: ['./chesspiece.component.scss'],
})
export class ChesspieceComponent implements OnInit, AfterViewInit {
  pieceTypes = ['pawn', 'rook', 'knight', 'bishop', 'queen', 'king'];
  private _color: string = 'w';
  private _type: string = 'p';

  constructor(elRef: ElementRef) {}

  get color() {
    return this._color;
  }
  @Input('color') set color(c: string) {
    // console.log(c)
    if (c === this.color) return;
    if (c === 'w' || c === 'b') this._color = c;
  }

  get type() {
    return this._type;
  }
  @Input('type') set type(t: string) {
    // console.log(t)
    if (this.pieceTypes.includes(t)) this._type = t;
  }

  ngOnInit(): void {
    console.log(this.color, this.type);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
