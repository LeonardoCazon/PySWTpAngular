import { Component } from '@angular/core';
import { Inscripcion } from '../../models/inscripcion';
import { InscripcionService } from '../../services/inscripcion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-punto4',
  imports: [FormsModule, CommonModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})
export class Punto4 {
  inscripcion: Inscripcion = new Inscripcion();

  listaInscripciones: Inscripcion[] = [];

  totalFinal: number = 0;

  constructor(
    private inscripcionService: InscripcionService
  ) { }

  calcularTotal() {
    if (!this.inscripcion.precio || !this.inscripcion.categoriaAlumno) {

      this.totalFinal = 0;
      return;
    }

    let descuento = 0;

    switch (this.inscripcion.categoriaAlumno) {

      case 1:
        descuento = 35;
        break;

      case 2:
        descuento = 50;
        break;

      case 3:
        descuento = 0;
        break;
    }

    this.totalFinal =
      this.inscripcion.precio -
      (this.inscripcion.precio * descuento / 100);
  }

  registrar() {

    this.inscripcion.total = this.totalFinal;

    this.inscripcionService.agregar(this.inscripcion);

    this.listaInscripciones =
      this.inscripcionService.obtenerInscripciones();

    this.inscripcion = new Inscripcion();

    this.totalFinal = 0;
  }

  contarCategoria(categoria: number): number {

    return this.listaInscripciones.filter(
      i => i.categoriaAlumno == categoria
    ).length;
  }

  totalGeneral(): number {

    let total = 0;

    this.listaInscripciones.forEach(i => {

      total += i.total;
    });

    return total;
  }

}
