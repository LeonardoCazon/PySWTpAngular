import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';


@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  inscripciones: Inscripcion[] = [];
  agregar(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  obtenerInscripciones() {
    return this.inscripciones;
  }

}
