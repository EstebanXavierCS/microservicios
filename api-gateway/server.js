// gateway.js
const gateway = require('fast-gateway');
const port = 9001;

// Iniciar el gateway
const server = gateway({
    routes: [
        {
            prefix: '/auth',
            target: 'http://localhost:8080/',  // Servicio de autenticación
            hooks: {}
        },
        {
            prefix: '/',  // Página inicio
            target: 'http://localhost:9002',  // Servicio de la página inicio
            hooks: {}
        },
        {
            prefix: '/pagina',
            target: 'http://localhost:8081',  // Servicio de muestra
            hooks: {}
        }
    ]
});

// Iniciar el gateway
server.start(port).then(() => {
    console.log(`Gateway ejecutándose en el puerto: ${port}`);
});
