document.addEventListener('DOMContentLoaded', () => {
    const efecto = document.getElementsByClassName('cursor');
    const todosLosElementos = document.querySelectorAll('*');
    todosLosElementos.forEach(elemento => {
        elemento.style.cursor = 'none';
    });

    if (efecto) {
        document.body.style.cursor = 'none';
        efecto.style.position = 'fixed';
        efecto.style.pointerEvents = 'none';
        efecto.style.display = 'none';
        efecto.style.zIndex = '9999';

        const updatePosition = (e) => {
            efecto.style.left = `${e.clientX}px`;
            efecto.style.top = `${e.clientY}px`;
        };

        const showCursor = () => {
            efecto.style.display = 'block';
        };

        const hideCursor = () => {
            efecto.style.display = 'none';
        };

        document.addEventListener('mousemove', (e) => {
            if (efecto.style.display === 'none') {
                showCursor();
            }
            updatePosition(e);
        });

        document.addEventListener('mouseenter', showCursor);
        document.documentElement.addEventListener('mouseleave', hideCursor);
    }
});
