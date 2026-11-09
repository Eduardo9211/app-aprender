agregarLeccion("python", {
  id: "py-7",
  titulo: "Funciones",
  ejercicios: [
    {
      explicacion: "👩‍🍳 Una función es una RECETA guardada con un nombre. La escribes una vez y la usas cuantas veces quieras. Se crea con la palabra def (de definir). Completa el código.",
      codigo: ['___ saludar():', '    print("Hola")', 'saludar()'],
      opciones: ['def', 'function', 'fun'],
      correcta: 0,
      feedback: [
        "¡Exacto! def le dice a Python: 'voy a guardar una receta con este nombre'. Los paréntesis y los dos puntos son obligatorios.",
        "function se usa en JavaScript, el lenguaje de tu app, pero en Python se usa def.",
        "fun se usa en otros lenguajes. En Python, para crear una función, siempre se usa def."
      ]
    },
    {
      explicacion: "🍳 Escribir la receta NO es cocinarla. Con def solo guardas la receta; para ejecutarla hay que llamarla por su nombre. ¿Qué mostrará este código?",
      codigo: ['def saludar():', '    print("Hola")'],
      opciones: ['Hola', 'Nada', 'Error'],
      correcta: 1,
      feedback: [
        "No. Solo escribiste la receta, pero nunca la cocinaste. Falta una línea que diga saludar() para ejecutarla.",
        "¡Correcto! def solo guarda la función. No se ejecuta hasta que la llames con su nombre y paréntesis: saludar().",
        "El código está bien escrito, así que no hay error. Simplemente no se ejecuta nada, porque nadie llamó a la función."
      ]
    },
    {
      explicacion: "🥣 Las recetas pueden recibir ingredientes. Se llaman parámetros: van entre los paréntesis y funcionan como cajas que se llenan cuando llamas a la función. ¿Qué mostrará este código?",
      codigo: ['def saludar(nombre):', '    print("Hola " + nombre)', 'saludar("Luis")'],
      opciones: ['Hola Luis', 'Hola nombre', 'Error'],
      correcta: 0,
      feedback: [
        "¡Correcto! Al llamar saludar(\"Luis\"), la caja nombre se llena con Luis, y el + pega los textos.",
        "nombre no tiene comillas, así que no es texto: es la caja del parámetro. Python la reemplaza por lo que le pasaste, que es Luis.",
        "No hay error: al llamar a la función le pasaste un valor para el parámetro, y todo está bien escrito."
      ]
    },
    {
      explicacion: "🥤 Una función también puede ENTREGAR un resultado, como una licuadora que te devuelve el jugo. Eso se hace con return. ¿Qué mostrará este código?",
      codigo: ['def doble(n):', '    return n * 2', 'print(doble(5))'],
      opciones: ['10', '5', 'doble(5)'],
      correcta: 0,
      feedback: [
        "¡Correcto! La función recibe 5, lo multiplica por 2 y lo devuelve con return. Ese 10 es el que recibe el print.",
        "El 5 es lo que entra, no lo que sale. La función lo multiplica por 2 y devuelve ese resultado.",
        "print no muestra el nombre de la función, muestra lo que devuelve. Python primero ejecuta doble(5), obtiene 10 y entonces lo muestra."
      ]
    },
    {
      explicacion: "🕵️ Cuidado, esta es la trampa que más confunde. print MUESTRA algo en pantalla, pero no lo entrega. return ENTREGA el resultado. Una función sin return entrega None, que significa nada. ¿Qué mostrará este código?",
      codigo: ['def suma(a, b):', '    print(a + b)', 'resultado = suma(2, 3)', 'print(resultado)'],
      opciones: ['5 y luego None', 'Solo 5', '5 y luego 5'],
      correcta: 0,
      feedback: [
        "¡Excelente! Al llamar a suma, el print de adentro muestra 5. Pero la función no tiene return, así que entrega None, y eso es lo que se guarda en resultado y se muestra al final.",
        "Se muestra el 5 de adentro de la función, pero también hay un print(resultado) al final, y resultado guarda None.",
        "El segundo valor no es 5. Para que resultado guardara 5, la función tendría que usar return a + b en vez de print."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔲 Vas a crear una función que calcule el cuadrado de un número y la vas a usar. Ordena los bloques. ¿Qué mostrará al final?",
      bloques: [
        'def cuadrado(n):',
        '    return n * n',
        'resultado = cuadrado(4)',
        'print(resultado)'
      ],
      pista: "La receta se define primero: def y, justo debajo con sangría, su return. Solo después se puede llamar a la función, guardar su resultado y mostrarlo.",
      feedbackBien: "¡Perfecto! Primero guardas la receta. Luego la llamas con 4 y return entrega 16, que se guarda en resultado. Al final, print lo muestra."
    }
  ]
});