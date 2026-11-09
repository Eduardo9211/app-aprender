agregarLeccion("python", {
  id: "py-5",
  titulo: "Ciclos con for",
  ejercicios: [
    {
      explicacion: "🔁 for sirve para REPETIR algo por cada elemento de una lista, como un maestro que pasa lista: para cada alumno, dice su nombre. Completa el código.",
      codigo: ['frutas = ["pera", "uva"]', '___ fruta in frutas:', '    print(fruta)'],
      opciones: ['for', 'loop', 'each'],
      correcta: 0,
      feedback: [
        "¡Exacto! for fruta in frutas se lee 'para cada fruta en frutas'. La palabra fruta es un nombre temporal: en cada vuelta guarda un elemento distinto de la lista.",
        "loop significa ciclo en inglés, pero Python no usa esa palabra. Su palabra para repetir por cada elemento es for.",
        "each existe en otros lenguajes, pero en Python se usa for. Python solo entiende sus palabras exactas."
      ]
    },
    {
      explicacion: "🔢 range(3) es una máquina que cuenta tres veces. Con for, lo que esté con sangría se repite una vez por cada número. ¿Qué mostrará este código?",
      codigo: ['for i in range(3):', '    print("Hola")'],
      opciones: ['Hola una vez', 'Hola tres veces', 'Hola cuatro veces'],
      correcta: 1,
      feedback: [
        "No. range(3) da tres números, y el for repite lo de adentro una vez por cada uno.",
        "¡Correcto! range(3) da tres vueltas, así que Hola aparece tres veces, cada una en su línea.",
        "Cuatro serían con range(4). Aquí el 3 dentro de range es justo la cantidad de vueltas."
      ]
    },
    {
      explicacion: "🎯 Ojo: range(3) no da 1, 2, 3. Da 0, 1, 2, porque Python cuenta desde cero, igual que en las listas. ¿Qué mostrará este código? (cada número en su propia línea)",
      codigo: ['for n in range(3):', '    print(n)'],
      opciones: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3'],
      correcta: 1,
      feedback: [
        "Es la trampa clásica. Parece lógico empezar en 1, pero range empieza en 0.",
        "¡Exacto! range(3) da tres números empezando en 0: 0, 1 y 2. Nunca llega al 3.",
        "range(3) da TRES números, no cuatro. Empieza en 0 y se detiene antes de llegar al 3, así que son 0, 1 y 2."
      ]
    },
    {
      explicacion: "🐞 Este código tiene un error. Python mostraría el mensaje 'expected an indented block', que significa 'esperaba una línea con sangría'. ¿Cuál es el problema?",
      codigo: ['for n in range(3):', 'print(n)'],
      opciones: ['print necesita sangría para quedar dentro del for', 'range no existe', 'Falta una coma'],
      correcta: 0,
      feedback: [
        "¡Bien! Lo que quieres repetir debe ir con sangría, un paso a la derecha. Sin sangría, Python no sabe qué línea pertenece al for.",
        "range sí existe. El problema es de forma: está en cómo está acomodada la segunda línea.",
        "No hace falta ninguna coma. El problema está en el espacio al inicio de la segunda línea."
      ]
    },
    {
      explicacion: "🧮 Un for puede ir juntando un resultado, como una alcancía donde cada vuelta echas una moneda. Fíjate bien en qué línea tiene sangría y cuál no. ¿Qué mostrará este código?",
      codigo: ['total = 0', 'for n in [1, 2, 3]:', '    total = total + n', 'print(total)'],
      opciones: ['6', '3', '123'],
      correcta: 0,
      feedback: [
        "¡Correcto! Vuelta 1: 0 + 1 = 1. Vuelta 2: 1 + 2 = 3. Vuelta 3: 3 + 3 = 6. Y el print no tiene sangría, así que se ejecuta una sola vez, al final.",
        "3 sería el total después de la segunda vuelta. Pero el for da una vuelta más, la del 3, y el total llega a 6.",
        "Eso sería pegar textos. Aquí son números, y el + los suma en vez de pegarlos."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "➕ Quieres sumar los números 1, 2 y 3. Ordena los bloques. Ojo: range(1, 4) empieza en 1 y se detiene antes de llegar al 4. ¿Qué mostrará al final?",
      bloques: [
        'suma = 0',
        'for n in range(1, 4):',
        '    suma = suma + n',
        'print(suma)'
      ],
      pista: "Primero hay que crear la alcancía suma, antes del ciclo. El for va después, con su línea con sangría debajo. Y el print va hasta el final, sin sangría, para mostrar el resultado una sola vez.",
      feedbackBien: "¡Perfecto! Primero creas suma en 0. Luego el for da tres vueltas (1, 2 y 3) y va sumando. Al final, el print muestra 6."
    }
  ]
});