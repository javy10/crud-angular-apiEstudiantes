import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { estudiante } from 'src/app/entidades/estudiantes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;

  constructor(private http: HttpClient, private activatedRoiuter:ActivatedRoute) { 
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});
  }

  ngOnInit(): void {
  }

  //eliminar
  eliminar(id:number): void {
    if (confirm('¿Estas seguro de eliminar este estudiante?')) {
      this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/' + id)
      .subscribe(
        response => {
         alert('Estudiante eliminado');
         window.location.reload();
        },
        error => {
          console.log(error);
      });
    }
  }
}
