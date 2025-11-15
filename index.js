const body = document.body;
const efecto = document.getElementById('efecto');
efecto.style.position = "fixed";
efecto.style.pointerEvents = "none";
efecto.style.zIndex = "99999";
const style = document.createElement('style');
style.innerHTML = `* { cursor: none !important; }`;
document.head.appendChild(style);
    body.addEventListener('mousemove', (evento) => {
        const x = evento.clientX; 
        const y = evento.clientY; 
        efecto.style.transform = `translate(${x}px, ${y}px)`;
    });
