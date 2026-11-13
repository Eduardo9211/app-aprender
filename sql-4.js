const tabAlumnos4 = {
  nombre: "alumnos",
  columnas: ["id", "nombre", "edad"],
  filas: [
    [1, "Ana", 20],
    [2, "Luis", 22],
    [3, "Marta", 19]
  ]
};

agregarLeccion("sql", {
  id: "sql-4",
  titulo: "INSERT, UPDATE y DELETE",
  ejercicios: [
    {
      explicacion: "📒 Una libreta de contactos tiene tres acciones: agregar un contacto nuevo (INSERT), corregir uno existente (UPDATE) y tachar uno (DELETE). Empecemos agregando. Completa el comando para meter un alumno nuevo.",
      tabla: tabAlumnos4,
      codigo: ['INSERT ___ alumnos (id, nombre, edad)', "VALUES (4, 'Pedro', 21);"],
      opciones: ['INTO', 'FROM', 'TO'],
      correcta: 0,
      feedback: [
        "¡Correcto! INSERT INTO significa 'inserta dentro de'. Después van las columnas entre paréntesis y, tras VALUES, los datos en el mismo orden.",
        "FROM se usa para leer datos con SELECT. Para agregar se usa INSERT INTO: 'inserta dentro de'.",
        "TO no forma parte del comando. La palabra correcta después de INSERT es INTO."
      ]
    },
    {
      explicacion: "➕ Los datos de VALUES se acomodan en el mismo orden que las columnas que escribiste, y el texto lleva comillas simples. ¿Cuántas filas tendrá la tabla después de este comando?",
      tabla: tabAlumnos4,
      codigo: ['INSERT INTO alumnos (id, nombre, edad)', "VALUES (4, 'Pedro', 21);"],
      opciones: ['4', '3', '5'],
      correcta: 0,
      feedback: [
        "¡Correcto! Había 3 alumnos y se agregó uno más: Pedro. Ahora son 4 filas.",
        "Esas eran las filas de antes. INSERT agrega una fila nueva, así que la tabla crece.",
        "INSERT agrega una sola fila, no dos. Eran 3 y ahora son 4."
      ]
    },
    {
      explicacion: "✏️ UPDATE corrige datos que ya existen. SET dice qué cambiar y WHERE dice a quién. ¿Qué hará este comando?",
      tabla: tabAlumnos4,
      codigo: ['UPDATE alumnos', 'SET edad = 23', 'WHERE id = 2;'],
      opciones: ['Cambia solo la edad de Luis a 23', 'Cambia la edad de todos a 23', 'Borra a Luis'],
      correcta: 0,
      feedback: [
        "¡Correcto! WHERE id = 2 señala a una sola fila, la de Luis, y SET cambia solo su edad. Por eso el id es tan útil.",
        "Eso pasaría si no existiera el WHERE. Gracias al WHERE id = 2, solo se cambia la fila de Luis.",
        "Borrar se hace con DELETE. UPDATE solo cambia datos, no elimina filas."
      ]
    },
    {
      explicacion: "🚨 Este es el error más peligroso en SQL: un UPDATE SIN WHERE cambia TODAS las filas. Mucha gente lo ha cometido, y por eso siempre se revisa dos veces. ¿Qué pasa con este comando?",
      tabla: tabAlumnos4,
      codigo: ['UPDATE alumnos', 'SET edad = 30;'],
      opciones: ['Todos los alumnos quedan con edad 30', 'No pasa nada', 'Da un error por falta de WHERE'],
      correcta: 0,
      feedback: [
        "¡Exacto! Sin WHERE no hay filtro, así que la base de datos cambia la edad de las tres filas. La base de datos no te pregunta si estás seguro. Hábito de profesional: escribe primero el WHERE y luego el resto.",
        "Sí pasa algo, y grave: sin WHERE, el cambio se aplica a todas las filas de la tabla.",
        "La base de datos no marca error: el comando es válido y lo ejecuta. Justo por eso es peligroso."
      ]
    },
    {
      explicacion: "🗑️ DELETE FROM borra filas, y como en UPDATE, el WHERE decide cuáles. Sin WHERE se borran todas. ¿Qué filas quedarán en la tabla después de este comando?",
      tabla: tabAlumnos4,
      codigo: ['DELETE FROM alumnos', 'WHERE id = 1;'],
      opciones: ['Las de Luis y Marta', 'Solo la de Ana', 'Ninguna'],
      correcta: 0,
      feedback: [
        "¡Correcto! Se borró la fila con id 1, que es la de Ana. Quedan Luis (id 2) y Marta (id 3).",
        "Es al revés: esa es la fila que se borra. Quedan las demás.",
        "Ninguna quedaría si el comando no tuviera WHERE. Con WHERE id = 1 se borra solo una fila."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🐶 Primero registras una mascota y luego le corriges el nombre. Ordena los bloques. ¿Cómo quedará el nombre de la mascota con id 1?",
      bloques: [
        'INSERT INTO mascotas (id, nombre)',
        "VALUES (1, 'Max');",
        "UPDATE mascotas SET nombre = 'Rex'",
        'WHERE id = 1;'
      ],
      pista: "No puedes corregir algo que todavía no existe. Primero va el INSERT completo (sus dos líneas) y después el UPDATE completo (sus dos líneas).",
      feedbackBien: "¡Perfecto! Primero se guarda la mascota con el nombre Max. Después, el UPDATE con WHERE id = 1 cambia ese nombre a Rex. Si hubieras puesto el UPDATE primero, no habría ninguna fila que cambiar."
    }
  ]
});