const modulos = [
  {
    id: "python",
    nombre: "Python",
    icono: "🐍",
    disponible: true,
    lecciones: [
      {
        id: "py-1",
        titulo: "Variables y print",
        ejercicios: [
          {
            explicacion: "📦 Una variable es una CAJA con una etiqueta. La etiqueta es el nombre y adentro guardas algo. Completa el código para guardar el nombre Ana.",
            codigo: ['nombre = ___', 'print(nombre)'],
            opciones: ['"Ana"', 'Ana', 'caja'],
            correcta: 0,
            feedback: [
              "¡Bien! Las comillas le dicen a Python: 'esto es TEXTO, guárdalo tal cual'. Ahora la caja 'nombre' tiene adentro la palabra Ana.",
              "Casi. Sin comillas, Python cree que Ana es OTRA caja y no la encuentra. Los textos siempre van entre comillas.",
              "Ojo: 'caja' tampoco tiene comillas, así que Python la busca como si fuera una caja y no existe. Además, nosotros queremos guardar Ana, no la palabra caja."
            ]
          },
          {
            explicacion: "🖨️ print() es como un altavoz: lo que pongas adentro, Python lo muestra en pantalla. ¿Cuál línea mostraría el texto Hola?",
            codigo: ['___'],
            opciones: ['print("Hola")', 'print Hola', 'imprimir("Hola")'],
            correcta: 0,
            feedback: [
              "¡Exacto! La palabra print, paréntesis y el texto entre comillas adentro.",
              "Falta algo importante: los paréntesis. print es una orden y los paréntesis son sus 'manos' para recibir lo que va a mostrar.",
              "Python no habla español: su altavoz se llama print, no imprimir. Hay que usar las palabras exactas que Python conoce."
            ]
          },
          {
            tipo: "ordenar",
            explicacion: "🍳 Python lee tu código de ARRIBA hacia ABAJO, como una receta de cocina: primero los ingredientes, luego la mezcla, al final se sirve. Ordena los bloques para saludar a Ana.",
            bloques: [
              'nombre = "Ana"',
              'saludo = "Hola " + nombre',
              'print(saludo)'
            ],
            pista: "Piensa en la receta: no puedes usar un ingrediente que todavía no sacaste. Cada línea solo puede usar cajas que ya fueron creadas más arriba.",
            feedbackBien: "¡Perfecto! Primero creas la caja nombre. Luego creas la caja saludo, que usa nombre (por eso nombre debe existir antes). Y al final lo muestras con print. Cada línea se apoya en la anterior."
          }
        ]
      },
      {
        id: "py-2",
        titulo: "Números y operaciones",
        ejercicios: [
          {
            explicacion: "🪙 Los números son como MONEDAS: puedes sumarlas, restarlas y multiplicarlas. Y no llevan comillas. Completa para guardar 5 monedas.",
            codigo: ['monedas = ___', 'print(monedas + 2)'],
            opciones: ['5', '"5"', 'cinco'],
            correcta: 0,
            feedback: [
              "¡Bien! 5 sin comillas es un NÚMERO de verdad, así que Python puede sumarle 2 y mostrar 7.",
              "Con comillas, '5' es TEXTO, como la palabra escrita en un papelito. Sumar un papelito con 2 monedas no tiene sentido y Python te marca un error. Los números van SIN comillas.",
              "Python no entiende palabras en español como números. Cree que cinco es el nombre de otra caja y no la encuentra. Escribe el dígito: 5."
            ]
          },
          {
            explicacion: "✖️ En Python cada operación tiene su símbolo: + suma, - resta, * multiplica y / divide. Queremos que salga 12.",
            codigo: ['print(3 ___ 4)'],
            opciones: ['*', 'x', '+'],
            correcta: 0,
            feedback: [
              "¡Exacto! El asterisco * es el símbolo de multiplicar en Python. 3 * 4 da 12.",
              "La x parece lógica, pero Python la lee como una letra, o sea, como el nombre de una caja. Para multiplicar se usa el asterisco *.",
              "El + suma: 3 + 4 da 7, no 12. Aquí queremos multiplicar."
            ]
          },
          {
            explicacion: "🔎 Ojo con las comillas: '2' con comillas es TEXTO, no un número. Y con texto, el + no suma: PEGA. ¿Qué mostrará este código?",
            codigo: ['print("2" + "3")'],
            opciones: ['5', '23', 'Error'],
            correcta: 1,
            feedback: [
              "No. Las comillas convierten el 2 y el 3 en texto, y el + entre textos no suma: pega. Para sumar de verdad tendrían que ser números sin comillas.",
              "¡Correcto! Es como pegar dos papelitos: el que dice 2 y el que dice 3 quedan juntos y forman 23.",
              "Pegar texto con texto usando + sí se puede, no da error. El error aparecería si mezclaras texto con un número, como '2' + 3."
            ]
          },
          {
            tipo: "ordenar",
            explicacion: "🍎 En la tienda cada manzana cuesta 2 pesos y llevas 4 manzanas. Ordena los bloques para calcular cuánto pagas.",
            bloques: [
              'manzanas = 4',
              'total = manzanas * 2',
              'print(total)'
            ],
            pista: "Para multiplicar manzanas necesitas que la caja manzanas ya exista. Y para mostrar total, esa caja también tiene que estar creada antes. Primero creas, luego usas.",
            feedbackBien: "¡Perfecto! Primero guardas 4 en la caja manzanas. Luego calculas total (4 * 2) y lo guardas. Al final lo muestras con print y sale 8."
          }
        ]
      },
      {
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
      },
      {
        id: "py-4",
        titulo: "Listas",
        ejercicios: [
          {
            explicacion: "🗄️ Una lista es un ESTANTE DE CASILLEROS: en una sola caja grande guardas varias cosas, cada una en su casillero. Se escribe con corchetes [ ] y las cosas separadas por comas. Completa para guardar tres frutas.",
            codigo: ['frutas = ___', 'print(frutas)'],
            opciones: ['["manzana", "pera", "uva"]', '[manzana, pera, uva]', '["manzana"; "pera"; "uva"]'],
            correcta: 0,
            feedback: [
              "¡Bien! Corchetes para abrir y cerrar el estante, cada texto entre comillas y separados por comas.",
              "Casi. Falta que los textos lleven comillas. Sin ellas, Python cree que manzana, pera y uva son nombres de cajas y no las encuentra.",
              "Los elementos de una lista se separan con COMAS, no con punto y coma. Python no entendería ese símbolo ahí."
            ]
          },
          {
            explicacion: "🔢 Los casilleros se numeran empezando desde 0, no desde 1. El primero es el 0, el segundo es el 1, y así. Queremos mostrar uva.",
            codigo: ['frutas = ["manzana", "pera", "uva"]', 'print(frutas[___])'],
            opciones: ['2', '3', '1'],
            correcta: 0,
            feedback: [
              "¡Exacto! manzana está en el 0, pera en el 1 y uva en el 2. Contar desde cero es la regla en casi todos los lenguajes.",
              "Es la trampa clásica. Como empezamos en 0, un estante de 3 casilleros usa los números 0, 1 y 2. El 3 no existe y Python marcaría un error.",
              "En el 1 está pera, no uva. Cuenta desde cero: manzana es 0, pera es 1 y uva es 2."
            ]
          },
          {
            explicacion: "➕ Con .append() agregas algo al FINAL de la lista, como poner un casillero nuevo al final del estante. Y len() cuenta cuántas cosas hay. ¿Qué mostrará este código?",
            codigo: ['compras = ["pan", "leche"]', 'compras.append("huevos")', 'print(len(compras))'],
            opciones: ['2', '3', 'huevos'],
            correcta: 1,
            feedback: [
              "Ojo con el orden. Se empieza con 2 cosas, pero la segunda línea agrega una más ANTES de contar. Python lee de arriba hacia abajo.",
              "¡Correcto! Empezaba con pan y leche (2), se agregó huevos (3) y len cuenta todo: 3.",
              "len() no muestra el contenido, muestra la CANTIDAD de elementos, o sea, un número."
            ]
          },
          {
            explicacion: "🐞 Este código falla al ejecutarse. Python mostraría el mensaje 'list index out of range', que significa 'esa casilla no existe en tu lista'. ¿Cuál es la causa?",
            codigo: ['colores = ["rojo", "azul", "verde"]', 'print(colores[3])'],
            opciones: ['No existe la casilla 3: solo hay 0, 1 y 2', 'Falta una coma', 'print no sirve con listas'],
            correcta: 0,
            feedback: [
              "¡Bien! Hay tres colores, así que los casilleros son 0, 1 y 2. Pedir el 3 es buscar un casillero que no existe. Este error es muy común, y ahora sabes leer su mensaje.",
              "Las comas están bien: hay una entre cada color. El problema está en la segunda línea, en el número que pides.",
              "print sí funciona con listas. El problema está en el número que escribes dentro de los corchetes."
            ]
          },
          {
            explicacion: "✏️ También puedes CAMBIAR lo que hay en un casillero: lo escribes con su número, un = y el valor nuevo. Es como reemplazar el contenido de ese casillero. ¿Qué mostrará este código?",
            codigo: ['numeros = [10, 20, 30]', 'numeros[1] = 99', 'print(numeros)'],
            opciones: ['[10, 99, 30]', '[99, 20, 30]', '[10, 20, 30, 99]'],
            correcta: 0,
            feedback: [
              "¡Correcto! El casillero 1 es el SEGUNDO (se cuenta desde 0), o sea, el que tenía 20. Se reemplazó por 99 y los demás quedaron igual.",
              "Ese cambio habría sido en el casillero 0. Aquí se cambia el 1, que es el segundo: el que tenía 20.",
              "Eso sería agregar con append. Aquí no se agrega nada: se REEMPLAZA lo que había en el casillero 1."
            ]
          },
          {
            tipo: "ordenar",
            explicacion: "📝 Tienes una lista de tareas, agregas una más y quieres mostrar la última. Ordena los bloques. ¿Qué se mostrará al final?",
            bloques: [
              'tareas = ["lavar", "estudiar"]',
              'tareas.append("cocinar")',
              'ultima = tareas[2]',
              'print(ultima)'
            ],
            pista: "La lista empieza con solo 2 tareas: casilleros 0 y 1. El casillero 2 solo existe después de usar append. ¿Qué línea tiene que ir antes de pedir tareas[2]?",
            feedbackBien: "¡Perfecto! Primero creas la lista con 2 tareas. Luego append agrega cocinar y nace el casillero 2. Después lo guardas en ultima y lo muestras: cocinar. Si hubieras pedido tareas[2] antes del append, Python habría marcado el error 'list index out of range'."
          }
        ]
      }
    ]
  },
  {
    id: "java",
    nombre: "Java",
    icono: "☕",
    disponible: false,
    lecciones: []
  },
  {
    id: "sql",
    nombre: "SQL",
    icono: "🗄️",
    disponible: false,
    lecciones: []
  }
];