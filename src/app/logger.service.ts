import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  nome = "";

  adicionarNome() {
    alert(`O nome ${this.nome} foi adicionado`);
  }

}
