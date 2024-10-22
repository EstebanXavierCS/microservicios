// principal.js
const express = require('express');
const app = express();
const port = 8081;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta para mostrar la vista principal (será /principal)
app.get('/principal', (req, res) => {
    res.render('principal');  // Renderiza el archivo inicio.ejs
});

// Iniciar el servicio de inicio
app.listen(port, () => {
    console.log(`Servicio de principal escuchando en http://localhost:${port}`);
});
