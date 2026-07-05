// ----------------------
// BOTÓN ABRIR CARTA
// ----------------------

const abrir = document.getElementById("abrir");

if (abrir) {
    abrir.onclick = () => {
        window.location.href = "carta.html";
    };
}

// ----------------------
// BOTÓN NO
// ----------------------

const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

let escala = 1;

const frases = [
    "🙈 No",
    "🤨 ¿Segura?",
    "🥺 Piénsalo",
    "😂 Casi",
    "😜 Inténtalo otra vez",
    "❤️ Dale al Sí",
    "🤭 No me atrapas",
    "😆 Sigue intentando"
];

let indice = 0;

function moverBoton(){

    if(!botonNo) return;

    const ancho = window.innerWidth - botonNo.offsetWidth - 30;
    const alto = window.innerHeight - botonNo.offsetHeight - 30;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    indice++;

    botonNo.innerHTML = frases[indice % frases.length];

    escala += 0.08;

    if(botonSi){

        botonSi.style.transform = `scale(${escala})`;

    }

}

// Computador
if(botonNo){

    botonNo.addEventListener("mouseenter", moverBoton);

}

// Celulares (iPhone y Android)
if(botonNo){

    botonNo.addEventListener("touchstart", function(e){

        e.preventDefault();

        moverBoton();

    });

}

// ----------------------
// BOTÓN SÍ
// ----------------------

if(botonSi){

    botonSi.addEventListener("click", function(){

        window.location.href = "gracias.html";

    });

}