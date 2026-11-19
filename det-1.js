agregarLeccion("detective", {
  id: "det-1",
  titulo: "Leer mensajes de error",
  ejercicios: [
    {
      explicacion: "🕵️ Un mensaje de error no es un regaño: es una PISTA. Te dice qué falló y dónde. Lee este caso. El mensaje dice: NameError: name 'Nombre' is not defined. ¿Cuál es la causa?",
      codigo: ['nombre = "Ana"', 'print(Nombre)'],
      opciones: ['Python distingue mayúsculas: nombre y Nombre son cajas distintas', 'Falta un print', 'Las comillas están mal'],
      correcta: 0,
      feedback: [
        "¡Correcto! Se guardó Ana en la caja nombre (con n minúscula) pero se pide la caja Nombre (con N mayúscula), que no existe. 'is not defined' significa 'no está definido'. Un error clásico.",
        "El print está bien escrito. El mensaje habla de un nombre que no está definido, o sea, una caja que Python no encuentra.",
        "Las comillas están bien: Ana es un texto. El problema está en el nombre de la caja que se pide."
      ]
    },
    {
      explicacion: "📜 Los mensajes de error de Python son largos y asustan, pero tienen un truco: la ÚLTIMA línea dice el tipo de error y su causa, y las líneas de arriba te llevan hasta el punto exacto donde ocurrió. ¿Por dónde conviene empezar a leer?",
      codigo: [],
      opciones: ['Por la última línea del mensaje', 'Por la primera línea', 'Por el nombre de tu archivo'],
      correcta: 0,
      feedback: [
        "¡Correcto! La última línea te dice qué pasó (por ejemplo, NameError o KeyError). Con eso entiendes el problema, y las líneas de arriba te dicen en qué archivo y línea ocurrió.",
        "La primera línea suele ser solo un encabezado del recorrido. La información más importante está al final.",
        "El nombre del archivo ayuda a ubicar el lugar, pero primero hay que entender qué error es. Eso lo dice la última línea."
      ]
    },
    {
      explicacion: "🌐 Subiste tu app a internet y no se actualiza. Abres la consola del navegador y aparece: Failed to load resource: 404 sql-7.js. Es un caso real, como el que viviste tú. ¿Qué significa?",
      codigo: [],
      opciones: ['Ese archivo no existe en el servidor: hay que subirlo', 'El código de sql-7.js tiene un error de sintaxis', 'Tu internet está lento'],
      correcta: 0,
      feedback: [
        "¡Correcto! 404 significa 'no encontrado', el mismo código que viste en la lección de APIs. La página pide un archivo que no está en el servidor. Y como tu sw.js lo tenía en su lista, la instalación completa fallaba.",
        "Un error de sintaxis aparecería con otro mensaje (como SyntaxError). El 404 es más simple: el archivo ni siquiera está.",
        "Un internet lento tardaría en cargar, pero no daría un 404. Ese código dice que el servidor respondió: 'eso no existe aquí'."
      ]
    },
    {
      explicacion: "🧳 Cambiaste tu código y lo subiste, pero en tu celular se sigue viendo la versión vieja. No aparece ningún error. ¿Cuál es la causa más probable?",
      codigo: [],
      opciones: ['Se está mostrando una copia guardada (caché) en lugar de la nueva', 'El código nuevo tiene una coma de más', 'GitHub borró tus archivos'],
      correcta: 0,
      feedback: [
        "¡Correcto! Si el código nuevo estuviera roto, verías un error. Cuando no hay error pero el cambio no aparece, casi siempre es una copia vieja guardada (caché). Por eso los profesionales cambian la versión del caché cada vez que actualizan.",
        "Una coma de más rompería el código y mostraría un error. Aquí no hay error, solo una versión que no cambia.",
        "Si GitHub hubiera borrado los archivos, la app no cargaría nada. Lo que ves es la versión anterior, que sí existe, guardada en el celular."
      ]
    },
    {
      explicacion: "🤖 Le pides a una IA un programa y te da una solución que parece perfecta. ¿Qué es lo más inteligente antes de usarla?",
      codigo: [],
      opciones: ['Probarla con casos que ya conoces, incluidos casos raros como vacíos o ceros', 'Copiarla directo: la IA no se equivoca', 'Usarla solo si el código es largo'],
      correcta: 0,
      feedback: [
        "¡Correcto! Probar con casos que conoces la respuesta (y con los raros: listas vacías, cero, textos vacíos) es la mejor forma de descubrir si funciona de verdad. Leer y entender el código también ayuda. Una IA puede ser una gran ayuda, pero la responsabilidad de verificar es tuya.",
        "Las IA también cometen errores, a veces con mucha seguridad. Copiar sin probar es riesgoso, sobre todo en cosas como bases de datos o seguridad.",
        "La longitud no dice nada sobre si es correcto. Un código corto puede estar mal y uno largo puede estar bien. Lo que importa es probarlo."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔧 Tienes un error que no entiendes. Un buen detective sigue un método. Ordena los pasos para depurar un problema, del primero al último.",
      bloques: [
        '1. Leer el mensaje de error completo',
        '2. Ubicar el archivo y la línea que menciona',
        '3. Cambiar una sola cosa a la vez',
        '4. Probar de nuevo y ver si el error cambió'
      ],
      pista: "Primero entiendes qué dice el error, luego buscas dónde ocurre, después haces un cambio pequeño y al final pruebas el resultado.",
      feedbackBien: "¡Perfecto! Cambiar una sola cosa a la vez es la clave: si cambias cinco cosas y el error desaparece, no sabrás cuál lo arregló. Y si aparece otro error distinto, también es progreso, porque ya avanzaste a otro problema."
    }
  ]
});