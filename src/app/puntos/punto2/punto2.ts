import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

export interface LineaCarrito {
  producto: Producto;
  cantidad: number;
}

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {
  productos: Producto[] = [
    {
      nombre: 'Notebook Asus 13L',
      descripcion: 'Disco 40GB, 15 pulgadas',
      img: 'assets/img/notebook asus.jpg',
      precio: 45.5
    },
    {
      nombre: 'Monitor LG 14',
      descripcion: 'Monitor Full HD',
      img: 'assets/img/monitor lg.jpg',
      precio: 99
    },
    {
      nombre: 'Teclado Gamer',
      descripcion: 'Teclado mecánico RGB',
      img: 'assets/img/teclado gamer.jpg',
      precio: 120
    },
    {
      nombre: 'Mouse Logitech G203',
      descripcion: 'Mouse gamer RGB de alta precisión',
      img: 'assets/img/mouse logitech.jpg',
      precio: 75
    },
    {
      nombre: 'Auriculares HyperX',
      descripcion: 'Auriculares con sonido envolvente',
      img: 'assets/img/auriculares hyperex.jpg',
      precio: 150
    },
    {
      nombre: 'Silla Gamer RedDragon',
      descripcion: 'Silla ergonómica reclinable',
      img: 'assets/img/silla gamer.jpg',
      precio: 320
    }
  ];

  carrito: LineaCarrito[] = [];
  ultimoAgregado: number | null = null;

  agregarCarrito(producto: Producto, index: number) {
    const existente = this.carrito.find(
      (l) => l.producto.nombre === producto.nombre
    );
    if (existente) {
      existente.cantidad++;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }
    this.ultimoAgregado = index;
    setTimeout(() => {
      this.ultimoAgregado = null;
    }, 1000);
  }

  incrementarCantidad(linea: LineaCarrito) {
    linea.cantidad++;
  }

  decrementarCantidad(linea: LineaCarrito) {
    linea.cantidad--;
    if (linea.cantidad <= 0) {
      this.carrito = this.carrito.filter((l) => l !== linea);
    }
  }

  subtotalLinea(linea: LineaCarrito): number {
    return linea.producto.precio * linea.cantidad;
  }

  calcularTotal(): number {
    let total = 0;
    for (const linea of this.carrito) {
      total += this.subtotalLinea(linea);
    }
    return total;
  }
}
