const gateway = require('fast-gateway');
const express = require('express');
const app = express();
const port = 9001;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views'); // Ruta de las vistas

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('inicio');  // Renderiza el archivo index.ejs
});

// Iniciar el gateway
const server = gateway({
    routes: [
        {
            prefix: '/auth',
            target: 'http://localhost:8080/',  // Servicio de autenticación
        },
        {
            prefix: '/pedidos',
            target: 'http://localhost:8081/',  // Servicio de pedidos
        }
    ]
});

// Iniciar la página de inicio
app.listen(9002, () => {
    console.log('Página de inicio ejecutándose en http://localhost:9002');
});

// Iniciar el gateway
server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});
