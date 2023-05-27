import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})

export class Button {
  // add interpolação para deixar o texto dinamico.
  buttonText: string = "ACESSAR";
  buttonNumber: number = 28;
  buttonTexts: string[] = ["VENDER", "PAGAR"];

}

// podemos add dados para usar dinamicamente em
// nossos components dentro da class Button no component.ts.
// Add os dados criando nome do atributo, tipo do dado(string ou button) e por fim o dado.
// add o dado dinamicamente no component.html usando {{}}, como fizemos no button.component.html
