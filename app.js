let moduloActual = null;
let leccionActual = null;
let ejerciciosActuales = [];
let clavesActuales = [];
let modoRepaso = false;
let actual = 0;
let elegidos = [];
let orden = [];

function el(id) {
  return document.getElementById(id);
}

function leerProgreso() {
  try {
    return JSON.parse(localStorage.getItem("progreso")) || {};
  } catch (error) {
    return {};
  }
}

function guardarProgreso(progreso) {
  localStorage.setItem("progreso", JSON.stringify(progreso));
}

function leerFallos() {
  try {
    return JSON.parse(localStorage.getItem("fallos")) || [];
  } catch (error) {
    return [];
  }
}

function guardarFallos(lista) {
  localStorage.setItem("fallos", JSON.stringify(lista));
}

function anotarFallo(clave) {
  const fallos = leerFallos();
  if (!fallos.includes(clave)) {
    fallos.push(clave);
    guardarFallos(fallos);
  }
}

function quitarFallo(clave) {
  const fallos = leerFallos().filter(function (c) {
    return c !== clave;
  });
  guardarFallos(fallos);
}

function buscarEjercicio(clave) {
  const partes = clave.split(":");
  let encontrado = null;
  modulos.forEach(function (modulo) {
    modulo.lecciones.forEach(function (leccion) {
      if (leccion.id === partes[0] && leccion.ejercicios[Number(partes[1])]) {
        encontrado = leccion.ejercicios[Number(partes[1])];
      }
    });
  });
  return encontrado;
}

function fallosValidos() {
  return leerFallos().filter(function (clave) {
    return buscarEjercicio(clave) !== null;
  });
}

function mostrarPantalla(nombre) {
  el("pantalla-inicio").hidden = nombre !== "inicio";
  el("pantalla-lecciones").hidden = nombre !== "lecciones";
  el("pantalla-reto").hidden = nombre !== "reto";
}

function pantallaInicio() {
  modoRepaso = false;
  const progreso = leerProgreso();
  el("lista-modulos").innerHTML = "";

  modulos.forEach(function (modulo) {
    const hechas = modulo.lecciones.filter(function (leccion) {
      return progreso[leccion.id] === true;
    }).length;

    let detalle = "🔒 Próximamente";
    if (modulo.disponible) {
      detalle = hechas + " de " + modulo.lecciones.length + " lecciones";
    }

    const boton = document.createElement("button");
    boton.className = "item";
    boton.disabled = !modulo.disponible;
    boton.innerHTML = modulo.icono + " " + modulo.nombre + "<small>" + detalle + "</small>";
    boton.addEventListener("click", function () {
      pantallaLecciones(modulo);
    });
    el("lista-modulos").appendChild(boton);
  });

  const pendientes = fallosValidos().length;
  if (pendientes > 0) {
    el("btn-repaso").innerHTML = "🔁 Repasar mis errores<small>" + pendientes + " retos pendientes</small>";
    el("btn-repaso").hidden = false;
  } else {
    el("btn-repaso").hidden = true;
  }

  mostrarPantalla("inicio");
}

function pantallaLecciones(modulo) {
  moduloActual = modulo;
  const progreso = leerProgreso();
  el("titulo-modulo").textContent = modulo.icono + " " + modulo.nombre;
  el("lista-lecciones").innerHTML = "";

  modulo.lecciones.forEach(function (leccion, i) {
    const hecha = progreso[leccion.id] === true;
    let anteriorHecha = true;
    if (i > 0) {
      anteriorHecha = progreso[modulo.lecciones[i - 1].id] === true;
    }

    let detalle = "🔒 Termina la anterior";
    if (hecha) {
      detalle = "✅ Terminada. Toca para repasar";
    } else if (anteriorHecha) {
      detalle = leccion.ejercicios.length + " retos";
    }

    const boton = document.createElement("button");
    boton.className = "item";
    if (hecha) {
      boton.className = "item hecha";
    }
    boton.disabled = !anteriorHecha;
    boton.innerHTML = (i + 1) + ". " + leccion.titulo + "<small>" + detalle + "</small>";
    boton.addEventListener("click", function () {
      empezarLeccion(leccion);
    });
    el("lista-lecciones").appendChild(boton);
  });

  mostrarPantalla("lecciones");
}

