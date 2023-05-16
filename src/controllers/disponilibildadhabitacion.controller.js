const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Datos de ejemplo (puedes reemplazar esto con una base de datos)
const hoteles = [
  {
    id: 1,
    nombre: 'Hotel A',
    habitaciones: [
      { id: 1, numero: '101', disponible: true },
      { id: 2, numero: '102', disponible: false },
      { id: 3, numero: '103', disponible: true },
    ],
  },
  {
    id: 2,
    nombre: 'Hotel B',
    habitaciones: [
      { id: 4, numero: '201', disponible: true },
      { id: 5, numero: '202', disponible: true },
      { id: 6, numero: '203', disponible: false },
    ],
  },
];

// Ruta para obtener la disponibilidad de habitaciones por hotel
app.get('/hoteles/:id/habitaciones', (req, res) => {
  const hotelId = parseInt(req.params.id);
  const hotel = hoteles.find((h) => h.id === hotelId);
  
  if (!hotel) {
    return res.status(404).json({ error: 'Hotel no encontrado' });
  }
  
  res.json(hotel.habitaciones);
});

// Ruta para actualizar la disponibilidad de una habitación
app.put('/hoteles/:id/habitaciones/:habitacionId', (req, res) => {
  const hotelId = parseInt(req.params.id);
  const habitacionId = parseInt(req.params.habitacionId);
  const hotel = hoteles.find((h) => h.id === hotelId);
  
  if (!hotel) {
    return res.status(404).json({ error: 'Hotel no encontrado' });
  }
  
  const habitacion = hotel.habitaciones.find((h) => h.id === habitacionId);
  
  if (!habitacion) {
    return res.status(404).json({ error: 'Habitación no encontrada' });
  }
  
  habitacion.disponible = req.body.disponible;
  
  res.json(habitacion);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});