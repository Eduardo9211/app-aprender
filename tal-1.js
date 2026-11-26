agregarLeccion("taller", {
  id: "tal-1",
  titulo: "Escribe en Python",
  ejercicios: [
    {
      tipo: "escribir",
      explicacion: "✍️ Ahora te toca ESCRIBIR, como en un editor de verdad: nada de opciones. Guarda el texto Hola en una variable llamada saludo.",
      respuestas: ['saludo = "Hola"'],
      comillasIguales: true,
      pista: "Primero va el nombre de la caja, luego un signo = y después el texto, que va entre comillas.",
      feedbackBien: "¡Perfecto! El nombre de la caja va a la izquierda, el signo = guarda lo que está a la derecha, y el texto lleva comillas."
    },
    {
      tipo: "escribir",
      explicacion: "🖨️ Escribe la línea que muestra en pantalla el texto Hola mundo.",
      respuestas: ['print("Hola mundo")'],
      comillasIguales: true,
      pista: "La orden se llama print, lleva paréntesis y adentro va el texto entre comillas.",
      feedbackBien: "¡Perfecto! print es el altavoz de Python: lo que pones dentro de sus paréntesis, lo muestra."
    },
    {
      tipo: "escribir",
      explicacion: "🪙 Escribe DOS líneas: primero crea una variable llamada puntos con el valor 10 y después muestra en pantalla puntos más 5. Separa las líneas con Enter.",
      respuestas: ['puntos = 10\nprint(puntos + 5)'],
      pista: "Primero se crea la caja. En la segunda línea se usa: print con la suma adentro de los paréntesis. Los números van sin comillas.",
      feedbackBien: "¡Perfecto! Primero guardas 10 en la caja puntos y luego print muestra 10 + 5, o sea, 15."
    },
    {
      tipo: "escribir",
      explicacion: "🗄️ Crea una lista llamada frutas que tenga los textos pera y uva.",
      respuestas: ['frutas = ["pera", "uva"]'],
      comillasIguales: true,
      pista: "Nombre, signo =, corchetes, y cada texto entre comillas, separados por una coma.",
      feedbackBien: "¡Perfecto! Los corchetes forman el estante y las comas separan cada casillero."
    },
    {
      tipo: "escribir",
      explicacion: "🚦 Ya existe la variable edad. Escribe un if en DOS líneas que muestre el texto Mayor cuando edad sea mayor que 18. Recuerda los dos puntos y la sangría (la segunda línea va movida a la derecha).",
      codigo: ['edad = 20'],
      respuestas: ['if edad > 18:\n    print("Mayor")'],
      sangria: true,
      comillasIguales: true,
      pista: "La primera línea es if, la condición y dos puntos al final. La segunda línea va con sangría (un paso a la derecha, con espacios) y lleva el print.",
      feedbackBien: "¡Perfecto! Los dos puntos abren el bloque y la sangría dice qué línea depende del if."
    },
    {
      tipo: "escribir",
      explicacion: "🔁 Escribe un for en DOS líneas que muestre cada número de range(3), usando la variable i.",
      respuestas: ['for i in range(3):\n    print(i)'],
      sangria: true,
      pista: "La primera línea es for, la variable, in, range(3) y dos puntos. La segunda va con sangría y muestra la variable.",
      feedbackBien: "¡Perfecto! El for repite lo que está con sangría una vez por cada número, y se muestran 0, 1 y 2."
    }
  ]
});