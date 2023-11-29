// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReinciar = document.getElementById("boton-reiniciar");
const cronometro = document.getElementById("cronometro");

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = "pausado";
function actualizarCronometro() {
    segundos++;
    if (segundos / 60 == 1) {
        segundos = 0;
        minutos++;
        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }
    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);
    cronometro.innerText =
        `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadTiempo) {
    return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

botonInicioPausa.addEventListener("click", function () {
    if (estadoCronometro === "pausado") {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove("iniciar");
        botonInicioPausa.classList.add("pausar");
        estadoCronometro = "andando";
    } else {
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove("pausar");
        botonInicioPausa.classList.add("iniciar");
        estadoCronometro = "pausado";
    }
});

botonReinciar.addEventListener("click", function () {
    window.clearInterval(intervaloDeTiempo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.innerText = "00:00:00";
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
});