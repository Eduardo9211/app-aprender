agregarLeccion("java", {
  id: "java-5",
  titulo: "Métodos",
  ejercicios: [
    {
      explicacion: "👩‍🍳 Un método es una receta con nombre, igual que las funciones de Python. Pero Java pide que declares qué entrega la receta: void significa 'no entrega nada, solo hace algo'. Completa el código.",
      codigo: ['public static ___ saludar() {', '    System.out.println("Hola");', '}'],
      opciones: ['void', 'null', 'empty'],
      correcta: 0,
      feedback: [
        "¡Correcto! void significa 'vacío': el método hace su trabajo (mostrar Hola) pero no devuelve ningún valor.",
        "null significa 'sin valor' en una variable, pero no se usa para declarar qué devuelve un método. Para eso es void.",
        "empty no es una palabra de Java para esto. Un método que no devuelve nada se declara con void."
      ]
    },
    {
      explicacion: "🥤 Si el método SÍ entrega un resultado, en vez de void escribes el tipo de lo que entrega (int, String...) y usas return. Los parámetros también llevan su tipo. Imagina que la última línea está dentro de main. ¿Qué mostrará este código?",
      codigo: ['public static int doble(int n) {', '    return n * 2;', '}', 'System.out.println(doble(5));'],
      opciones: ['10', '5', 'doble(5)'],
      correcta: 0,
      feedback: [
        "¡Correcto! El método recibe 5, lo multiplica por 2 y lo entrega con return. Ese 10 es lo que muestra println.",
        "El 5 es lo que entra al método, no lo que sale. El método devuelve n * 2, o sea 10.",
        "println no muestra el nombre del método, sino lo que devuelve. Java primero ejecuta doble(5), obtiene 10 y lo muestra."
      ]
    },
    {
      explicacion: "🏷️ En la primera línea de un método, la palabra antes del nombre dice QUÉ TIPO DE DATO devuelve. ¿Qué tipo devuelve este método?",
      codigo: ['public static String nombreCompleto(String n, String a) {', '    return n + " " + a;', '}'],
      opciones: ['String', 'int', 'void'],
      correcta: 0,
      feedback: [
        "¡Correcto! Devuelve un texto (n + espacio + a), por eso se declara String. Los String de adentro de los paréntesis son los tipos de los parámetros.",
        "int sería para devolver un número entero. Este método junta textos, así que devuelve un String.",
        "void significa que no devuelve nada, pero este método tiene un return con un texto."
      ]
    },
    {
      explicacion: "🐞 Java se niega a ejecutar este método. El mensaje dice: missing return statement (falta la instrucción return). ¿Cuál es el problema?",
      codigo: ['public static int cuadrado(int n) {', '    System.out.println(n * n);', '}'],
      opciones: ['Dice que devuelve un int, pero nunca hace return', 'Falta escribir void', 'n no es un nombre válido'],
      correcta: 0,
      feedback: [
        "¡Correcto! La primera línea promete entregar un int, pero el método solo muestra el resultado con println y no lo devuelve. Mostrar y devolver no es lo mismo, igual que en Python. Si solo querías mostrarlo, el tipo habría sido void.",
        "Con void el método no podría devolver nada, pero aquí la intención es devolver un int. Lo que falta es el return.",
        "n es un nombre válido para un parámetro. El problema está en que falta el return."
      ]
    },
    {
      explicacion: "🔗 Un método puede llamar a otro método. Sigue el orden de ejecución como si fueras Java. Imagina que la última línea está dentro de main. ¿Qué mostrará este código?",
      codigo: ['public static void a() {', '    System.out.println("1");', '}', 'public static void b() {', '    a();', '    System.out.println("2");', '}', 'b();'],
      opciones: ['1 y luego 2', '2 y luego 1', 'Solo 2'],
      correcta: 0,
      feedback: [
        "¡Correcto! b() empieza, su primera línea llama a a(), que muestra 1. Cuando a termina, b continúa con su siguiente línea y muestra 2.",
        "El 2 espera su turno: antes b debe terminar de ejecutar a(), que muestra 1. Java sigue el orden de las líneas.",
        "También se muestra el 1, porque b llama a a() antes de mostrar su propio 2."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔲 Vas a crear un método que calcule el cuadrado de un número, usarlo y mostrar el resultado. Ordena los bloques. Imagina que las dos últimas líneas están dentro de main. ¿Qué número se mostrará?",
      bloques: [
        'public static int cuadrado(int n) {',
        '    return n * n;',
        '}',
        'int resultado = cuadrado(4);',
        'System.out.println(resultado);'
      ],
      pista: "Primero se define el método completo: su primera línea, el return con sangría y la llave que cierra. Después se usa: se llama y se guarda el resultado, y al final se muestra.",
      feedbackBien: "¡Perfecto! Primero guardas la receta, luego la llamas con 4 y return entrega 16, que se guarda en resultado. Al final println lo muestra."
    }
  ]
});