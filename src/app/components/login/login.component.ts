import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { NgForm } from '@angular/forms';
import { Register } from '../../models/Register';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public cubos!: Cubo[];
  @ViewChild('compraForm') compraFormRef!: NgForm;
  @ViewChild('selectcubo') selectCuboRef!: ElementRef;

  public cubo!: Cubo;


  @ViewChild('loginForm') loginForm!: NgForm;
  @ViewChild('userName') usernameRef!: ElementRef;
  @ViewChild('password') passwordRef!: ElementRef;

  public users!: Register[];

  public token: any;

  constructor(private _service: ServiceService, private _router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    })
  }

  comprar(): void {
    var cubosselect = this.selectCuboRef.nativeElement.value;
    this._service.postCompra(cubosselect, this.cubo.idCubo).subscribe(response => {
      this.token = localStorage.setItem('token', response);
      console.log(response);

    })
  }

  login(): void {
    var user = new User(
      this.usernameRef.nativeElement.value,
      this.passwordRef.nativeElement.value);

    this._service.loginAuth(user).subscribe(response => {
      console.log(response);
      this.token = localStorage.setItem('token', response);

      this._service.verPerfil(response.response).subscribe(response => {

        this.users = response.response;
        console.log(response);
      })

    })
  }



}
