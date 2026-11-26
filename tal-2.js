const tabProductosT2 = {
  nombre: "productos",
  columnas: ["id", "nombre", "precio"],
  filas: [
    [1, "Pan", 10],
    [2, "Leche", 25],
    [3, "Queso", 60]
  ]
};

agregarLeccion("taller", {
  id: "tal-2",
  titulo: "Escribe en SQL",
  ejercicios: [
    {
      tipo: "escribir",
      explicacion: "📚 Escribe la consulta que pide TODOS los datos de la tabla productos. (En SQL da igual si escribes en mayúsculas o minúsculas, y el punto y coma final es opcional aquí.)",
      tabla: tabProductosT2,
      respuestas: ['SELECT * FROM productos;'],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "Empieza con SELECT, luego el símbolo que significa todas las columnas, luego FROM y el nombre de la tabla.",
      feedbackBien: "¡Perfecto! SELECT * FROM productos pide todas las columnas de todas las filas."
    },
    {
      tipo: "escribir",
      explicacion: "🧾 Escribe la consulta que pide solamente la columna nombre de la tabla productos.",
      tabla: tabProductosT2,
      respuestas: ['SELECT nombre FROM productos;'],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "SELECT, el nombre de la columna que quieres, FROM y el nombre de la tabla.",
      feedbackBien: "¡Perfecto! Pediste una sola columna, así que solo recibes Pan, Leche y Queso."
    },
    {
      tipo: "escribir",
      explicacion: "🥣 Escribe la consulta que pide el nombre y el precio de los productos que cuestan más de 20.",
      tabla: tabProductosT2,
      respuestas: ['SELECT nombre, precio FROM productos WHERE precio > 20;'],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "SELECT con las dos columnas separadas por coma, FROM con la tabla y, al final, WHERE con la condición.",
      feedbackBien: "¡Perfecto! WHERE funciona como un colador: solo Leche (25) y Queso (60) pasan."
    },
    {
      tipo: "escribir",
      explicacion: "🔢 Escribe la consulta que pide los nombres de los productos ordenados por precio.",
      tabla: tabProductosT2,
      respuestas: ['SELECT nombre FROM productos ORDER BY precio;', 'SELECT nombre FROM productos ORDER BY precio ASC;'],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "Pide la columna nombre de la tabla productos y, al final, agrega ORDER BY con la columna por la que se ordena.",
      feedbackBien: "¡Perfecto! ORDER BY ordena el resultado. Por defecto va de menor a mayor, y ASC lo dice de forma explícita."
    },
    {
      tipo: "escribir",
      explicacion: "📒 Agrega a la tabla productos un producto nuevo: id 4, nombre Jugo, precio 18. El texto va entre comillas simples.",
      tabla: tabProductosT2,
      respuestas: [
        "INSERT INTO productos (id, nombre, precio) VALUES (4, 'Jugo', 18);",
        "INSERT INTO productos VALUES (4, 'Jugo', 18);"
      ],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "Empieza con INSERT INTO y el nombre de la tabla. Luego VALUES y, entre paréntesis, los tres datos en orden. El texto va con comillas simples.",
      feedbackBien: "¡Perfecto! INSERT INTO agrega una fila nueva. Los datos de VALUES van en el mismo orden que las columnas."
    },
    {
      tipo: "escribir",
      explicacion: "✏️ Cambia el precio del producto con id 2 a 30. Ojo: sin WHERE cambiarías TODOS los productos.",
      tabla: tabProductosT2,
      respuestas: ['UPDATE productos SET precio = 30 WHERE id = 2;'],
      ignorarMayusculas: true,
      unirLineas: true,
      puntoYComaOpcional: true,
      pista: "UPDATE con la tabla, SET con la columna y el valor nuevo, y al final WHERE para elegir solo la fila con id 2.",
      feedbackBien: "¡Perfecto! SET dice qué cambiar y WHERE dice a quién. Sin WHERE se habrían cambiado las tres filas."
    }
  ]
});