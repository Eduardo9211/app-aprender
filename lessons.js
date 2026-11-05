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