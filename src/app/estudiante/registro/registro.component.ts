import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { estudiante } from 'src/app/entidades/estudiantes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;

  //crearEstudiante: FormGroup;

  id: string | null;
  
  titulo = 'Agregar Estudiante';

  constructor( //private fb: FormBuilder,
              private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router, 
              ) { 

       this.id = this.aRoute.snapshot.paramMap.get('id');
       
      // console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  enviarPos():void {

    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as estudiante;
      this.router.navigate(['/listado']);
    })
  }

  //editar
  // editar(id:number){
 
  //   this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  //   .subscribe(
  //     response => {
  //       this.usuario=response;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  esEditar() : void{

    if (this.id === null) {
      this.titulo = 'Agregar Estudiante'
    } else {
      this.titulo = 'Editar Estudiante'
    }
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });
  }

}
