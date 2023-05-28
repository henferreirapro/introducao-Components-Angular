import { Component,  Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})

export class Button {
  @Input() label: string= "";

  // add interpolação para deixar o texto dinamico.
  buttonText: string = "ACsESSAR";
  buttonNumber: number = 28;
  buttonTexts: string[] = ["VENDER", "PAGAR"];

}

// INTERPOLAÇÃO
  // podemos add dados para usar dinamicamente em
  // nossos components dentro da class Button no component.ts.
  // Add os dados criando nome do atributo, tipo do dado(string ou button) e por fim o dado.
  // add o dado dinamicamente no component.html usando {{}}, como fizemos no button.component.html


// ADD INPUT
  // Add input no component filho(button.componet.ts), podemos add os dados pelo component pai e assim passar as propriedades diretamente no component dentro do app.component.html.
  // Dessa forma  conseguimos fazer eles se conversarem e passarem os dados  atributos desejados  no component.
  // Podemos declarar usando as duas formas recomendadas:
  // [label]="variavel"
  // label{{variavel}}