import { Injectable } from '@angular/core';

@Injectable()
export class plantillaService {

  private plantillas:Plantilla[]=[
      {

        id:"1",
        tipodocumento:"cc",
        documento:"91354864",
        nombre:"Danny Ricardo Botello",
        nroplantilla:"19780397",
        estado:"Pendiente",
        forma:"Duplicada",
        fecha:"2017/10/31",
        hora:"8:00:00",
        tipo:"Independiente",
        periodo:"201710",
        fechatrans:"Pendiente",
        total:"288.200"


      }
  ];
  constructor() {
    console.log("Servicio de plantilla");
   }


   getplantillas():Plantilla[]{

        return this.plantillas;
      }


      buscarplantilla(termino:string):Plantilla[]
      {
         let  planillarr:Plantilla[]=[];

          for(let plantilla of this.plantillas)
          {
            let nombrecom=plantilla.tipodocumento;

             if(nombrecom.indexOf( termino)>=0)
             {
               planillarr.push(plantilla)
             }

          }


        return planillarr;
      }

}



export interface Plantilla {

  id:string
  tipodocumento:string,
  documento:string,
  nombre:string,
  nroplantilla:string,
  estado:string,
  forma:string,
  fecha:string,
  hora:string,
  tipo:string,
  periodo:string,
  fechatrans:string,
  total:string

};
