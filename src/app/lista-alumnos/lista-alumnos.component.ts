import { Component, OnInit } from "@angular/core";
import { Alumno } from "../alumno.model";


@Component({
  selector: 'app-lista-alumnos',
  templateUrl:'./lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  nuevoAlumno: Alumno = {
    presente: false,
    nombre: '',
  };
  
  agregarAlumno(): void {
    this.alumnos.push(this.nuevoAlumno.nombre);
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.presente = false;
  }
}
