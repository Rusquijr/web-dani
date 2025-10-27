// --- INICIO: LÓGICA DEL EASTER EGG (KONAMI CODE + NIEVE) ---

// Nos aseguramos de que el DOM esté cargado antes de ejecutar nada
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Lógica del Konami Code ---
    
    // La secuencia secreta
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    
    let konamiCodePosition = 0; // Para rastrear en qué parte de la secuencia estamos

    // Escuchamos cada tecla que se presiona en la web
    document.addEventListener('keydown', (e) => {
        // Comprobamos si la tecla presionada es la siguiente en la secuencia
        if (e.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
            konamiCodePosition++; // Avanzamos en la secuencia

            // Si hemos completado la secuencia...
            if (konamiCodePosition === konamiCode.length) {
                activateSnowEffect(); // ¡Activamos la magia!
                konamiCodePosition = 0; // Reseteamos para que se pueda volver a usar
            }
        } else {
            // Si la tecla es incorrecta, reseteamos la secuencia
            konamiCodePosition = 0;
        }
    });


    // --- 2. Lógica del Efecto de Nieve ---

    const snowContainer = document.getElementById('snow-container');
    let isSnowing = false; // Para saber si ya está nevando o no
    let snowInterval; // Para guardar el "intervalo" que crea copos

    // Función que crea un solo copo de nieve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Propiedades aleatorias para cada copo
        const size = Math.random() * 5 + 2; // Tamaño entre 2px y 7px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`; // Posición horizontal inicial

        const duration = Math.random() * 8 + 5; // Duración de caída entre 5s y 13s
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`; // Retraso para que no caigan todos a la vez

        // Movimiento lateral aleatorio (para la variable --random-x del CSS)
        const randomX = (Math.random() - 0.5) * 200; // entre -100px y 100px
        snowflake.style.setProperty('--random-x', `${randomX}px`);

        // Añadimos el copo al contenedor
        snowContainer.appendChild(snowflake);

        // Eliminamos el copo del DOM cuando termina su animación (para no saturar la web)
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Función para EMPEZAR a nevar
    function startSnowing() {
        if (!isSnowing) {
            isSnowing = true;
            snowContainer.style.display = 'block'; // Mostramos el contenedor
            // Creamos un nuevo copo cada 100ms
            snowInterval = setInterval(createSnowflake, 100);
        }
    }

    // Función para DETENER la nieve
    function stopSnowing() {
        if (isSnowing) {
            isSnowing = false;
            clearInterval(snowInterval); // Dejamos de crear copos
            snowContainer.style.display = 'none'; // Ocultamos el contenedor
            snowContainer.innerHTML = ''; // Borramos los copos que queden
        }
    }

    // Función principal que se llama desde el Konami Code
    function activateSnowEffect() {
        if (!isSnowing) {
            startSnowing();
            console.log("Konami Code activado: ¡Que nieve!");
            // Puedes añadir una alerta si quieres
            // alert('¡Has activado el Konami Code!');
        } else {
            // Si ya estaba nevando, el código lo detiene
            stopSnowing();
            console.log("Konami Code desactivado: Nieve detenida.");
        }
    }
    
});
// --- FIN: LÓGICA DEL EASTER EGG ---
