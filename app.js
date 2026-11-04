let actual = 0;

function el(id) {
  return document.getElementById(id);
}

function mostrarEjercicio() {
  const ej = ejercicios[actual];

  el("progreso").textContent = "Reto " + (actual + 1) + " de " + ejercicios.length;
  el("explicacion").textContent = ej.explicacion;
  el("codigo").textContent = ej.codigo.join("\n");
  el("feedback").textContent = "";
  el("feedback").className = "";
  el("btn-siguiente").hidden = true;
  el("opciones").innerHTML = "";

  ej.opciones.forEach(function (texto, i) {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.addEventListener("click", function () {
      responder(i);
    });
    el("opciones").appendChild(boton);
  });
}

function responder(i) {
  const ej = ejercicios[actual];
  const caja = el("feedback");

  if (i === ej.correcta) {
    caja.className = "bien";
    caja.textContent = "✅ " + ej.feedback[i];
    el("btn-siguiente").hidden = false;
  } else {
    caja.className = "mal";
    caja.textContent = "❌ " + ej.feedback[i];
  }
}

el("btn-siguiente").addEventListener("click", function () {
  actual = actual + 1;
  if (actual < ejercicios.length) {
    mostrarEjercicio();
  } else {
    el("explicacion").textContent = "🎉 ¡Terminaste este bloque! Muy bien.";
    el("codigo").textContent = "";
    el("opciones").innerHTML = "";
    el("feedback").textContent = "";
    el("progreso").textContent = "";
    el("btn-siguiente").hidden = true;
  }
});

mostrarEjercicio();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}