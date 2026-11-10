agregarLeccion("python", {
  id: "py-10",
  titulo: "Leer y guardar archivos",
  ejercicios: [
    {
      explicacion: "📓 Un archivo es como una libreta: puedes escribir en ella y leerla después. Con open() la abres, y la forma más segura es with, que la cierra sola al terminar, como cerrar la libreta sin olvidarte. La letra 'w' significa escribir. Completa el código.",
      codigo: ['with ___("notas.txt", "w") as f:', '    f.write("Hola")'],
      opciones: ['open', 'file', 'read'],
      correcta: 0,
      feedback: [
        "¡Exacto! open abre el archivo y, con with, se cierra solo al terminar. Si no se cierra, a veces los datos no se guardan bien.",
        "file suena lógico, pero la función de Python para abrir archivos se llama open.",
        "read es una acción para leer, no para abrir. Primero hay que abrir el archivo con open."
      ]
    },
    {
      explicacion: "✏️ Los modos de open son: 'r' = leer, 'w' = escribir (BORRA lo que había) y 'a' = agregar al final sin borrar. Quieres añadir una línea a un diario sin perder lo anterior.",
      codigo: ['with open("diario.txt", "___") as f:', '    f.write("Otro dia")'],
      opciones: ['a', 'w', 'r'],
      correcta: 0,
      feedback: [
        "¡Correcto! 'a' viene de append (agregar). Escribe al final y conserva lo que ya estaba.",
        "Ojo: con 'w' el archivo se vacía antes de escribir. Perderías todo lo anterior del diario.",
        "'r' solo sirve para leer. Si intentas escribir con ese modo, Python marca un error."
      ]
    },
    {
      explicacion: "📖 Para leer, abres el archivo con 'r' y usas .read(), que te devuelve todo el texto. ¿Qué mostrará este código?",
      codigo: ['with open("nota.txt", "w") as f:', '    f.write("Hola")', 'with open("nota.txt", "r") as f:', '    print(f.read())'],
      opciones: ['Hola', 'nota.txt', 'Nada'],
      correcta: 0,
      feedback: [
        "¡Correcto! Primero se guarda Hola en la libreta y después se abre para leer y se muestra su contenido.",
        "nota.txt es el nombre del archivo, no lo que tiene adentro. f.read() devuelve el contenido.",
        "El archivo sí tiene contenido, porque la primera parte lo escribió. Al leerlo se muestra Hola."
      ]
    },
    {
      explicacion: "⚠️ La trampa de 'w': cada vez que abres con 'w', el archivo se BORRA y empieza vacío. ¿Qué mostrará este código?",
      codigo: ['with open("a.txt", "w") as f:', '    f.write("uno")', 'with open("a.txt", "w") as f:', '    f.write("dos")', 'with open("a.txt", "r") as f:', '    print(f.read())'],
      opciones: ['dos', 'uno', 'unodos'],
      correcta: 0,
      feedback: [
        "¡Exacto! La segunda apertura con 'w' borró el uno y escribió dos. Si hubieran querido conservar ambos, habría que usar 'a'.",
        "El uno se escribió primero, pero la segunda apertura con 'w' lo borró antes de escribir dos.",
        "Para que salieran juntos, la segunda apertura tendría que usar 'a'. Con 'w' siempre se empieza de cero."
      ]
    },
    {
      explicacion: "🕳️ Si intentas leer un archivo que no existe, Python da el error FileNotFoundError. Supón que fantasma.txt NO existe. ¿Qué mostrará este código?",
      codigo: ['try:', '    f = open("fantasma.txt", "r")', 'except FileNotFoundError:', '    print("No existe el archivo")'],
      opciones: ['No existe el archivo', 'Se rompe el programa', 'No muestra nada'],
      correcta: 0,
      feedback: [
        "¡Correcto! open falla con FileNotFoundError, y el except lo atrapa con su plan B. Aquí se une lo que aprendiste en la lección anterior.",
        "No se rompe, porque el except atrapa justamente ese tipo de error.",
        "Sí muestra algo: como el archivo no existe, ocurre el error y se activa el except con su mensaje."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "📝 Vas a guardar una tarea en un archivo y luego a leerla para comprobar que quedó guardada. Ordena los bloques. ¿Qué mostrará al final?",
      bloques: [
        'with open("tareas.txt", "w") as f:',
        '    f.write("estudiar")',
        'with open("tareas.txt", "r") as f:',
        '    print(f.read())'
      ],
      pista: "Primero hay que escribir y después leer: no puedes leer algo que todavía no guardaste. Cada with va seguido de su línea con sangría.",
      feedbackBien: "¡Perfecto! Primero abres en modo 'w' y guardas estudiar. Luego abres en modo 'r' y lo lees. Así es como un programa recuerda cosas aunque lo cierres, y es la idea que más adelante usan las bases de datos, pero con más orden y velocidad."
    }
  ]
});