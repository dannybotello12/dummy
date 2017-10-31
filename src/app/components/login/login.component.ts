import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../Servicios/user.service';
import { plantilla } from '../../Servicios/plantilla';
import { FormControl, FormGroup, Validators,ReactiveFormsModule,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }
   mostraralerta:boolean;
   alerta:string;

  ngOnInit() {
  }


  loginUser(e,forma:NgForm) {
    	e.preventDefault();


      if (forma.valid)
      {

      let caso:number=0;
    	var username = e.target.elements[1].value;
    	var password = e.target.elements[4].value;
      let Allplantillasvacias:plantilla[]=[];
      let Allplantillas:plantilla[]=[
  {
     nro: "19780397",
     forma: "DUPLICADA",
     fecha: "2017/09/02",
     hora:  "01:53:45 pm",
     tipo:"Independiente",
     perido:"201709",
     fechatrans:"pendiente",
     total:"$ 288.200.00",
     banco:"",
      horatrans:""
  },
  {
    nro: "19780398",
    forma: "DUPLICADA",
    fecha: "2017/09/02",
    hora:  "01:55:45 pm",
    tipo:"Independiente",
    perido:"201710",
    fechatrans:"pendiente",
    total:"$ 288.200.00",
     banco:"",
      horatrans:""
  }
]


let Allplantillaspagadas:plantilla[]=[
{
nro: "19780395",
forma: "DUPLICADA",
fecha: "2017/06/02",
hora:  "01:53:45 pm",
tipo:"Independiente",
perido:"201707",
fechatrans:"2017/07/01",
total:"$ 288.200.00",
banco:"Bancolombia",
horatrans:"10:00:00"
},
{
nro: "19780396",
forma: "DUPLICADA",
fecha: "2017/07/02",
hora:  "01:55:45 pm",
tipo:"Independiente",
perido:"201708",
fechatrans:"2017/08/01",
total:"$ 288.200.00",
 banco:"Davivienda",
 horatrans:"14:20:10"
}
]



    	if(username == '91354864' && password == 'admin') {
        caso=1;
        localStorage.setItem("caso", "1")
        localStorage.setItem("Nombre", "Jose Eduardo Martinez")
        localStorage.setItem("documento", username)
        localStorage.setItem("platillas", JSON.stringify(Allplantillas));
        localStorage.setItem("platillaspagadas", JSON.stringify(Allplantillaspagadas));
        localStorage.setItem("nrosiguiente","19780399");
        localStorage.setItem("periodosiguiente","201711");
    		this.router.navigate(['/landing']);


    	}

      if(username == '13245366' && password == 'admin') {
        caso=2;
        localStorage.setItem("caso", "2")
        localStorage.setItem("Nombre", "Francisco Ramirez")
        localStorage.setItem("documento", username)
        localStorage.setItem("platillas", JSON.stringify(Allplantillasvacias));
        localStorage.setItem("platillaspagadas", JSON.stringify(Allplantillaspagadas));
        localStorage.setItem("nrosiguiente","19780399");
        localStorage.setItem("periodosiguiente","201711");
        this.router.navigate(['/landing']);



    	}

      if(username == '27274972' && password == 'admin') {
        caso=3;
          localStorage.setItem("caso", "3")
          localStorage.setItem("Nombre", "Maria Cristina Gonzalez")
    		  this.router.navigate(['/landing']);
          localStorage.setItem("platillas", JSON.stringify(Allplantillasvacias));
          localStorage.setItem("platillaspagadas", JSON.stringify(Allplantillasvacias));
          localStorage.setItem("nrosiguiente","0");
          localStorage.setItem("periodosiguiente","0");

    	}

      if (caso==0)
      {
        this.mostraralerta=true;
        this.alerta= "Usuario o Contraseña incorrecta"
      }

    }
    else
    {
         this.mostraralerta=true;
         this.alerta= "Debe ingresar datos Obligatorios"

    }
  }

}
