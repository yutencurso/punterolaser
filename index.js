const body = document.body;
const efecto = document.getElementById('efecto');
efecto.style.position = "fixed";
efecto.style.pointerEvents = "none";
body.style.cursor = "none";
efecto.style.userSelect = "none";
    body.addEventListener('mousemove', (evento) => {
        const x = evento.clientX; 
        const y = evento.clientY; 
        efecto.style.transform = `translate(${x}px, ${y}px)`;
    });
