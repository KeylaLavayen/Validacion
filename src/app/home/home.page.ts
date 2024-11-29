import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contrasena: string = '';
  confirmarContrasena: string = '';
  mensaje: string | null = null;
  colorMensaje: string = 'danger';

  constructor() {}

  validarContrasenas() {
    if (this.contrasena === this.confirmarContrasena) {
      this.mensaje = '¡Las contraseñas coinciden!';
      this.colorMensaje = 'success';
    } else {
      this.mensaje = 'Las contraseñas no coinciden.';
      this.colorMensaje = 'danger';
    }
  }
}

