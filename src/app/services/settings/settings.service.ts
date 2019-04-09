import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.theme);
    } else {
      this.aplicarTema(this.ajustes.theme);
    }
  }

  aplicarTema(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url );

    this.ajustes.theme = theme;
    this.ajustes.themeUrl = url;

    this.guardarAjustes();

  }
}

interface Ajustes {
  themeUrl: string;
  theme: string;
}
