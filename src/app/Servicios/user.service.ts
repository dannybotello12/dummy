import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private logins:Login[]=[
      {

        id:"1",
        tipodocumento:"cc",
        documento:"91354864",
        nombre:"Danny Ricardo Botello",
        tipodocumentousuario:"cc",
        documentousuario:"13245366",
        nombreusuario:"Jose Ramon Botello",
        clave:"test"

      }
  ];

  constructor() {
  console.log("Servicio de login");
 }


 buscarusuario(tipodocumento:string,documento:string,tipodocumentousuario:string,documentousuario:string):Login[]
{
   let  usuarioen:Login[]=[];

    for(let usuario of this.logins)
    {
      let nombrecom=usuario.documento.toLowerCase();

       if(nombrecom.indexOf( documento)>=0)
       {
         usuarioen.push(usuario)
       }

    }


  return usuarioen;
}


}

export interface Login {

  id:string
  tipodocumento:string,
  documento:string,
  nombre:string
  tipodocumentousuario:string,
  documentousuario:string,
  nombreusuario:string,
  clave:string
};
