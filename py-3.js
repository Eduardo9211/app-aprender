agregarLeccion("python", {
  id: "py-3",
  titulo: "Decisiones con if / else",
  ejercicios: [
    {
      explicacion: "🚦 if significa SI. Es como un semáforo: SI la luz está verde, avanzas. Con if le enseñas a Python a tomar decisiones. Completa la pregunta.",
      codigo: ['luz = "verde"', '___ luz == "verde":', '    print("Avanza")'],
      opciones: ['if', 'si', 'when'],
      correcta: 0,
      feedback: [
        "¡Exacto! if es la palabra de Python para decir SI. Python pregunta: ¿la luz es verde? Si la respuesta es sí, ejecuta lo que está debajo.",
        "Es lógico, pero Python no habla español. Solo entiende sus palabras exactas, y para SI usa if.",
        "when existe en otros lenguajes, pero en Python no sirve para esto. La palabra correcta para SI es if."
      ]
    },
    {
      explicacion: "⚖️ Un signo = GUARDA algo en una caja. Dos signos == PREGUNTAN si dos cosas son iguales. Aquí queremos preguntar, no guardar.",
      codigo: ['pasos = 10', 'if pasos ___ 10:', '    print("Meta lograda")'],
      opciones: ['==', '=', '!='],
      correcta: 0,
      feedback: [
        "¡Bien! == es la pregunta: ¿pasos es igual a 10? Como sí lo es, se muestra Meta lograda.",
        "Con un solo = Python cree que quieres GUARDAR el 10 en la caja, y dentro de un if eso es un error. Para preguntar si son iguales se usan DOS signos: ==.",
        "!= significa 'es diferente de'. La pregunta sería: ¿pasos es distinto de 10? Como pasos vale 10, la respuesta sería no y no se mostraría nada."
      ]
    },
    {
      explicacion: "🐞 Este código tiene un error y Python ni siquiera lo va a ejecutar. ¿Cuál es el problema?",
      codigo: ['edad = 20', 'if edad > 18', '    print("Mayor de edad")'],
      opciones: ['Falta el : al final del if', 'Falta otro print al final', 'La edad no puede ser 20'],
      correcta: 0,
      feedback: [
        "¡Encontraste el bug! Los dos puntos : al final del if son como decir 'y entonces...'. Le avisan a Python que lo que sigue es lo que debe hacer si la pregunta es cierta. Sin ellos, Python se confunde.",
        "No hace falta ningún print más. El problema está en la línea del if: le falta algo al final de esa línea.",
        "20 es un número perfectamente válido. El problema no son los datos, sino cómo está escrita la línea del if."
      ]
    },
    {
      explicacion: "📏 Las líneas que dependen del if llevan SANGRÍA (un paso a la derecha). Las que no tienen sangría se ejecutan SIEMPRE. ¿Qué mostrará este código?",
      codigo: ['temperatura = 30', 'if temperatura > 25:', '    print("Hace calor")', 'print("Fin")'],
      opciones: ['Hace calor y luego Fin', 'Solo Hace calor', 'Solo Fin'],
      correcta: 0,
      feedback: [
        "¡Correcto! 30 es mayor que 25, así que se muestra Hace calor. Y como print Fin no tiene sangría, no depende del if: se ejecuta siempre.",
        "Casi. Hace calor sí se muestra, pero fíjate en la última línea: no tiene sangría, así que no depende del if y se ejecuta siempre.",
        "Fin sí se muestra, pero no es lo único. 30 es mayor que 25, así que la pregunta del if es cierta y también se ejecuta lo que está con sangría debajo."
      ]
    },
    {
      explicacion: "🔀 else significa SI NO. Es el plan B: si la pregunta del if no se cumple, Python hace lo de else. ¿Qué mostrará este código?",
      codigo: ['hora = 22', 'if hora < 20:', '    print("Es de día")', 'else:', '    print("Es de noche")'],
      opciones: ['Es de día', 'Es de noche', 'Las dos frases'],
      correcta: 1,
      feedback: [
        "No. La pregunta es: ¿22 es menor que 20? No lo es, así que Python se salta el if y no muestra Es de día.",
        "¡Exacto! 22 no es menor que 20, entonces se activa el plan B (else) y se muestra Es de noche.",
        "Nunca se ejecutan las dos. if y else son caminos opuestos, como una bifurcación: Python toma uno u otro, no ambos."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "💳 Quieres comprar algo que cuesta 100 pesos. Armas el programa que revisa si te alcanza. Ojo con la sangría: cada línea con sangría va justo debajo de lo que la controla. ¿Qué mostrará al final?",
      bloques: [
        'saldo = 50',
        'if saldo >= 100:',
        '    print("Puedes comprar")',
        'else:',
        '    print("Te falta dinero")'
      ],
      pista: "Primero se crea la caja saldo. Luego va la pregunta if con su resultado debajo, con sangría. Después el plan B: else con su resultado debajo, también con sangría.",
      feedbackBien: "¡Perfecto! Primero guardas el saldo. Luego preguntas: ¿50 es mayor o igual a 100? No, así que Python salta al else y muestra Te falta dinero. El símbolo >= significa 'mayor o igual que'."
    }
  ]
});