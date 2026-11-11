agregarLeccion("sql", {
  id: "sql-2",
  titulo: "SELECT: pedir datos",
  ejercicios: [
    {
      explicacion: "📚 Imagina un bibliotecario muy literal: solo hace lo que le pides, con las palabras exactas. SELECT es la forma de pedirle datos a la tabla (FROM dice de cuál). Completa el código para pedir los nombres.",
      tabla: {
        nombre: "productos",
        columnas: ["id", "nombre", "precio"],
        filas: [
          [1, "Pan", 10],
          [2, "Leche", 25],
          [3, "Queso", 60]
        ]
      },
      codigo: ['___ nombre FROM productos;'],
      opciones: ['SELECT', 'GET', 'SHOW'],
      correcta: 0,
      feedback: [
        "¡Correcto! SELECT significa 'selecciona'. La consulta se lee: selecciona nombre de la tabla productos. El punto y coma marca el final.",
        "GET se usa en otros contextos, como las APIs. Para pedir datos a una tabla, SQL usa SELECT.",
        "SHOW sí existe en algunas bases de datos, pero para otras cosas. Para consultar datos, la palabra estándar es SELECT."
      ]
    },
    {
      explicacion: "🧾 Después de SELECT escribes QUÉ columna quieres. La respuesta solo trae esa columna, de todas las filas. ¿Qué devolverá esta consulta?",
      tabla: {
        nombre: "productos",
        columnas: ["id", "nombre", "precio"],
        filas: [
          [1, "Pan", 10],
          [2, "Leche", 25],
          [3, "Queso", 60]
        ]
      },
      codigo: ['SELECT nombre FROM productos;'],
      opciones: ['Pan, Leche y Queso', '10, 25 y 60', 'Toda la tabla'],
      correcta: 0,
      feedback: [
        "¡Correcto! Pediste solo la columna nombre, y te devuelve ese dato de cada fila.",
        "Esos son los precios. Pediste la columna nombre, no la columna precio.",
        "No te devuelve toda la tabla porque solo pediste una columna. Para pedir todo hay otro símbolo, que viene en el siguiente reto."
      ]
    },
    {
      explicacion: "⭐ El asterisco * significa 'todas las columnas'. Es como decirle al bibliotecario: tráeme todo lo que tengas. ¿Qué devolverá esta consulta?",
      tabla: {
        nombre: "productos",
        columnas: ["id", "nombre", "precio"],
        filas: [
          [1, "Pan", 10],
          [2, "Leche", 25],
          [3, "Queso", 60]
        ]
      },
      codigo: ['SELECT * FROM productos;'],
      opciones: ['Todas las columnas de todas las filas', 'Solo la primera fila', 'Solo la columna id'],
      correcta: 0,
      feedback: [
        "¡Correcto! El * significa todas las columnas, y como no hay ningún filtro, trae también todas las filas. Es la forma más rápida de ver una tabla completa.",
        "Para traer solo la primera fila haría falta otra instrucción. Con * y sin filtros, trae todas las filas.",
        "El * no se limita a una columna: significa todas. Para pedir solo el id escribirías SELECT id."
      ]
    },
    {
      explicacion: "📋 Puedes pedir varias columnas escribiéndolas separadas por comas. Se devuelven en el mismo orden en que las escribes. ¿Qué devolverá esta consulta?",
      tabla: {
        nombre: "productos",
        columnas: ["id", "nombre", "precio"],
        filas: [
          [1, "Pan", 10],
          [2, "Leche", 25],
          [3, "Queso", 60]
        ]
      },
      codigo: ['SELECT precio, nombre FROM productos;'],
      opciones: ['Una tabla con precio primero y nombre después', 'Una tabla con nombre primero y precio después', 'Un error por la coma'],
      correcta: 0,
      feedback: [
        "¡Exacto! Las columnas salen en el orden en que las pides, no en el orden en que están guardadas. Aquí aparece precio primero y nombre después.",
        "Ese sería el resultado de escribir SELECT nombre, precio. Aquí se escribió primero precio, y el resultado respeta ese orden.",
        "La coma no es un error: es justo como se separan varias columnas en un SELECT."
      ]
    },
    {
      explicacion: "🐞 Esta consulta tiene un error y la base de datos no la va a ejecutar. ¿Cuál es el problema?",
      codigo: ['FROM productos SELECT nombre;'],
      opciones: ['Primero va SELECT y después FROM', 'Falta una coma', 'La tabla productos no existe'],
      correcta: 0,
      feedback: [
        "¡Bien! SQL exige el orden: primero SELECT (qué quieres) y después FROM (de dónde). Es como una frase: primero pides, luego dices a quién.",
        "No hace falta ninguna coma, porque solo se pide una columna. El problema es el orden de las palabras.",
        "La tabla productos sí existe, la acabas de ver. El problema no son los datos, sino que FROM y SELECT están al revés."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔢 Con ORDER BY puedes pedir los resultados ordenados. ORDER BY precio los ordena del más barato al más caro. Ordena los bloques para pedir nombre y precio, ordenados por precio.",
      bloques: [
        'SELECT nombre, precio',
        'FROM productos',
        'ORDER BY precio;'
      ],
      pista: "Una consulta se lee en orden: primero SELECT con lo que quieres, luego FROM con la tabla, y al final ORDER BY para decir cómo ordenar. El punto y coma va solo en la última línea.",
      feedbackBien: "¡Perfecto! SELECT dice qué columnas, FROM dice de qué tabla y ORDER BY dice cómo ordenar. El resultado sería Pan 10, Leche 25 y Queso 60. Puedes escribir la consulta en varias líneas: a la base de datos le da igual, lo único importante es el orden de las palabras y el punto y coma al final."
    }
  ]
});