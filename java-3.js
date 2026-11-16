agregarLeccion("java", {
  id: "java-3",
  titulo: "Decisiones y ciclos",
  ejercicios: [
    {
      explicacion: "🚦 El if de Java es igual al de Python, pero con dos cambios: la condición va entre PARÉNTESIS y no hay dos puntos, porque el bloque va entre llaves. Completa el código.",
      codigo: ['int edad = 20;', 'if ___ {', '    System.out.println("Mayor");', '}'],
      opciones: ['(edad >= 18)', 'edad >= 18:', '[edad >= 18]'],
      correcta: 0,
      feedback: [
        "¡Correcto! Condición entre paréntesis y el bloque entre llaves. No lleva dos puntos.",
        "Los dos puntos son de Python. En Java, la condición va entre paréntesis y el bloque se abre con una llave.",
        "Los corchetes no sirven para condiciones. En Java, la condición del if va entre paréntesis."
      ]
    },
    {
      explicacion: "🔀 else es el plan B, igual que en Python, pero con llaves. Sigue el código y descubre qué mostrará.",
      codigo: ['int hora = 22;', 'if (hora < 20) {', '    System.out.println("Dia");', '} else {', '    System.out.println("Noche");', '}'],
      opciones: ['Noche', 'Dia', 'Dia y Noche'],
      correcta: 0,
      feedback: [
        "¡Correcto! 22 no es menor que 20, así que se ejecuta el else y se muestra Noche.",
        "La condición hora < 20 es falsa porque 22 no es menor que 20. Por eso no entra al if.",
        "Nunca se ejecutan los dos. if y else son caminos opuestos: Java toma uno solo."
      ]
    },
    {
      explicacion: "🔁 El for de Java tiene tres partes dentro de los paréntesis, separadas por punto y coma: dónde empieza (int i = 0), hasta cuándo sigue (i < 3) y qué hace en cada vuelta (i++, que suma 1). ¿Qué mostrará este código? (cada número en su línea)",
      codigo: ['for (int i = 0; i < 3; i++) {', '    System.out.println(i);', '}'],
      opciones: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3'],
      correcta: 0,
      feedback: [
        "¡Correcto! i empieza en 0 y sigue mientras sea menor que 3, o sea 0, 1 y 2. Cuando llega a 3, la condición es falsa y se detiene.",
        "i empieza en 0, no en 1, porque así está escrito en la primera parte. Y se detiene cuando llega a 3 sin mostrarlo.",
        "El 3 no se muestra: cuando i vale 3, la condición i < 3 es falsa y el ciclo termina antes de ejecutarse."
      ]
    },
    {
      explicacion: "🪤 Trampa clásica de Java: para comparar TEXTOS no se usa ==, sino el método .equals(). Con == Java compara si son el mismo objeto en la memoria, y puede dar un resultado inesperado aunque se vean iguales. ¿Cuál es la forma correcta de comparar?",
      codigo: ['String a = "hola";'],
      opciones: ['a.equals("hola")', 'a = "hola"', 'a === "hola"'],
      correcta: 0,
      feedback: [
        "¡Correcto! .equals() compara el contenido del texto, que es lo que queremos. Es una de las costumbres más importantes que debes tener en Java.",
        "Un solo = no compara, sino que guarda un valor en la variable. Esa línea cambiaría a, no preguntaría nada.",
        "=== es de JavaScript, no existe en Java. Para comparar textos se usa .equals()."
      ]
    },
    {
      explicacion: "🐞 Este for tiene un error de escritura y Java no lo va a ejecutar. ¿Cuál es el problema?",
      codigo: ['for (int i = 0, i < 3, i++) {', '    System.out.println(i);', '}'],
      opciones: ['Las tres partes del for se separan con ; y no con comas', 'Falta System.out', 'int no se puede usar dentro de un for'],
      correcta: 0,
      feedback: [
        "¡Correcto! Las tres partes del for (inicio, condición y paso) se separan con punto y coma. Con comas, Java no entiende dónde termina cada una.",
        "System.out.println está bien escrito. El problema está en la primera línea, en cómo se separan las partes del for.",
        "int sí se puede usar en la primera parte del for, de hecho es lo normal. El problema son los separadores."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "➕ Quieres sumar los números del 1 al 3 con un for. Ordena los bloques. Fíjate en la sangría y en las llaves. ¿Qué mostrará al final?",
      bloques: [
        'int suma = 0;',
        'for (int i = 1; i <= 3; i++) {',
        '    suma = suma + i;',
        '}',
        'System.out.println(suma);'
      ],
      pista: "Primero se crea la alcancía suma, antes del ciclo. Luego va el for con su línea adentro y su llave de cierre. El println va al final, fuera del ciclo, para mostrar el resultado una sola vez.",
      feedbackBien: "¡Perfecto! suma empieza en 0, el for da tres vueltas (1, 2 y 3) y va sumando, y al final se muestra 6. Es la misma lógica que en Python, solo cambia la forma de escribirla."
    }
  ]
});