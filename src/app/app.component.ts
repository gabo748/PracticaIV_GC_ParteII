import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneWayBindingUFG';
  tituloAEnviar = 'Titulo enviado desde el padre al hijo';
  mensajeARecivir: string = ''

  handleDataFromChild(mensaje: string) {
    this.mensajeARecivir = mensaje;
  }

}
