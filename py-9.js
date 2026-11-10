agregarLeccion("python", {
  id: "py-9",
  titulo: "Errores con try / except",
  ejercicios: [
    {
      explicacion: "🎪 Un acróbata trabaja con una red de seguridad: si se cae, la red lo atrapa y el show sigue. try / except hace lo mismo: intenta algo (try) y, si falla, ejecuta un plan B (except) en vez de romper todo el programa. Completa el código.",
      codigo: ['try:', '    print(10 / 0)', '___ ZeroDivisionError:', '    print("No se puede dividir entre cero")'],
      opciones: ['except', 'catch', 'error'],
      correcta: 0,
      feedback: [
        "¡Exacto! except significa 'excepto si pasa esto'. ZeroDivisionError es el nombre del error que Python da al dividir entre cero, y el except lo atrapa.",
        "catch se usa en JavaScript y en Java, pero en Python la palabra es except.",
        "error no es una palabra reservada de Python para esto. La que atrapa errores es except."
      ]
    },
    {
      explicacion: "🔍 Python ejecuta el try línea por línea. Lo que se alcanzó a ejecutar ANTES del fallo ya ocurrió, y después salta al except. ¿Qué mostrará este código?",
      codigo: ['try:', '    print("A")', '    print(int("hola"))', 'except ValueError:', '    print("B")'],
      opciones: ['A y luego B', 'Solo A', 'Solo B'],
      correcta: 0,
      feedback: [
        "¡Correcto! El primer print muestra A sin problema. En la segunda línea, int('hola') falla con ValueError (no se puede convertir 'hola' en número), y Python salta al except y muestra B.",
        "Casi. A sí se muestra, pero después falla int('hola') y se activa el except, que muestra B.",
        "A se muestra primero, porque esa línea se ejecutó antes del fallo. El código del try no se deshace cuando algo falla después."
      ]
    },
    {
      explicacion: "😌 Si todo sale bien dentro del try, el except se ignora por completo. ¿Qué mostrará este código?",
      codigo: ['try:', '    print("Todo bien")', 'except ValueError:', '    print("Fallo")'],
      opciones: ['Solo Todo bien', 'Todo bien y Fallo', 'Solo Fallo'],
      correcta: 0,
      feedback: [
        "¡Correcto! No hubo ningún error, así que Python se salta el except. El plan B solo se usa si algo falla.",
        "El except no es una segunda parte que siempre se ejecute. Solo se activa si hay un error dentro del try.",
        "Como no hubo error, nunca se llega al except. Lo que se muestra es lo del try."
      ]
    },
    {
      explicacion: "🐞 Este código tiene un error de escritura y Python ni siquiera lo va a ejecutar. ¿Cuál es el problema?",
      codigo: ['print(5)', 'except ValueError:', '    print("Error")'],
      opciones: ['except necesita un try antes', 'Falta una coma', 'ValueError no existe'],
      correcta: 0,
      feedback: [
        "¡Bien! except no puede ir solo: es la segunda mitad de una pareja. Primero va el try con lo que quieres intentar, y después el except con el plan B.",
        "No hace falta ninguna coma. El problema está en que except aparece sin un try antes.",
        "ValueError sí existe en Python. El problema es la estructura: except no puede ir sin su try."
      ]
    },
    {
      explicacion: "🎯 Cada except atrapa un tipo de error específico. Si el error que ocurre es de otro tipo, la red no lo atrapa y el programa se rompe igual. ¿Qué pasará con este código?",
      codigo: ['try:', '    print(int("hola"))', 'except ZeroDivisionError:', '    print("Cero")'],
      opciones: ['Se rompe con un ValueError', 'Muestra Cero', 'No muestra nada y sigue'],
      correcta: 0,
      feedback: [
        "¡Excelente! int('hola') da ValueError, pero el except solo atrapa ZeroDivisionError. Son errores distintos, así que el programa se rompe. Por eso hay que atrapar el tipo de error correcto.",
        "Cero es para el error de dividir entre cero, y aquí el error es otro: convertir 'hola' en número. Ese except no lo atrapa.",
        "Si el error no se atrapa, no se ignora: el programa se detiene y Python muestra el error."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🔢 Quieres convertir un texto en número y avisar con un mensaje si no se puede. Ordena los bloques. ¿Qué mostrará al final?",
      bloques: [
        'try:',
        '    numero = int("abc")',
        'except ValueError:',
        '    print("Eso no es un número")'
      ],
      pista: "Primero va try: con lo que quieres intentar, con sangría. Después va el except, que debe quedar alineado con el try, sin sangría, seguido de su plan B con sangría.",
      feedbackBien: "¡Perfecto! Python intenta convertir 'abc' en número, falla con ValueError y salta al except. Un consejo de desarrollador: nunca uses un except vacío que atrape todo sin decir qué. Esconde los errores en vez de resolverlos, y es algo que el código de una IA a veces hace. Siempre revisa qué error atrapa."
    }
  ]
});