import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChesspieceComponent } from './chesspiece/chesspiece.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ChessboardComponent, ChesspieceComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
