agregarLeccion("taller", {
  id: "tal-3",
  titulo: "Escribe en Java",
  ejercicios: [
    {
      tipo: "escribir",
      explicacion: "☕ En Java hay que ser exacto: mayúsculas, comillas dobles y punto y coma. Escribe la línea que muestra el texto Hola con println.",
      respuestas: ['System.out.println("Hola");'],
      pista: "Se escribe System.out.println con paréntesis, el texto entre comillas dobles y un punto y coma al final. Fíjate en las mayúsculas: System lleva S mayúscula.",
      feedbackBien: "¡Perfecto! System con S mayúscula, println en minúsculas, comillas dobles y punto y coma al final."
    },
    {
      tipo: "escribir",
      explicacion: "📦 Declara una variable entera llamada edad con el valor 20.",
      respuestas: ['int edad = 20;'],
      pista: "En Java primero va el tipo (int para enteros), luego el nombre, un signo = y el valor. Termina con punto y coma.",
      feedbackBien: "¡Perfecto! int es el tipo de la caja, edad es su nombre y 20 es lo que guarda."
    },
    {
      tipo: "escribir",
      explicacion: "🔤 Declara una variable de texto llamada nombre con el valor Ana.",
      respuestas: ['String nombre = "Ana";'],
      pista: "El tipo de los textos se llama String, con la S mayúscula. Después va el nombre, el signo =, el texto entre comillas dobles y el punto y coma.",
      feedbackBien: "¡Perfecto! String con mayúscula, el texto con comillas dobles y punto y coma al final."
    },
    {
      tipo: "escribir",
      explicacion: "🚦 Ya existe la variable edad. Escribe un if en TRES líneas, con llaves, que muestre el texto Mayor cuando edad sea mayor o igual a 18. La línea de en medio va con sangría.",
      codigo: ['int edad = 20;'],
      respuestas: ['if (edad >= 18) {\n    System.out.println("Mayor");\n}'],
      sangria: true,
      pista: "La primera línea: if, la condición entre paréntesis y una llave que abre. La segunda va con sangría y es el println con su punto y coma. La tercera es solo la llave que cierra.",
      feedbackBien: "¡Perfecto! En Java la condición va entre paréntesis y el bloque entre llaves, sin dos puntos."
    },
    {
      tipo: "escribir",
      explicacion: "🔁 Escribe un for en TRES líneas que muestre los números 0, 1 y 2 usando la variable i. La línea de en medio va con sangría.",
      respuestas: [
        'for (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}',
        'for (int i = 0; i <= 2; i++) {\n    System.out.println(i);\n}'
      ],
      sangria: true,
      pista: "Dentro de los paréntesis van tres partes separadas por punto y coma: el inicio (int i = 0), la condición y el paso (i++). Luego una llave, el println con sangría y la llave que cierra.",
      feedbackBien: "¡Perfecto! Las tres partes del for van separadas por punto y coma, y el bloque va entre llaves."
    }
  ]
});