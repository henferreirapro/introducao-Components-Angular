import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  buttonLabel: string = "CARRINHO";
  buttonAdd: string = "ADICIONAR";
  buttonRemove: string = "REMOVER";
  
}

// Add input no component filho(button.componet.ts), podemos add os dados pelo component pai e assim passar as propriedades diretamente no component dentro do app.component.html.

// Dessa forma  conseguimos fazer eles se conversarem e passarem os dados  atributos desejados  no component.

// Podemos declarar usando as duas formas recomendadas:
// [label]="variavel"
// label{{variavel}}

// Ambas  podem ser usadas na hora de declarar.