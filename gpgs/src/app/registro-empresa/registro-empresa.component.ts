import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empresa } from '../model/empresa';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
  
})

export class RegistroEmpresaComponent implements OnInit {
  form: FormGroup;
  loading = false;
  hide = true;

  //Lista de fotos seleccionadas
  fileList!: FileList;
  
  
  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar,private router: Router, private empresaService: EmpresaService) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      password:['', Validators.required],
      telefono:['', Validators.required],
      direccion:['', Validators.required],
      descripcion:['', Validators.required],
      enlaceWeb:['', Validators.required],
      email:['', Validators.required],
      cif:['', Validators.required],
      fotos:[[]]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
  /*   console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;

    if(email == 'borja' && password == 'gpgs'){
this.fakeLoading();
    }else{
this.error();
this.form.reset();
    } */
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
      this.router.navigateByUrl("/login/registroEmpresa/homeEmpresa")
      this.loading = false;
    }, 1500);
  }

  /**
   * 
   * Método que registra una nueva empresa
   * 
   * @param data los datos del formulario
   * 
   */
  add(data:any): void {
  
    data.fotos = this.getFiles()

    this.empresaService.addEmpresa(data as Empresa)
      .subscribe(empresa => {
        console.log(empresa);
      });
  }
  

  /**
   * 
   * Función que devuelve los nombres de las imágenes subidas
   * 
   * @returns array con los nombres de las imágenes
   * 
   */
  getFiles(){
    var files = []
    files.push(this.fileList[0].name)
    files.push(this.fileList[1].name)

    return files

  }

  /**
   * 
   * Función que asigna la lista de archivos subidos a la propiedad fileList
   * 
   * @param event evento de cambio en el input de fotos
   * 
   */
  selectFiles(event:any) {
    this.fileList = event.target.files;
  }

}
