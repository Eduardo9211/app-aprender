agregarLeccion("java", {
  id: "java-2",
  titulo: "Variables y tipos",
  ejercicios: [
    {
      explicacion: "📦 En Python guardabas cualquier cosa en una caja. En Java cada caja tiene FORMA: una para números enteros (int), una para textos (String), una para decimales (double). Hay que decir el tipo al crearla. Completa el código.",
      codigo: ['___ edad = 20;'],
      opciones: ['int', 'number', 'integer'],
      correcta: 0,
      feedback: [
        "¡Correcto! int guarda números enteros, sin decimales. La caja se llama edad y adentro guarda 20.",
        "number existe en otros lenguajes, pero en Java los enteros se declaran con int.",
        "integer significa entero en inglés, pero la palabra reservada de Java es int, abreviada."
      ]
    },
    {
      explicacion: "🔤 Para los textos, el tipo se llama String, con la S MAYÚSCULA. Es un detalle que da muchos errores, porque Java distingue mayúsculas de minúsculas. Completa el código.",
      codigo: ['___ nombre = "Ana";'],
      opciones: ['String', 'string', 'text'],
      correcta: 0,
      feedback: [
        "¡Correcto! String empieza con mayúscula, porque es un tipo especial de Java. Y el texto va con comillas dobles.",
        "Casi. Java distingue mayúsculas de minúsculas, y String debe empezar con S mayúscula.",
        "text no es un tipo de Java. Para los textos se usa String, con mayúscula."
      ]
    },
    {
      explicacion: "🔢 Si el número tiene decimales, la caja int ya no sirve: hay que usar double. ¿Qué tipo va aquí?",
      codigo: ['___ pi = 3.14;'],
      opciones: ['double', 'int', 'String'],
      correcta: 0,
      feedback: [
        "¡Correcto! double guarda números con decimales.",
        "int solo guarda enteros. Si intentas meter 3.14, Java marca un error para no perder los decimales.",
        "String es para textos. 3.14 es un número, y como tiene decimales, necesita double."
      ]
    },
    {
      explicacion: "🐞 Java revisa los tipos ANTES de ejecutar el programa. Esta línea no pasa la revisión. ¿Cuál es el problema?",
      codigo: ['int edad = "veinte";'],
      opciones: ['Una caja int no puede guardar un texto', 'Falta el punto y coma', 'edad es una palabra reservada'],
      correcta: 0,
      feedback: [
        "¡Correcto! La caja es de tipo int (números enteros) y le estás metiendo un texto. Java lo detecta antes de ejecutar y no deja pasar el programa. Esa estrictez evita errores.",
        "El punto y coma está al final, no falta. El problema es que el tipo y el valor no coinciden.",
        "edad no es una palabra reservada de Java. El problema es que no puedes guardar un texto en una caja int."
      ]
    },
    {
      explicacion: "🪤 Trampa clásica: cuando divides DOS enteros, Java también responde con un entero y descarta los decimales. ¿Qué mostrará este código?",
      codigo: ['int a = 5;', 'int b = 2;', 'System.out.println(a / b);'],
      opciones: ['2', '2.5', '3'],
      correcta: 0,
      feedback: [
        "¡Excelente! 5 entre 2 es 2.5, pero como las dos cajas son int, Java corta los decimales y se queda con 2. Para obtener 2.5 habría que usar double.",
        "En Python 5 / 2 da 2.5, pero en Java, dividir dos enteros da un entero. Los decimales se descartan.",
        "Java no redondea hacia arriba: corta los decimales. 2.5 se convierte en 2, no en 3."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🛒 Un producto cuesta 50 y compras 2. Calcula el total y muéstralo. Ordena los bloques. ¿Qué número se mostrará?",
      bloques: [
        'int precio = 50;',
        'int total = precio * 2;',
        'System.out.println(total);'
      ],
      pista: "No puedes usar una variable antes de crearla. Primero se crea precio, luego total (que usa precio) y al final se muestra.",
      feedbackBien: "¡Perfecto! Primero se crea precio con 50, luego total calcula 50 * 2 y vale 100, y al final se muestra 100. Igual que en Python, de arriba hacia abajo, pero con el tipo declarado."
    }
  ]
});