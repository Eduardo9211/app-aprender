const ejercicios = [
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
  }
];