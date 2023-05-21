"use strict"

// Definir el modelo para un hotel
class Hotel {
    constructor(id, nombre, habitaciones) {
      this.id = id;
      this.nombre = nombre;
      this.habitaciones = habitaciones;
    }
  }
  
  // Definir el modelo para una habitación de hotel
  class Habitacion {
    constructor(id, numero, disponible) {
      this.id = id;
      this.numero = numero;
      this.disponible = disponible;
    }
  }
  
  // Datos de ejemplo (puedes reemplazar esto con una base de datos)
  const hoteles = [
    new Hotel(
      1,
      'Hotel A',
      [
        new Habitacion(1, '101', true),
        new Habitacion(2, '102', false),
        new Habitacion(3, '103', true),
      ]
    ),
    new Hotel(
      2,
      'Hotel B',
      [
        new Habitacion(4, '201', true),
        new Habitacion(5, '202', true),
        new Habitacion(6, '203', false),
      ]
    ),
  ];