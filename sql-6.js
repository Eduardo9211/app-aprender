const tabProductos6 = {
  nombre: "productos",
  columnas: ["id", "nombre", "precio"],
  filas: [
    [1, "Pan", 10],
    [2, "Leche", 25],
    [3, "Queso", 60]
  ]
};

agregarLeccion("sql", {
  id: "sql-6",
  titulo: "Python + SQLite",
  ejercicios: [
    {
      explicacion: "🔌 Aquí se une todo: Python será el mesero que le lleva los pedidos al archivero. Python ya trae un módulo llamado sqlite3 para hablar con una base de datos, sin instalar nada. Completa el código.",
      codigo: ['import ___', 'conexion = sqlite3.connect("tienda.db")'],
      opciones: ['sqlite3', 'sql', 'database'],
      correcta: 0,
      feedback: [
        "¡Correcto! sqlite3 es el módulo de Python para trabajar con bases de datos SQLite, que son archivos. Es muy usado en apps móviles y proyectos pequeños.",
        "sql suena lógico, pero el módulo de Python se llama sqlite3. Hay que escribir el nombre exacto.",
        "database no es un módulo de Python. El que viene incluido para esto es sqlite3."
      ]
    },
    {
      explicacion: "📁 Una base SQLite es simplemente un archivo, como los que aprendiste en la lección de archivos. ¿Qué hace sqlite3.connect('tienda.db') si ese archivo todavía no existe?",
      codigo: [],
      opciones: ['Lo crea vacío y se conecta a él', 'Da un error', 'Descarga una base de datos de internet'],
      correcta: 0,
      feedback: [
        "¡Correcto! Si el archivo no existe, SQLite lo crea vacío y se conecta. Es como abrir un archivero nuevo y vacío.",
        "No da error: connect crea el archivo si hace falta. Por eso se puede empezar una base de datos desde cero.",
        "SQLite trabaja en tu propio dispositivo, sin internet. Por eso encaja tan bien con tu app offline."
      ]
    },
    {
      explicacion: "🛎️ El cursor es el mesero: con execute le entregas el pedido en SQL y con fetchall te trae todas las filas de la respuesta. ¿Qué guarda la variable filas?",
      tabla: tabProductos6,
      codigo: ['cursor.execute("SELECT nombre FROM productos")', 'filas = cursor.fetchall()', 'print(filas)'],
      opciones: ['Una lista con las filas del resultado', 'Un solo texto con todo junto', 'Nada, execute ya lo muestra solo'],
      correcta: 0,
      feedback: [
        "¡Correcto! fetchall devuelve una lista con una entrada por cada fila. Como se pidió solo la columna nombre, tendrá los tres nombres. Y como ya sabes recorrer listas, puedes usar un for.",
        "Llega una lista, no un texto. Cada elemento de la lista es una fila del resultado.",
        "execute solo envía el pedido, no lo muestra. Para recibir las filas hay que pedirlas con fetchall, y para verlas, un print."
      ]
    },
    {
      explicacion: "💾 Cuando cambias datos (INSERT, UPDATE o DELETE), los cambios quedan en borrador hasta que los guardes con commit, como darle Guardar a un documento. Sin commit, se pierden al cerrar. ¿Qué falta?",
      codigo: [`cursor.execute("INSERT INTO productos VALUES (4, 'Jugo', 18)")`, 'conexion.___()'],
      opciones: ['commit', 'save', 'write'],
      correcta: 0,
      feedback: [
        "¡Correcto! commit confirma los cambios y los guarda de verdad en el archivo. Es un olvido muy común que deja a los programas 'sin recordar' nada.",
        "save suena lógico, pero el método de la conexión que guarda los cambios se llama commit.",
        "write sirve para escribir en archivos de texto. Para guardar cambios de una base de datos se usa commit."
      ]
    },
    {
      explicacion: "🛡️ MUY IMPORTANTE para un desarrollador: si pegas dentro de la consulta lo que escribió el usuario, alguien podría escribir comandos de SQL en vez de un nombre y hacer que tu base haga cosas que no debe. Se llama inyección SQL. La forma segura es usar el signo ? y pasar el dato aparte. ¿Cuál es la forma segura?",
      codigo: [],
      opciones: [
        `cursor.execute("SELECT * FROM productos WHERE nombre = ?", (nombre,))`,
        `cursor.execute("SELECT * FROM productos WHERE nombre = '" + nombre + "'")`,
        `cursor.execute(f"SELECT * FROM productos WHERE nombre = '{nombre}'")`
      ],
      correcta: 0,
      feedback: [
        "¡Excelente! El ? es un espacio reservado y el dato viaja aparte, así que SQLite lo trata solo como un dato, nunca como un comando. Es una de las prácticas de seguridad más importantes.",
        "Aquí el texto del usuario se pega directo en la consulta con +, y eso es justo lo que permite la inyección SQL. Nunca armes consultas pegando datos de usuarios.",
        "Los f-strings también pegan el dato dentro de la consulta, igual de inseguro. Y ojo: si una IA te da código así, no lo copies, es una señal de alerta."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔄 Este es el recorrido completo que hace Python con una base de datos: conectar, sacar un cursor, hacer el pedido, recibir las filas y cerrar. Ordena los bloques.",
      bloques: [
        'import sqlite3',
        'conexion = sqlite3.connect("tienda.db")',
        'cursor = conexion.cursor()',
        'cursor.execute("SELECT * FROM productos")',
        'filas = cursor.fetchall()',
        'conexion.close()'
      ],
      pista: "Primero se importa el módulo, luego se conecta, después se saca el cursor (el mesero), se hace el pedido, se reciben las filas y, al final, se cierra la conexión.",
      feedbackBien: "¡Perfecto! Ese es el esqueleto de casi cualquier programa que usa una base de datos: conectar, cursor, execute, fetchall y cerrar. Ya conoces cómo un backend guarda y recupera información: JSON llega, SQL lo guarda, Python lo recupera."
    }
  ]
});