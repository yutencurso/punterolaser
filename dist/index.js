const body = document.body;
        body.addEventListener('mousemove', (evento) => {
            const x = evento.clientX; 
            const y = evento.clientY; 
            const efecto = document.getElementById('efecto');
            efecto.style.position = "fixed";
            efecto.style.transform = `translate(${x}px, ${y}px)`;
        });
