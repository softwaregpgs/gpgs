import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  form: FormGroup;
  loading = false;

  hide = true;
  
  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar,private router: Router, private clienteService: ClienteService) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      email:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;

    if(email == 'borja' && password == 'gpgs'){
this.fakeLoading();
    }else{
this.error();
this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Email o contraseña son inválidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigateByUrl("/login/registroCliente/homeCliente")
      this.loading = false;
    }, 1500);
  }

  add(nombre:string, apellidos:string, email:string): void {
    // nombre = nombre.trim();
    // if (!nombre) { return; }
    this.clienteService.addCliente({ nombre, apellidos, email} as Cliente)
      .subscribe(cliente => {
        console.log(cliente);
      });
  }

}
