import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  indice: number = 0;

  eventos = [
    {
      nombre: 'Taller de Yoga',
      descripcion: 'Clase de relajación y estiramiento',
      img: 'assets/img/yoga.jpg'
    },
    {
      nombre: 'Clases de Música',
      descripcion: 'Aprende a tocar instrumentos',
      img: 'assets/img/musica.jpg'
    },
    {
      nombre: 'Entrenamiento Funcional',
      descripcion: 'Ejercicios para todo el cuerpo',
      img: 'assets/img/entrenamiento.jpg'
    }
  ];

  siguiente() {
    if (this.indice < this.eventos.length - 1) {
      this.indice++;
    }
  }

  anterior() {
    if (this.indice > 0) {
      this.indice--;
    }
  }
}
