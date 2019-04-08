import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;

  @Input() porcentaje = 50;
  @Input() leyenda = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnChanges(newValue: number) {

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtPorcentaje.nativeElement.value = Number(this.porcentaje);
    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor(cantidad) {
    if (this.porcentaje >= 100 && cantidad > 0) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && cantidad < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + cantidad;

    this.cambioValor.emit( this.porcentaje );

    this.txtPorcentaje.nativeElement.focus();
  }
}
