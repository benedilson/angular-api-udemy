import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [
    {
      nome: "abc",
      email: "abc@teste.com.br"
    },
    {
      nome: "def",
      email: "def@teste.com.br"
    },
    {
      nome: "ghi",
      email: "ghi@teste.com.br"
    },
    {
      nome: "jkl",
      email: "jkl@teste.com.br"
    }
  ]

  constructor(private usuarioService:UsuarioService) {}

  ngOnInit() {

  }

}
