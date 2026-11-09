agregarLeccion("python", {
  id: "py-6",
  titulo: "Ciclos con while",
  ejercicios: [
    {
      explicacion: "🥛 while significa MIENTRAS. Es como llenar un vaso: mientras no esté lleno, sigue echando agua. Se repite mientras la pregunta sea cierta. Completa el código.",
      codigo: ['vaso = 0', '___ vaso < 3:', '    vaso = vaso + 1'],
      opciones: ['while', 'for', 'if'],
      correcta: 0,
      feedback: [
        "¡Exacto! while vaso < 3 se lee 'mientras vaso sea menor que 3'. Python vuelve a preguntar antes de cada vuelta.",
        "for recorre los elementos de una lista o cuenta con range. Aquí no hay lista: se repite mientras una condición siga cierta, y eso es while.",
        "if pregunta UNA sola vez y sigue. No repite nada. Para repetir mientras algo sea cierto, usa while."
      ]
    },
    {
      explicacion: "🔄 Antes de cada vuelta, while hace la pregunta. Si la respuesta es sí, repite lo de adentro. Si es no, se detiene. ¿Qué mostrará este código? (cada número en su línea)",
      codigo: ['n = 1', 'while n <= 3:', '    print(n)', '    n = n + 1'],
      opciones: ['1, 2, 3', '1, 2', '1, 2, 3, 4'],
      correcta: 0,
      feedback: [
        "¡Correcto! Con n en 1, 2 y 3 la pregunta n <= 3 es cierta y se muestra. Cuando n llega a 4, la respuesta es no y se detiene.",
        "Casi. Cuando n vale 3, la pregunta n <= 3 sigue siendo cierta (el símbolo <= incluye el 3), así que el 3 también se muestra.",
        "El 4 no se muestra: cuando n llega a 4, la pregunta n <= 3 es falsa y el ciclo se detiene antes de imprimirlo."
      ]
    },
    {
      explicacion: "♾️ Peligro: si nada dentro del while cambia lo que pregunta, la respuesta nunca cambia y el ciclo NO TERMINA jamás. Se llama ciclo infinito. ¿Qué pasa con este código?",
      codigo: ['n = 1', 'while n <= 3:', '    print(n)'],
      opciones: ['Muestra 1 para siempre', 'Muestra 1, 2, 3', 'Muestra 1 una vez'],
      correcta: 0,
      feedback: [
        "¡Correcto! n siempre vale 1, así que la pregunta n <= 3 siempre es cierta y Python nunca para. Si te pasa en tu compu, se detiene con Ctrl + C. La solución es cambiar n dentro del ciclo.",
        "Para llegar a 2 y 3, algo tendría que sumarle a n. Aquí nadie lo hace, así que n se queda en 1.",
        "while no es como if: no pregunta una sola vez, repite mientras la respuesta sea cierta. Y aquí siempre lo es."
      ]
    },
    {
      explicacion: "🧠 Sigue el código como si fueras Python, vuelta por vuelta. Fíjate qué líneas tienen sangría y cuáles no. ¿Qué mostrará?",
      codigo: ['veces = 0', 'while veces < 4:', '    veces = veces + 1', 'print(veces)'],
      opciones: ['4', '1, 2, 3, 4', '3'],
      correcta: 0,
      feedback: [
        "¡Exacto! El ciclo sube veces de 0 a 4 sin mostrar nada. El print no tiene sangría, así que está fuera del ciclo y se ejecuta una sola vez al final.",
        "Eso pasaría si el print estuviera dentro del while. Pero no tiene sangría: está afuera y solo se ejecuta cuando el ciclo termina.",
        "El ciclo se detiene cuando veces llega a 4, no antes. La última vuelta sube de 3 a 4 y ahí se rompe la condición."
      ]
    },
    {
      explicacion: "🤔 Hay que elegir bien la herramienta. Sabes que quieres escribir Hola exactamente 5 veces. ¿Cuál es la forma más natural?",
      codigo: [],
      opciones: ['for i in range(5):', 'while True:', 'if 5:'],
      correcta: 0,
      feedback: [
        "¡Bien! Cuando sabes cuántas veces, for con range es lo más limpio. Reserva while para cuando no sabes cuántas vueltas habrá, solo que repites hasta que algo cambie.",
        "while True significa 'mientras sea verdad', y True siempre lo es: sería un ciclo infinito. No es lo que queremos.",
        "if no repite nada, solo pregunta una vez. Para repetir se necesita for o while."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🏃 Un corredor tiene 3 de energía. Mientras tenga energía, corre y gasta 1. Cuando se acaba, descansa. Ordena los bloques. ¿Cuántas veces se muestra Corriendo?",
      bloques: [
        'energia = 3',
        'while energia > 0:',
        '    print("Corriendo")',
        '    energia = energia - 1',
        'print("Descansa")'
      ],
      pista: "Primero se crea energia. Luego va el while, y las dos líneas con sangría van adentro: correr y gastar energía. El print de Descansa va al final, sin sangría, porque solo debe pasar cuando termina el ciclo.",
      feedbackBien: "¡Perfecto! Corriendo se muestra 3 veces: con energía 3, 2 y 1. Cuando llega a 0, el while se detiene y recién ahí aparece Descansa. La línea que resta energía es la que evita el ciclo infinito."
    }
  ]
});