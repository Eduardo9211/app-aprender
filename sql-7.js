const tabAlumnos7 = {
  nombre: "alumnos",
  columnas: ["id", "nombre", "curso_id"],
  filas: [
    [1, "Ana", 1],
    [2, "Luis", 2],
    [3, "Marta", 1]
  ]
};

const tabCursos7 = {
  nombre: "cursos",
  columnas: ["id", "titulo"],
  filas: [
    [1, "Python"],
    [2, "SQL"]
  ]
};

agregarLeccion("sql", {
  id: "sql-7",
  titulo: "JOIN: unir tablas",
  ejercicios: [
    {
      explicacion: "🌉 En vez de repetir el nombre del curso en cada alumno, se guarda en otra tabla, y la tabla alumnos solo anota el NÚMERO del curso. Ese número es un puente entre las dos tablas. Mira las dos tablas: ¿qué columnas son el puente?",
      tablas: [tabAlumnos7, tabCursos7],
      codigo: [],
      opciones: ['curso_id de alumnos con id de cursos', 'nombre de alumnos con titulo de cursos', 'No hay ninguna conexión'],
      correcta: 0,
      feedback: [
        "¡Correcto! curso_id guarda el número de un curso, y ese número coincide con el id de la tabla cursos. A una columna así se le llama llave foránea: apunta a una fila de otra tabla.",
        "Los nombres y los títulos son datos distintos que no coinciden entre sí. El puente se hace con números que sí se repiten en las dos tablas.",
        "Sí hay conexión: el curso_id de cada alumno coincide con el id de un curso. Así las tablas se relacionan."
      ]
    },
    {
      explicacion: "🔎 Para saber el curso de un alumno, sigues el puente a mano: miras su curso_id y buscas ese número en la tabla cursos. ¿A qué curso va Luis?",
      tablas: [tabAlumnos7, tabCursos7],
      codigo: [],
      opciones: ['SQL', 'Python', '2'],
      correcta: 0,
      feedback: [
        "¡Correcto! Luis tiene curso_id 2, y en la tabla cursos el id 2 es SQL.",
        "Python es el curso con id 1. Luis tiene curso_id 2, así que va al otro.",
        "2 es el número del puente, pero la pregunta es por el curso. Hay que buscar ese 2 en la tabla cursos y leer su título."
      ]
    },
    {
      explicacion: "🔗 JOIN hace ese trabajo de seguir el puente, pero automáticamente y para todas las filas. ON dice cuáles columnas coinciden. Y como hay dos tablas, se escribe tabla.columna para saber de cuál hablas. Completa la consulta.",
      tablas: [tabAlumnos7, tabCursos7],
      codigo: ['SELECT alumnos.nombre, cursos.titulo', 'FROM alumnos', '___ cursos', 'ON alumnos.curso_id = cursos.id;'],
      opciones: ['JOIN', 'MERGE', 'UNION'],
      correcta: 0,
      feedback: [
        "¡Correcto! JOIN une las dos tablas, y ON le dice cuál es el puente: curso_id de alumnos igual a id de cursos.",
        "MERGE existe en algunas bases de datos para otra cosa. Para unir tablas por una columna en común se usa JOIN.",
        "UNION pone resultados uno debajo del otro. JOIN, en cambio, los une lado a lado según una columna en común."
      ]
    },
    {
      explicacion: "📋 El JOIN empareja cada fila con la fila que le corresponde en la otra tabla y devuelve una sola tabla combinada. ¿Qué devolverá esta consulta?",
      tablas: [tabAlumnos7, tabCursos7],
      codigo: ['SELECT alumnos.nombre, cursos.titulo', 'FROM alumnos', 'JOIN cursos', 'ON alumnos.curso_id = cursos.id;'],
      opciones: ['Tres filas: Ana con Python, Luis con SQL y Marta con Python', 'Dos filas, una por cada curso', 'Seis filas con todas las combinaciones'],
      correcta: 0,
      feedback: [
        "¡Correcto! Hay un resultado por cada alumno, con el título del curso que le corresponde. Ana y Marta comparten Python.",
        "El resultado tiene una fila por alumno, no por curso. Como hay tres alumnos, salen tres filas.",
        "Seis combinaciones saldrían si no existiera el ON: cada alumno quedaría emparejado con cada curso. El ON es el que deja solo las parejas correctas."
      ]
    },
    {
      explicacion: "🐞 Esta consulta está incompleta y no hace lo que queremos. ¿Cuál es el problema?",
      tablas: [tabAlumnos7, tabCursos7],
      codigo: ['SELECT alumnos.nombre, cursos.titulo', 'FROM alumnos JOIN cursos;'],
      opciones: ['Falta el ON que dice cómo se conectan las tablas', 'Falta un WHERE', 'JOIN no se puede usar con dos tablas'],
      correcta: 0,
      feedback: [
        "¡Bien! Sin ON, la base de datos no sabe cuál es el puente. Según la base de datos, da error o empareja cada alumno con cada curso, con un resultado sin sentido. Siempre hay que decir por cuáles columnas se unen.",
        "No hace falta un WHERE para unir tablas. Lo que falta es decir cómo se conectan, con ON.",
        "JOIN es justamente para usar dos tablas. Lo que falta es el ON con la columna que las une."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🐍 Quieres los nombres de los alumnos del curso Python. Une las tablas y filtra. Ordena los bloques. ¿Quiénes saldrán en el resultado?",
      tablas: [tabAlumnos7, tabCursos7],
      bloques: [
        'SELECT alumnos.nombre',
        'FROM alumnos',
        'JOIN cursos',
        'ON alumnos.curso_id = cursos.id',
        "WHERE cursos.titulo = 'Python';"
      ],
      pista: "El orden es siempre el mismo: SELECT, FROM, luego JOIN con su ON pegado, y al final el WHERE. El punto y coma va solo en la última línea.",
      feedbackBien: "¡Perfecto! Se unen las tablas y luego se filtra por el título Python: salen Ana y Marta. Este patrón es la base de lo que hace un backend cuando muestra, por ejemplo, 'los pedidos de este cliente'."
    }
  ]
});