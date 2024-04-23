import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Bruno";
  dataNascimento = "1996-02-02";
  urlImagem = "/assets/foto_perfil.png";

  mostrarData(){
    alert(`A data de nascimento do ${this.nome} é: ${this.dataNascimento}`);
  }
}
