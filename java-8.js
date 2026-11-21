agregarLeccion("java", {
  id: "java-8",
  titulo: "Herencia",
  ejercicios: [
    {
      explicacion: "🌳 En una familia, los hijos heredan rasgos de sus padres. En Java, una clase puede heredar de otra: recibe todo lo que la clase padre ya sabe hacer, sin volver a escribirlo. Se usa la palabra extends (extiende). Completa el código.",
      codigo: ['class Animal {', '    void comer() {', '        System.out.println("Comiendo");', '    }', '}', 'class Perro ___ Animal {', '}'],
      opciones: ['extends', 'inherits', 'from'],
      correcta: 0,
      feedback: [
        "¡Correcto! class Perro extends Animal significa 'Perro es un tipo de Animal': hereda lo que Animal tiene.",
        "inherits significa heredar en inglés, pero en Java la palabra reservada es extends.",
        "from se usa para importar en Python, no para heredar en Java. Aquí se usa extends."
      ]
    },
    {
      explicacion: "🎁 La clase hija recibe los métodos de la clase padre sin escribirlos. ¿Qué mostrará este código?",
      codigo: ['class Animal {', '    void comer() { System.out.println("Comiendo"); }', '}', 'class Perro extends Animal { }', 'Perro p = new Perro();', 'p.comer();'],
      opciones: ['Comiendo', 'No muestra nada', 'Error: Perro no tiene el método comer'],
      correcta: 0,
      feedback: [
        "¡Correcto! Perro hereda comer() de Animal, así que puede usarlo aunque no lo haya escrito. Es como un hijo que sabe caminar porque lo heredó de la especie.",
        "Sí muestra algo: el método comer() se heredó de Animal y se ejecuta normalmente.",
        "No hay error: justamente porque Perro extiende Animal, también tiene el método comer."
      ]
    },
    {
      explicacion: "✏️ La clase hija puede REEMPLAZAR un método del padre con su propia versión. Es como un hijo que hace lo mismo que su padre pero a su manera. Se llama sobrescribir (override). ¿Qué mostrará este código?",
      codigo: ['class Animal {', '    void sonido() { System.out.println("..."); }', '}', 'class Perro extends Animal {', '    void sonido() { System.out.println("Guau"); }', '}', 'Perro p = new Perro();', 'p.sonido();'],
      opciones: ['Guau', '...', 'Guau y luego ...'],
      correcta: 0,
      feedback: [
        "¡Correcto! Perro reemplazó el método sonido con su propia versión, y esa es la que se ejecuta.",
        "Esa es la versión del padre. Como Perro tiene su propio sonido, esa versión reemplaza a la del padre.",
        "Solo se ejecuta una versión: la de la clase más específica. La del padre no se ejecuta, a menos que se la llame con super."
      ]
    },
    {
      explicacion: "⬆️ Si quieres usar la versión del padre Y agregar algo más, se llama con super (el padre). Sigue el código paso a paso. ¿Qué mostrará?",
      codigo: ['class Animal {', '    void presentarse() { System.out.println("Soy un animal"); }', '}', 'class Gato extends Animal {', '    void presentarse() {', '        super.presentarse();', '        System.out.println("y soy un gato");', '    }', '}', 'new Gato().presentarse();'],
      opciones: ['Soy un animal, y luego y soy un gato', 'Solo y soy un gato', 'Solo Soy un animal'],
      correcta: 0,
      feedback: [
        "¡Correcto! super.presentarse() ejecuta primero la versión del padre (Soy un animal), y después el gato agrega su propia línea. Así se reutiliza lo que ya existe y se completa.",
        "También se muestra la versión del padre, porque la primera línea del método llama a super.presentarse().",
        "La segunda línea del método del gato también se ejecuta, así que también se muestra y soy un gato."
      ]
    },
    {
      explicacion: "🐞 Este código no pasa la revisión de Java. El mensaje dice: '{' expected (se esperaba una llave). ¿Cuál es el problema de fondo?",
      codigo: ['class Perro extends Animal, Mascota { }'],
      opciones: ['Java solo permite heredar de UNA clase', 'Falta un punto y coma', 'extends no existe'],
      correcta: 0,
      feedback: [
        "¡Correcto! En Java, una clase solo puede tener UN padre. Se llama herencia simple. Para combinar varias capacidades, Java ofrece otra herramienta llamada interfaces, que verás más adelante.",
        "Las declaraciones de clase no terminan con punto y coma. El problema es que se intentan dos padres a la vez.",
        "extends sí existe: es justo la palabra para heredar. El problema es que se usa con dos clases."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🏍️ Vas a crear un vehículo con un método, y una moto que lo herede para usarlo sin reescribirlo. Ordena los bloques. ¿Qué se mostrará al final?",
      bloques: [
        'class Vehiculo {',
        '    void arrancar() { System.out.println("Brum"); }',
        '}',
        'class Moto extends Vehiculo { }',
        'new Moto().arrancar();'
      ],
      pista: "Primero se define la clase padre completa (sus tres líneas), porque la hija la necesita. Luego la clase hija con extends, y al final se usa creando un objeto Moto.",
      feedbackBien: "¡Perfecto! Moto no escribió arrancar, pero lo heredó de Vehiculo, así que muestra Brum. Eso es reutilizar código: si mañana mejoras arrancar en Vehiculo, todas las clases hijas se benefician."
    }
  ]
});