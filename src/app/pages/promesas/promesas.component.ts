import { Component, OnInit } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    const promesa = new Promise( (resolve, reject) => {
      let contador = 0;

      setInterval( () => {
        contador += 1;

        if (contador === 3) {
          resolve('ok');
        }
      }, 1000);
    });

    promesa.then(
      mensaje => console.log('Termino', mensaje)
    ).catch( error => console.log('Error en la promesa', error));
  }

  ngOnInit() {
  }

}
