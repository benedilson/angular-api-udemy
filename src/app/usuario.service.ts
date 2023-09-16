import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Teste"
    usuario.email = "teste@teste.com.br"

    return usuario
  }

  public listaUsuario(): Usuario[] {
    return [
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
  }
}
