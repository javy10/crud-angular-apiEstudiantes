import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { estudiante } from 'src/app/entidades/estudiantes';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;
  id: string | null;
  titulo = 'Agregar Estudiante';

  constructor(
              private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router, 
              ) { 
       this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  //para registro y edicion
  enviarPos():void {
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as estudiante;
      this.router.navigate(['/listado']);
    })
  }

  ngOnInit(): void {
    this.esEditar();
  }

  //para poder editar
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