function empezarLeccion(leccion) {
  modoRepaso = false;
  leccionActual = leccion;
  ejerciciosActuales = leccion.ejercicios;
  clavesActuales = leccion.ejercicios.map(function (ejercicio, i) {
    return leccion.id + ":" + i;
  });
  actual = 0;
  mostrarPantalla("reto");
  mostrarEjercicio();
}

function empezarRepaso() {
  const claves = fallosValidos().slice(0, 8);
  if (claves.length === 0) {
    pantallaInicio();
    return;
  }
  modoRepaso = true;
  leccionActual = null;
  clavesActuales = claves;
  ejerciciosActuales = claves.map(buscarEjercicio);
  actual = 0;
  mostrarPantalla("reto");
  mostrarEjercicio();
}

function mostrarEjercicio() {
  const ej = ejerciciosActuales[actual];
  elegidos = [];

  let prefijo = "Reto ";
  if (modoRepaso) {
    prefijo = "Repaso: reto ";
  }
  el("progreso").textContent = prefijo + (actual + 1) + " de " + ejerciciosActuales.length;
  el("barra-llena").style.width = (actual / ejerciciosActuales.length * 100) + "%";
  el("explicacion").textContent = ej.explicacion;
  el("feedback").textContent = "";
  el("feedback").className = "";
  el("btn-comprobar").hidden = true;
  el("btn-siguiente").hidden = true;
  el("opciones").innerHTML = "";
  el("respuesta").innerHTML = "";

  if (actual === ejerciciosActuales.length - 1) {
    if (modoRepaso) {
      el("btn-siguiente").textContent = "Terminar repaso 🎉";
    } else {
      el("btn-siguiente").textContent = "Terminar lección 🎉";
    }
  } else {
    el("btn-siguiente").textContent = "Siguiente ➜";
  }

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
  const ej = ejerciciosActuales[actual];
  const clave = clavesActuales[actual];
  const caja = el("feedback");

  if (i === ej.correcta) {
    caja.className = "bien";
    caja.textContent = "✅ " + ej.feedback[i];
    el("btn-siguiente").hidden = false;
    if (modoRepaso) {
      quitarFallo(clave);
    }
  } else {
    caja.className = "mal";
    caja.textContent = "❌ " + ej.feedback[i];
    anotarFallo(clave);
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
  const ej = ejerciciosActuales[actual];
  const clave = clavesActuales[actual];
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
    if (modoRepaso) {
      quitarFallo(clave);
    }
  } else {
    caja.className = "mal";
    caja.textContent = "❌ El bloque del lugar " + (primerError + 1) + " no va ahí. " + ej.pista;
    anotarFallo(clave);
  }
});

el("btn-siguiente").addEventListener("click", function () {
  if (actual === ejerciciosActuales.length - 1) {
    if (modoRepaso) {
      pantallaInicio();
    } else {
      const progreso = leerProgreso();
      progreso[leccionActual.id] = true;
      guardarProgreso(progreso);
      pantallaLecciones(moduloActual);
    }
  } else {
    actual = actual + 1;
    mostrarEjercicio();
  }
});

el("btn-salir").addEventListener("click", function () {
  if (modoRepaso) {
    pantallaInicio();
  } else {
    pantallaLecciones(moduloActual);
  }
});

el("btn-volver-inicio").addEventListener("click", function () {
  pantallaInicio();
});

el("btn-repaso").addEventListener("click", function () {
  empezarRepaso();
});

pantallaInicio();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}