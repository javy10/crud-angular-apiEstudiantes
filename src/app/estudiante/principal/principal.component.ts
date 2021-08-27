import { estudiante } from '../../entidades/estudiantes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;

  constructor(  private http: HttpClient, 
                private activatedRoiuter:ActivatedRoute) { 

    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});

  }
  
  ngOnInit(): void {
    
  }

}
