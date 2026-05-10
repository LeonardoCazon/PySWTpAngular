import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {
  cartas: any[] = [];

  imagenTapada: string = 'assets/img/memorygame(0).jpg';

  imagenes: string[] = [
    'assets/img/memorygame (1).jpg',
    'assets/img/memorygame (2).jpg',
    'assets/img/memorygame (3).jpg',
    'assets/img/memorygame (4).jpg',
    'assets/img/memorygame (5).jpg',
    'assets/img/memorygame (6).jpg',
  ];

  primeraCarta: any = null;
  segundaCarta: any = null;

  intentos: number = 10;

  juegoIniciado: boolean = false;
  puedeIntentar: boolean = false;

  mensaje: string = '';

  iniciarJuego() {

    this.mensaje = '';

    let parejas = [...this.imagenes, ...this.imagenes];

    parejas = parejas.sort(() => Math.random() - 0.5);

    this.cartas = parejas.map((img, index) => ({
      id: index,
      imagen: img,
      descubierta: false,
      bloqueada: false
    }));

    this.intentos = 10;

    this.primeraCarta = null;
    this.segundaCarta = null;

    this.juegoIniciado = true;
    this.puedeIntentar = false;
  }

  habilitarIntento() {

    if (this.intentos > 0) {
      this.puedeIntentar = true;
    }
  }

  seleccionarCarta(carta: any) {

    if (!this.puedeIntentar) return;

    if (carta.descubierta || carta.bloqueada) return;

    carta.descubierta = true;

    if (!this.primeraCarta) {

      this.primeraCarta = carta;

    } else if (!this.segundaCarta) {

      this.segundaCarta = carta;

      this.verificarCartas();
    }
  }

  verificarCartas() {

    if (this.primeraCarta.imagen === this.segundaCarta.imagen) {

      this.primeraCarta.bloqueada = true;
      this.segundaCarta.bloqueada = true;

      this.limpiarSeleccion();

      this.verificarVictoria();

    } else {

      this.intentos--;

      setTimeout(() => {

        this.primeraCarta.descubierta = false;
        this.segundaCarta.descubierta = false;

        this.limpiarSeleccion();

        this.verificarDerrota();

      }, 1000);
    }

    this.puedeIntentar = false;
  }

  limpiarSeleccion() {

    this.primeraCarta = null;
    this.segundaCarta = null;
  }

  verificarVictoria() {

    const ganadas = this.cartas.every(c => c.bloqueada);

    if (ganadas) {
      this.mensaje = 'GANASTE 🎉';
    }
  }

  verificarDerrota() {

    if (this.intentos <= 0) {
      this.mensaje = 'PERDISTE 😢';
    }
  }

  reiniciarJuego() {

    this.cartas = [];

    this.juegoIniciado = false;

    this.puedeIntentar = false;

    this.mensaje = '';

    this.intentos = 10;
  }


}
