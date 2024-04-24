import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {
  nome: string = '';

  constructor(private logger: LoggerService){
    this.logger.nome = this.nome;
    this.logger.adicionarNome();
  }

  chamarAdicionarNome(){
    this.chamarAdicionarNome();
  }

}
