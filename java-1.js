agregarLeccion("java", {
  id: "java-1",
  titulo: "Tu primer programa",
  ejercicios: [
    {
      explicacion: "📝 Java es como un formulario muy estricto: todo tiene su lugar y todo es obligatorio. El código vive dentro de una CLASE (una caja grande), y el programa arranca en main, la puerta de entrada. Con System.out.println se muestra un texto, y los textos van entre comillas dobles. Completa el código.",
      codigo: ['public class Main {', '    public static void main(String[] args) {', '        System.out.println(___);', '    }', '}'],
      opciones: ['"Hola"', 'Hola', "'Hola'"],
      correcta: 0,
      feedback: [
        "¡Correcto! En Java, los textos siempre van entre comillas dobles. Igual que en Python, pero aquí es obligatorio que sean dobles.",
        "Sin comillas, Java cree que Hola es el nombre de una variable y no la encuentra. Los textos van entre comillas dobles.",
        "En Java, las comillas simples son solo para UN carácter, como 'H'. Para un texto completo se usan comillas dobles."
      ]
    },
    {
      explicacion: "🐞 En Python bastaba con saltar de línea. En Java, cada instrucción debe terminar con un punto y coma ;, como el punto al final de una oración. Esta línea tiene un error. ¿Cuál es?",
      codigo: ['System.out.println("Hola")'],
      opciones: ['Falta el punto y coma ; al final', 'Faltan dos puntos :', 'Falta un paréntesis más'],
      correcta: 0,
      feedback: [
        "¡Correcto! Java exige el punto y coma al final de cada instrucción. Sin él, el compilador marca un error. Es el olvido más común de quien viene de Python.",
        "Los dos puntos se usan en Python para abrir un bloque. En Java, el bloque se abre con llaves y las instrucciones terminan con punto y coma.",
        "Los paréntesis están completos: uno abre y otro cierra. Lo que falta está después del último paréntesis."
      ]
    },
    {
      explicacion: "🚪 Cuando ejecutas un programa en Java, la computadora no empieza por la primera línea del archivo: busca una puerta de entrada específica. ¿Cuál es?",
      codigo: ['public class Main {', '    public static void main(String[] args) {', '        System.out.println("Hola");', '    }', '}'],
      opciones: ['main', 'println', 'Main'],
      correcta: 0,
      feedback: [
        "¡Correcto! main es el punto de partida: Java empieza a ejecutar las instrucciones que están adentro de main.",
        "println es la orden que muestra un texto, pero se ejecuta porque está dentro de main. La puerta de entrada es main.",
        "Main es el nombre de la clase, la caja grande. Lo que arranca el programa es el método main, con m minúscula."
      ]
    },
    {
      explicacion: "📣 System.out.println muestra el texto y salta a la siguiente línea. System.out.print lo muestra y se queda en la misma línea. ¿Qué mostrará este código?",
      codigo: ['System.out.print("A");', 'System.out.println("B");', 'System.out.println("C");'],
      opciones: ['AB en una línea y C en la siguiente', 'A, B y C, cada una en su línea', 'ABC todo en la misma línea'],
      correcta: 0,
      feedback: [
        "¡Correcto! print deja el cursor pegado después de A, así que B sale justo al lado. Después, println de B salta de línea, y C sale en la siguiente.",
        "A no sale sola porque se usó print, que no salta de línea. B queda pegada a su lado.",
        "Tras mostrar B, println salta de línea, así que C aparece en una línea nueva. Solo A y B quedan juntas."
      ]
    },
    {
      explicacion: "🔲 En Python, la sangría marcaba dónde empezaba y terminaba cada bloque. En Java, eso lo hacen otros símbolos. ¿Cuáles?",
      codigo: ['public class Main {', '    public static void main(String[] args) {', '        System.out.println("Hola");', '    }', '}'],
      opciones: ['Las llaves { }', 'La sangría', 'Los dos puntos :'],
      correcta: 0,
      feedback: [
        "¡Correcto! Cada llave { abre un bloque y su } lo cierra. La sangría en Java solo sirve para que TÚ leas mejor, a Java le da igual.",
        "En Java la sangría es opcional y solo ayuda a leer. Quien marca los bloques son las llaves.",
        "Los dos puntos son de Python. Java usa llaves para abrir y cerrar cada bloque."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🏗️ Arma tu primer programa completo en Java: la clase, la puerta main y el mensaje. Ordena los bloques. Fíjate en la sangría para distinguir las dos llaves que cierran.",
      bloques: [
        'public class Main {',
        '    public static void main(String[] args) {',
        '        System.out.println("Hola Java");',
        '    }',
        '}'
      ],
      pista: "Se abre primero la caja grande (la clase), luego la puerta (main) y adentro el mensaje. Después se cierra primero lo más interno: la llave de main, y al final la llave de la clase.",
      feedbackBien: "¡Perfecto! Las cajas se abren de afuera hacia adentro y se cierran de adentro hacia afuera, como cajas de matrioska. Este molde lo vas a usar en todos tus programas de Java."
    }
  ]
});