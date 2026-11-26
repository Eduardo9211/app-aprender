const modulos = [
  {
    id: "python",
    nombre: "Python",
    icono: "🐍",
    disponible: true,
    lecciones: []
  },
  {
    id: "java",
    nombre: "Java",
    icono: "☕",
    disponible: true,
    lecciones: []
  },
  {
    id: "sql",
    nombre: "SQL",
    icono: "🗄️",
    disponible: true,
    lecciones: []
  },
  {
    id: "detective",
    nombre: "Detective de errores",
    icono: "🕵️",
    disponible: true,
    lecciones: []
  },
  {
    id: "taller",
    nombre: "Taller de escritura",
    icono: "✍️",
    disponible: true,
    lecciones: []
  }
];

function agregarLeccion(idModulo, leccion) {
  const modulo = modulos.find(function (m) {
    return m.id === idModulo;
  });
  modulo.lecciones.push(leccion);
}