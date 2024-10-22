const express = require('express');
const app = express();
const port = 8081;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views'); // Ruta de las vistas


// Ruta para mostrar la lista de pedidos
app.get('/pedidos', (req, res) => {
    res.render('pedidos');  // Renderiza el archivo login.ejs
});

// Iniciar el servicio de pedidos
app.listen(port, () => {
    console.log(`Servicio de pedidos escuchando en http://localhost:${port}`);
});
