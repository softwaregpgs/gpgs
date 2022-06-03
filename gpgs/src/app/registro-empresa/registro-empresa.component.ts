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

  //Lista de categorías
  categorias = ["Fontanería", "Electricidad", "Construcción", "Agricultura", "Jardinería"]
  
  
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
      fotos:[[], Validators.required],
      categorias: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  error(){
    this._snackBar.open('Email o contraseña son inválidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  /**
   * 
   * Método que simula la carga de la página y redirige al home de Empresa
   * 
   */
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
        this.fakeLoading();
      });

  }
  
  /************************* FILES ******************************/

  /**
   * 
   * Función que devuelve los nombres de las imágenes subidas
   * 
   * @returns array con los nombres de las imágenes
   * 
   */
  getFiles(){
    var files = []

    for(var i=0; i< this.fileList.length;i++){

      files.push(this.fileList[i].name)

    }

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
