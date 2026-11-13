const tabProductos3 = {
  nombre: "productos",
  columnas: ["id", "nombre", "precio", "categoria"],
  filas: [
    [1, "Pan", 10, "panaderia"],
    [2, "Leche", 25, "lacteos"],
    [3, "Queso", 60, "lacteos"],
    [4, "Galleta", 15, "panaderia"]
  ]
};

agregarLeccion("sql", {
  id: "sql-3",
  titulo: "WHERE: filtrar datos",
  ejercicios: [
    {
      explicacion: "🥣 WHERE es un colador: deja pasar solo las filas que cumplen una condición. Va después del FROM. Completa la consulta para pedir los productos que cuestan más de 20.",
      tabla: tabProductos3,
      codigo: ['SELECT nombre FROM productos', '___ precio > 20;'],
      opciones: ['WHERE', 'IF', 'FILTER'],
      correcta: 0,
      feedback: [
        "¡Correcto! WHERE significa 'donde': trae los nombres de los productos donde el precio sea mayor que 20.",
        "IF es de Python. En SQL, para filtrar filas se usa WHERE.",
        "FILTER existe en otros lenguajes, pero en SQL la palabra para filtrar filas es WHERE."
      ]
    },
    {
      explicacion: "🔍 Sigue la consulta como si fueras la base de datos: revisa fila por fila y deja pasar solo las que cumplen. ¿Qué devolverá esta consulta?",
      tabla: tabProductos3,
      codigo: ['SELECT nombre FROM productos', 'WHERE precio > 20;'],
      opciones: ['Leche y Queso', 'Pan y Galleta', 'Leche, Queso y Galleta'],
      correcta: 0,
      feedback: [
        "¡Correcto! Leche cuesta 25 y Queso 60, ambos mayores que 20. Pan (10) y Galleta (15) no pasan el colador.",
        "Esos son justo los que NO cumplen: cuestan menos de 20. El filtro deja pasar los que valen más.",
        "La Galleta cuesta 15, que no es mayor que 20. Solo Leche y Queso pasan el filtro."
      ]
    },
    {
      explicacion: "💬 Cuando comparas con un TEXTO, el texto va entre comillas simples. Sin comillas, SQL cree que es el nombre de una columna. Y para comparar si algo es igual se usa un solo =, a diferencia de Python. Completa la consulta.",
      tabla: tabProductos3,
      codigo: ['SELECT nombre FROM productos', 'WHERE categoria = ___;'],
      opciones: ["'lacteos'", 'lacteos', '(lacteos)'],
      correcta: 0,
      feedback: [
        "¡Correcto! Las comillas simples le dicen a SQL: 'esto es un texto, búscalo tal cual'.",
        "Sin comillas, SQL piensa que lacteos es el nombre de una columna y no la encuentra. Los textos siempre van entre comillas simples.",
        "Los paréntesis no convierten algo en texto. Para eso sirven las comillas simples."
      ]
    },
    {
      explicacion: "🤝 Con AND, el producto tiene que cumplir las DOS condiciones a la vez. Es como un colador doble. ¿Qué devolverá esta consulta?",
      tabla: tabProductos3,
      codigo: ['SELECT nombre FROM productos', "WHERE categoria = 'lacteos'", 'AND precio < 50;'],
      opciones: ['Solo Leche', 'Leche y Queso', 'Pan y Leche'],
      correcta: 0,
      feedback: [
        "¡Correcto! Leche es lácteo y cuesta 25 (menos de 50): cumple las dos. Queso es lácteo, pero cuesta 60, así que no cumple la segunda.",
        "Queso es lácteo, pero cuesta 60 y no es menor que 50. Con AND tienen que cumplirse las dos condiciones.",
        "Pan no es lácteo, así que no cumple la primera condición. Con AND, falla una y queda fuera."
      ]
    },
    {
      explicacion: "🔀 Con OR basta con que cumpla UNA de las dos condiciones. Es un colador con dos entradas. ¿Qué devolverá esta consulta?",
      tabla: tabProductos3,
      codigo: ['SELECT nombre FROM productos', "WHERE categoria = 'panaderia'", 'OR precio > 50;'],
      opciones: ['Pan, Galleta y Queso', 'Solo Queso', 'Solo Pan y Galleta'],
      correcta: 0,
      feedback: [
        "¡Correcto! Pan y Galleta cumplen la primera condición (son de panadería) y Queso cumple la segunda (cuesta más de 50). Con OR basta una.",
        "Queso cumple, pero también pasan los de panadería. Con OR, cumplir cualquiera de las dos es suficiente.",
        "Pan y Galleta sí pasan, pero Queso también, porque cuesta 60 y cumple la segunda condición."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🧺 Quieres el nombre y el precio de los productos lácteos, ordenados por precio. Ordena los bloques. ¿Qué devolverá al final?",
      tabla: tabProductos3,
      bloques: [
        'SELECT nombre, precio',
        'FROM productos',
        "WHERE categoria = 'lacteos'",
        'ORDER BY precio;'
      ],
      pista: "El orden de las palabras en SQL es fijo: SELECT (qué columnas), FROM (de qué tabla), WHERE (qué filas) y al final ORDER BY (cómo ordenar). El punto y coma va solo al final.",
      feedbackBien: "¡Perfecto! SELECT, FROM, WHERE y ORDER BY, siempre en ese orden. El resultado sería Leche 25 y Queso 60. Primero se filtran las filas con WHERE y después se ordenan lo que quedó."
    }
  ]
});