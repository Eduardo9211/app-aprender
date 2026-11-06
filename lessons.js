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
    disponible: false,
    lecciones: []
  },
  {
    id: "sql",
    nombre: "SQL",
    icono: "🗄️",
    disponible: false,
    lecciones: []
  }
];

function agregarLeccion(idModulo, leccion) {
  const modulo = modulos.find(function (m) {
    return m.id === idModulo;
  });
  modulo.lecciones.push(leccion);
}