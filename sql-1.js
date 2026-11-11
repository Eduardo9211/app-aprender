agregarLeccion("sql", {
  id: "sql-1",
  titulo: "Tablas, filas y columnas",
  ejercicios: [
    {
      explicacion: "📊 Una tabla es como una hoja de Excel. Cada FILA es un registro completo (aquí, un alumno). Cada COLUMNA es un tipo de dato (nombre, edad, ciudad). ¿Cuántas filas, o sea cuántos alumnos, tiene esta tabla?",
      tabla: {
        nombre: "alumnos",
        columnas: ["id", "nombre", "edad", "ciudad"],
        filas: [
          [1, "Ana", 20, "Lima"],
          [2, "Luis", 22, "Quito"],
          [3, "Marta", 19, "Cali"]
        ]
      },
      codigo: [],
      opciones: ['3', '4', '2'],
      correcta: 0,
      feedback: [
        "¡Correcto! Hay una fila por cada alumno: Ana, Luis y Marta. Los encabezados de arriba no cuentan como filas de datos.",
        "Ese 4 es el número de COLUMNAS (id, nombre, edad y ciudad). Las filas son los registros, uno por cada alumno.",
        "Cuenta de nuevo los alumnos: son Ana, Luis y Marta. Cada uno ocupa una fila."
      ]
    },
    {
      explicacion: "📑 Las columnas tienen nombre y guardan el mismo tipo de dato para todos los registros. Mira la tabla y responde: ¿cuál de estas opciones es una COLUMNA?",
      tabla: {
        nombre: "alumnos",
        columnas: ["id", "nombre", "edad", "ciudad"],
        filas: [
          [1, "Ana", 20, "Lima"],
          [2, "Luis", 22, "Quito"],
          [3, "Marta", 19, "Cali"]
        ]
      },
      codigo: [],
      opciones: ['edad', 'Ana', 'La segunda fila completa'],
      correcta: 0,
      feedback: [
        "¡Correcto! edad es una columna: es el nombre que agrupa un mismo tipo de dato para todos los alumnos.",
        "Ana es un dato, un valor guardado en la columna nombre. Una columna es el encabezado que agrupa datos del mismo tipo.",
        "La segunda fila completa es un registro (el de Luis), no una columna. Las filas van de lado; las columnas, hacia abajo."
      ]
    },
    {
      explicacion: "🪪 Dos alumnos podrían llamarse igual. Por eso las tablas suelen tener una columna id, un número único para cada fila, como la matrícula o la cédula. ¿Para qué sirve el id?",
      tabla: {
        nombre: "alumnos",
        columnas: ["id", "nombre", "edad", "ciudad"],
        filas: [
          [1, "Ana", 20, "Lima"],
          [2, "Luis", 22, "Quito"],
          [3, "Marta", 19, "Cali"]
        ]
      },
      codigo: [],
      opciones: ['Para identificar cada fila de forma única, aunque dos alumnos se llamen igual', 'Para guardar la edad del alumno', 'Para ordenar los nombres alfabéticamente'],
      correcta: 0,
      feedback: [
        "¡Correcto! El id nunca se repite, así que sirve para señalar exactamente a UN alumno sin confundirlo con otro. Después lo usarás para buscar, cambiar o borrar un registro.",
        "La edad tiene su propia columna. El id sirve para identificar la fila.",
        "Para ordenar hay otras herramientas. El id sirve para distinguir una fila de otra, sin confusión."
      ]
    },
    {
      explicacion: "🔎 Para encontrar un dato exacto, cruzas una FILA con una COLUMNA, como buscar una celda en Excel. Mira la tabla. ¿Cuál es la edad de Luis?",
      tabla: {
        nombre: "alumnos",
        columnas: ["id", "nombre", "edad", "ciudad"],
        filas: [
          [1, "Ana", 20, "Lima"],
          [2, "Luis", 22, "Quito"],
          [3, "Marta", 19, "Cali"]
        ]
      },
      codigo: [],
      opciones: ['22', '20', '19'],
      correcta: 0,
      feedback: [
        "¡Correcto! Ubicas la fila de Luis y avanzas hasta la columna edad: 22.",
        "20 es la edad de Ana, que está en la primera fila. Busca la fila de Luis.",
        "19 es la edad de Marta, que está en la tercera fila. Busca la fila de Luis."
      ]
    },
    {
      explicacion: "🛠️ Una tabla se crea con CREATE TABLE, y le dices el nombre y las columnas con su tipo de dato: INTEGER para números enteros y TEXT para textos. Completa el código.",
      codigo: ['CREATE ___ alumnos (', '  id INTEGER,', '  nombre TEXT,', '  edad INTEGER', ');'],
      opciones: ['TABLE', 'FILE', 'LIST'],
      correcta: 0,
      feedback: [
        "¡Correcto! CREATE TABLE significa 'crear una tabla'. Entre paréntesis van las columnas, separadas por comas, y la última no lleva coma. Termina con punto y coma.",
        "FILE sería para archivos. En SQL, lo que se crea para guardar datos ordenados es una tabla: TABLE.",
        "LIST es una lista de Python, no una palabra de SQL. Aquí se crea una tabla con TABLE."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🐶 Vas a crear la tabla mascotas con tres columnas, en este orden: id, nombre y edad. Ordena los bloques para armar el comando completo.",
      bloques: [
        'CREATE TABLE mascotas (',
        '  id INTEGER,',
        '  nombre TEXT,',
        '  edad INTEGER',
        ');'
      ],
      pista: "El comando empieza con CREATE TABLE y el paréntesis que abre. Luego van las columnas en el orden que se pidió: id, nombre, edad. Al final se cierra el paréntesis con el punto y coma.",
      feedbackBien: "¡Perfecto! Abres con CREATE TABLE, escribes las tres columnas con su tipo y cierras el paréntesis. Fíjate: la última columna, edad, no lleva coma, porque ya no viene otra detrás. Es un error muy común."
    }
  ]
});