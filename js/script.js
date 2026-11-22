// ==========================================
// ABRIR LA INVITACIÓN
// ==========================================

const botonAbrir = document.getElementById("abrirInvitacion");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");


// Cuando se presiona "Abrir invitación"
botonAbrir.addEventListener("click", function () {

    // Ocultamos la portada
    inicio.style.display = "none";

    // Mostramos el contenido
    contenido.classList.remove("oculto");

    // Intentamos iniciar la música
    musica.play()
        .then(function () {

            botonMusica.textContent = "♫ Música encendida";

        })
        .catch(function () {

            botonMusica.textContent = "♫ Reproducir música";

        });

    // Regresamos al principio de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// BOTÓN DE MÚSICA
// ==========================================

botonMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botonMusica.textContent = "♫ Música encendida";

    } else {

        musica.pause();

        botonMusica.textContent = "♫ Reproducir música";

    }

});


// ==========================================
// CUENTA REGRESIVA
// ==========================================

// Fecha del evento
// 26 de diciembre de 2026 a las 6:00 PM

const fechaXV = new Date(
    "December 26, 2026 18:00:00"
).getTime();


function actualizarContador() {

    // Fecha y hora actuales
    const ahora = new Date().getTime();

    // Diferencia entre el evento y el momento actual
    const diferencia = fechaXV - ahora;


    // Si ya llegó la fecha
    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }


    // Cálculo de días
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    // Cálculo de horas
    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    // Cálculo de minutos
    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );


    // Cálculo de segundos
    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );


    // Mostrar los resultados
    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// Ejecutar el contador
actualizarContador();


// Actualizar cada segundo
setInterval(actualizarContador, 1000);