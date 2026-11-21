agregarLeccion("detective", {
  id: "det-3",
  titulo: "Errores de datos y APIs",
  ejercicios: [
    {
      explicacion: "🗄️ Tienes una base de datos con una tabla llamada alumnos y ejecutas esta consulta. El mensaje dice: no such table: alumno (no existe esa tabla). ¿Cuál es la causa?",
      codigo: ['SELECT * FROM alumno;'],
      opciones: ['El nombre de la tabla está mal escrito: es alumnos', 'Falta un WHERE', 'SELECT no existe'],
      correcta: 0,
      feedback: [
        "¡Correcto! La tabla se llama alumnos (en plural) y se pidió alumno. SQL es literal: un nombre casi igual no sirve. Este mensaje es una invitación a revisar cómo está escrito el nombre.",
        "SELECT * funciona sin WHERE: simplemente trae todas las filas. El problema está en el nombre de la tabla.",
        "SELECT sí existe, es la palabra principal de SQL para pedir datos. El problema es el nombre de la tabla."
      ]
    },
    {
      explicacion: "🚫 La tabla alumnos ya tiene un alumno con id 1 (Ana). El mensaje dice: UNIQUE constraint failed: alumnos.id (falló la regla de que el id sea único). ¿Qué pasó?",
      codigo: ['INSERT INTO alumnos (id, nombre)', "VALUES (1, 'Pedro');"],
      opciones: ['Ya existe una fila con id 1 y el id no puede repetirse', 'Falta un WHERE', 'Pedro no es un nombre válido'],
      correcta: 0,
      feedback: [
        "¡Correcto! El id debe ser único, como una matrícula. Como el 1 ya está ocupado por Ana, la base de datos rechaza al nuevo. La solución es usar un id distinto (o dejar que la base de datos lo asigne sola).",
        "INSERT no usa WHERE: sirve para agregar filas nuevas. El problema es el id repetido.",
        "Pedro es un nombre perfectamente válido. El problema es el id, que ya está en uso."
      ]
    },
    {
      explicacion: "💾 Un caso silencioso: con Python guardas un dato en la base de datos y no hay ningún error, pero al abrir el programa otra vez, el dato no está. ¿Cuál es la causa más probable?",
      codigo: ['cursor.execute("INSERT INTO productos VALUES (4, \'Jugo\', 18)")', 'conexion.close()'],
      opciones: ['Falta conexion.commit() antes de cerrar', 'La base de datos se borra sola', 'INSERT nunca guarda datos'],
      correcta: 0,
      feedback: [
        "¡Correcto! Sin commit, los cambios quedan en borrador y se pierden al cerrar la conexión. Es de los errores más traicioneros porque no avisa. Si un dato 'desaparece' sin error, revisa si falta el commit.",
        "Las bases de datos no se borran solas. Lo que pasa es que los cambios nunca se confirmaron con commit.",
        "INSERT sí guarda datos, pero necesita que confirmes los cambios con commit para que queden definitivos."
      ]
    },
    {
      explicacion: "🧩 Recibes un texto de una API y al convertirlo falla. El mensaje dice: JSONDecodeError: Expecting property name enclosed in double quotes (se esperaba un nombre entre comillas dobles). ¿Cuál es el problema?",
      codigo: [`texto = "{'edad': 20}"`, 'datos = json.loads(texto)'],
      opciones: ['JSON exige comillas dobles y el texto usa comillas simples', 'Falta una coma', 'El 20 debe ir como texto'],
      correcta: 0,
      feedback: [
        "¡Correcto! Python acepta comillas simples en sus diccionarios, pero JSON es más estricto: solo comillas dobles. El texto correcto sería {\"edad\": 20}.",
        "No falta ninguna coma: solo hay un dato, y no necesita una. El problema son las comillas simples.",
        "El 20 está bien como número, y en JSON los números van sin comillas. El problema son las comillas de la clave."
      ]
    },
    {
      explicacion: "🔐 Los códigos de respuesta de una API son pistas. Ya conoces el 200 (todo bien), el 404 (no encontrado) y el 500 (falló el servidor). Hay otro muy común: tu programa recibe un 401 Unauthorized. ¿Qué te está diciendo?",
      codigo: [],
      opciones: ['No te identificaste o tu llave de acceso no es válida', 'La página no existe', 'El servidor se cayó'],
      correcta: 0,
      feedback: [
        "¡Correcto! 401 significa 'no autorizado': la API no sabe quién eres, o tu llave de acceso (token) es incorrecta o venció. Revisa tus credenciales.",
        "Eso es el 404, que significa 'no encontrado'. El 401 es de permisos, no de que algo no exista.",
        "Eso es el 500, un problema del lado del servidor. El 401 indica un problema con tu identificación."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🛣️ Un dato hace un recorrido completo en una app. Cuando algo falla, conviene revisar cada tramo en orden. Ordena el camino de un dato, desde que el usuario lo escribe hasta que se vuelve a leer.",
      bloques: [
        '1. El usuario escribe un dato en la app',
        '2. Python recibe el dato',
        '3. Python lo guarda en la base con INSERT y commit',
        '4. Una consulta SELECT lo recupera después'
      ],
      pista: "Es el orden natural: alguien escribe, el programa recibe, se guarda y, más tarde, se vuelve a pedir.",
      feedbackBien: "¡Perfecto! Si el dato no aparece al final, un buen detective revisa cada paso en este orden: ¿llegó el dato?, ¿se ejecutó el INSERT?, ¿se hizo commit?, ¿la consulta SELECT pide lo correcto? Así encuentras en qué tramo se perdió."
    }
  ]
});