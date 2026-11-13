const tabNotas5 = {
  nombre: "notas",
  columnas: ["id", "alumno", "nota"],
  filas: [
    [1, "Ana", 9],
    [2, "Luis", 7],
    [3, "Marta", 8],
    [4, "Pedro", 6]
  ]
};

agregarLeccion("sql", {
  id: "sql-5",
  titulo: "Resumir datos",
  ejercicios: [
    {
      explicacion: "🧮 A veces no quieres ver todas las filas, sino un RESUMEN, como cuando el cajero te dice cuántos artículos llevas. COUNT cuenta filas. Completa la consulta para contar cuántas notas hay.",
      tabla: tabNotas5,
      codigo: ['SELECT ___(*) FROM notas;'],
      opciones: ['COUNT', 'LEN', 'SIZE'],
      correcta: 0,
      feedback: [
        "¡Correcto! COUNT(*) cuenta las filas. Aquí devolvería 4. El * significa 'cuenta las filas completas'.",
        "LEN es de Python. En SQL, la función para contar filas se llama COUNT.",
        "SIZE no existe en SQL para esto. Para contar filas se usa COUNT."
      ]
    },
    {
      explicacion: "📊 AVG calcula el promedio y SUM la suma total de una columna. Se escriben con paréntesis y el nombre de la columna adentro. ¿Qué devolverá esta consulta?",
      tabla: tabNotas5,
      codigo: ['SELECT AVG(nota) FROM notas;'],
      opciones: ['7.5', '8', '30'],
      correcta: 0,
      feedback: [
        "¡Correcto! La suma de las notas es 9 + 7 + 8 + 6 = 30, y entre 4 alumnos da 7.5.",
        "El 8 no sale. El promedio es la suma entre la cantidad: 30 entre 4 da 7.5.",
        "30 es la SUMA de las notas, la que daría SUM(nota). Aquí se pidió el promedio, AVG."
      ]
    },
    {
      explicacion: "🏆 MAX devuelve el valor más grande de una columna y MIN el más pequeño. Ojo: devuelven el VALOR, no el nombre de quién lo tiene. ¿Qué devolverá esta consulta?",
      tabla: tabNotas5,
      codigo: ['SELECT MAX(nota) FROM notas;'],
      opciones: ['9', 'Ana', '4'],
      correcta: 0,
      feedback: [
        "¡Correcto! La nota más alta es 9. MAX devuelve ese número, no el nombre de la persona.",
        "Ana es quien tiene el 9, pero MAX(nota) devuelve el valor de la nota, no el nombre. Para saber quién la tiene harían falta más instrucciones.",
        "4 es el número de alumnos, lo que daría COUNT(*). MAX(nota) devuelve la nota más alta."
      ]
    },
    {
      explicacion: "🎯 Puedes combinar un resumen con WHERE: primero se filtran las filas y luego se calcula sobre las que quedaron. ¿Qué devolverá esta consulta?",
      tabla: tabNotas5,
      codigo: ['SELECT COUNT(*) FROM notas', 'WHERE nota >= 8;'],
      opciones: ['2', '3', '8'],
      correcta: 0,
      feedback: [
        "¡Correcto! Solo Ana (9) y Marta (8) tienen nota mayor o igual a 8. Se cuentan esas 2 filas.",
        "Cuenta de nuevo: Luis tiene 7 y Pedro tiene 6, así que no cumplen. Solo Ana y Marta pasan.",
        "El 8 es el valor que se usa en el filtro, no el resultado. COUNT(*) devuelve cuántas filas pasaron: 2."
      ]
    },
    {
      explicacion: "🐞 Esta consulta tiene un error y no se va a ejecutar. ¿Cuál es el problema?",
      codigo: ['SELECT AVG nota FROM notas;'],
      opciones: ['AVG necesita paréntesis: AVG(nota)', 'Falta un WHERE', 'La columna nota no existe'],
      correcta: 0,
      feedback: [
        "¡Bien! Las funciones como AVG, COUNT, SUM, MAX y MIN siempre llevan paréntesis con la columna adentro: AVG(nota).",
        "No hace falta un WHERE: sin filtro, el promedio se calcula con todas las filas. El problema está en cómo se escribió AVG.",
        "La columna nota sí existe en la tabla. El problema es que le faltan los paréntesis a AVG."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "📉 Quieres saber cuántos alumnos sacaron menos de 8. Ordena los bloques. ¿Qué número devolverá?",
      tabla: tabNotas5,
      bloques: [
        'SELECT COUNT(*)',
        'FROM notas',
        'WHERE nota < 8;'
      ],
      pista: "Es el orden de siempre: primero SELECT con lo que quieres calcular, luego FROM con la tabla y al final WHERE con la condición.",
      feedbackBien: "¡Perfecto! Luis (7) y Pedro (6) tienen menos de 8, así que COUNT(*) devuelve 2. Fíjate cómo se combinan las piezas: la función resume, el WHERE filtra primero."
    }
  ]
});