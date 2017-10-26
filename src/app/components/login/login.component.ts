import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../Servicios/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
  }


  loginUser(e) {
    	e.preventDefault();
    	console.log(e);
    	var username = e.target.elements[1].value;
    	var password = e.target.elements[4].value;

    	if(username == '91354864' && password == 'admin') {
    
    		this.router.navigate(['/landing']);
    	}
    }
}
