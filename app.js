let actual = 0;
let elegidos = [];
let orden = [];

function el(id) {
  return document.getElementById(id);
}

function mostrarEjercicio() {
  const ej = ejercicios[actual];
  elegidos = [];

  el("progreso").textContent = "Reto " + (actual + 1) + " de " + ejercicios.length;
  el("explicacion").textContent = ej.explicacion;
  el("feedback").textContent = "";
  el("feedback").className = "";
  el("btn-siguiente").hidden = true;
  el("btn-comprobar").hidden = true;
  el("opciones").innerHTML = "";
  el("respuesta").innerHTML = "";

  if (ej.tipo === "ordenar") {
    el("codigo").textContent = "";
    el("respuesta").hidden = false;
    prepararOrdenar(ej);
  } else {
    el("codigo").textContent = ej.codigo.join("\n");
    el("respuesta").hidden = true;
    mostrarOpciones(ej);
  }
}

function mostrarOpciones(ej) {
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

function prepararOrdenar(ej) {
  orden = ej.bloques
    .map(function (bloque, i) { return i; })
    .sort(function () { return Math.random() - 0.5; });
  dibujarBloques(ej);
}

function dibujarBloques(ej) {
  el("opciones").innerHTML = "";
  el("respuesta").innerHTML = "";

  elegidos.forEach(function (i) {
    const boton = document.createElement("button");
    boton.className = "bloque";
    boton.textContent = ej.bloques[i];
    boton.addEventListener("click", function () {
      quitarBloque(i, ej);
    });
    el("respuesta").appendChild(boton);
  });

  orden.forEach(function (i) {
    if (elegidos.includes(i)) {
      return;
    }
    const boton = document.createElement("button");
    boton.className = "bloque";
    boton.textContent = ej.bloques[i];
    boton.addEventListener("click", function () {
      ponerBloque(i, ej);
    });
    el("opciones").appendChild(boton);
  });

  el("btn-comprobar").hidden = elegidos.length !== ej.bloques.length;
  el("feedback").textContent = "";
  el("feedback").className = "";
}

function ponerBloque(i, ej) {
  elegidos.push(i);
  dibujarBloques(ej);
}

function quitarBloque(i, ej) {
  elegidos = elegidos.filter(function (x) {
    return x !== i;
  });
  dibujarBloques(ej);
}

el("btn-comprobar").addEventListener("click", function () {
  const ej = ejercicios[actual];
  const caja = el("feedback");
  let primerError = -1;

  for (let pos = 0; pos < elegidos.length; pos++) {
    if (elegidos[pos] !== pos) {
      primerError = pos;
      break;
    }
  }

  if (primerError === -1) {
    caja.className = "bien";
    caja.textContent = "✅ " + ej.feedbackBien;
    el("btn-comprobar").hidden = true;
    el("btn-siguiente").hidden = false;
  } else {
    caja.className = "mal";
    caja.textContent = "❌ El bloque del lugar " + (primerError + 1) + " no va ahí. " + ej.pista;
  }
});

el("btn-siguiente").addEventListener("click", function () {
  actual = actual + 1;
  if (actual < ejercicios.length) {
    mostrarEjercicio();
  } else {
    el("explicacion").textContent = "🎉 ¡Terminaste este bloque! Muy bien.";
    el("codigo").textContent = "";
    el("respuesta").hidden = true;
    el("opciones").innerHTML = "";
    el("feedback").textContent = "";
    el("progreso").textContent = "";
    el("btn-siguiente").hidden = true;
    el("btn-comprobar").hidden = true;
  }
});

mostrarEjercicio();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}