agregarLeccion("java", {
  id: "java-7",
  titulo: "Encapsulamiento",
  ejercicios: [
    {
      explicacion: "🏦 En un banco no puedes meter la mano a la caja fuerte: le pides al cajero que haga el movimiento por ti. Así el banco evita que alguien tome dinero que no debe. En Java, esa protección se llama ENCAPSULAMIENTO, y se logra con la palabra private: el dato queda guardado y nadie de afuera lo toca directamente. Completa el código.",
      codigo: ['class Cuenta {', '    ___ int saldo;', '}'],
      opciones: ['private', 'secret', 'hidden'],
      correcta: 0,
      feedback: [
        "¡Correcto! private significa 'privado': solo el código de adentro de la clase Cuenta puede tocar saldo directamente.",
        "secret suena lógico, pero no es una palabra de Java. La palabra para ocultar un dato es private.",
        "hidden no existe en Java para esto. Para que un atributo sea privado se usa private."
      ]
    },
    {
      explicacion: "🚫 Si intentas leer un dato privado desde fuera de la clase, Java se niega. El mensaje dice: saldo has private access in Cuenta (saldo tiene acceso privado en Cuenta). ¿Qué pasará con este código?",
      codigo: ['class Cuenta {', '    private int saldo = 100;', '}', 'Cuenta c = new Cuenta();', 'System.out.println(c.saldo);'],
      opciones: ['Error: saldo es private y no se puede leer desde fuera', 'Muestra 100', 'Muestra 0'],
      correcta: 0,
      feedback: [
        "¡Correcto! El dato es privado, así que desde fuera de la clase Cuenta no se puede acceder con c.saldo. Java lo detecta antes de ejecutar el programa.",
        "Sería 100 si saldo no fuera private. Pero al serlo, Java no deja que lo leas directamente desde afuera.",
        "El valor inicial sí es 100, pero eso no importa: el problema es que Java ni siquiera deja leerlo desde fuera."
      ]
    },
    {
      explicacion: "🪟 Entonces, ¿cómo se lee un dato privado? Con un método público que hace de ventanilla, llamado getter (de get, obtener). El método vive adentro de la clase, así que sí puede leer el dato. ¿Qué mostrará este código?",
      codigo: ['class Cuenta {', '    private int saldo = 100;', '    public int getSaldo() {', '        return saldo;', '    }', '}', 'Cuenta c = new Cuenta();', 'System.out.println(c.getSaldo());'],
      opciones: ['100', 'getSaldo', '0'],
      correcta: 0,
      feedback: [
        "¡Correcto! El método getSaldo está dentro de la clase, así que puede leer saldo, y lo entrega con return. Desde fuera solo pides, no tocas.",
        "getSaldo es el nombre del método, no lo que devuelve. println muestra el resultado de ejecutarlo: 100.",
        "El saldo inicial es 100, no 0. El método getSaldo devuelve ese valor."
      ]
    },
    {
      explicacion: "🛡️ La verdadera ventaja: la clase puede VALIDAR antes de cambiar el dato, como un cajero que no acepta depósitos negativos. Sigue el código con calma y descubre qué saldo queda.",
      codigo: ['class Cuenta {', '    private int saldo = 0;', '    public void depositar(int monto) {', '        if (monto > 0) {', '            saldo = saldo + monto;', '        }', '    }', '    public int getSaldo() { return saldo; }', '}', 'Cuenta c = new Cuenta();', 'c.depositar(50);', 'c.depositar(-20);', 'System.out.println(c.getSaldo());'],
      opciones: ['50', '30', '-20'],
      correcta: 0,
      feedback: [
        "¡Correcto! El primer depósito (50) es mayor que 0 y se acepta. El segundo (-20) no cumple monto > 0, así que el if lo rechaza. El saldo se queda en 50.",
        "30 saldría si el -20 se hubiera aceptado, pero el if lo bloquea porque -20 no es mayor que 0.",
        "-20 es el monto del segundo depósito, que se rechaza. El saldo nunca llega a ser negativo, y eso es justo lo que quiere proteger el encapsulamiento."
      ]
    },
    {
      explicacion: "🤔 ¿Para qué tanto trabajo? Hacer los datos privados y darles métodos de acceso parece más largo. ¿Cuál es la ventaja principal?",
      codigo: [],
      opciones: ['La clase puede validar los datos y evitar valores absurdos', 'El programa corre más rápido', 'Se escribe menos código'],
      correcta: 0,
      feedback: [
        "¡Correcto! Si cualquiera pudiera cambiar saldo directamente, alguien podría dejarlo en -1000 sin querer. Con métodos, la clase decide qué cambios son válidos. En un proyecto grande, eso evita muchísimos errores.",
        "No se gana velocidad. De hecho, se escribe un poco más. La ganancia es de orden y seguridad.",
        "Al contrario: se escribe más código. Pero ese código extra es el que protege los datos."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "💰 Vas a armar la clase Cuenta con un saldo privado y un método para depositar. Ordena los bloques. Fíjate en la sangría para distinguir las llaves que cierran.",
      bloques: [
        'class Cuenta {',
        '    private int saldo = 0;',
        '    public void depositar(int monto) {',
        '        saldo = saldo + monto;',
        '    }',
        '}'
      ],
      pista: "Se abre la clase, adentro va el dato privado, luego el método con su contenido y su llave de cierre (la más sangrada). Al final se cierra la clase con la última llave.",
      feedbackBien: "¡Perfecto! El dato está protegido con private y el único camino para cambiarlo es el método depositar. Si más adelante quieres agregar una regla (por ejemplo, rechazar montos negativos), la escribes en un solo lugar."
    }
  ]
});