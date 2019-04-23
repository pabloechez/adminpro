import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioService} from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements  CanActivate {
  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ) {}

  canActivate() {
    if ( this.usuarioService.estaLogueado()) {
      console.log(this.usuarioService.token);
      return true;
    } else {
      console.log('Bloqueado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
