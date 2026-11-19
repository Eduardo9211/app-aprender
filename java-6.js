agregarLeccion("java", {
  id: "java-6",
  titulo: "Clases y objetos",
  ejercicios: [
    {
      explicacion: "🍪 Imagina un molde de galletas. El molde no es una galleta: es el plano para hacer muchas. En Java, ese molde es una CLASE, y cada galleta que sale de él es un OBJETO. ¿Qué es una clase?",
      codigo: [],
      opciones: ['El molde o plano para crear objetos', 'Un objeto ya creado', 'Una variable de tipo texto'],
      correcta: 0,
      feedback: [
        "¡Correcto! La clase describe cómo son los objetos (qué datos tienen y qué pueden hacer). Con ella puedes crear tantos objetos como quieras.",
        "Un objeto es la galleta, o sea, algo que ya se creó a partir del molde. La clase es el molde.",
        "Una variable guarda un dato. La clase es una descripción más grande: el plano para crear objetos."
      ]
    },
    {
      explicacion: "🏭 Para crear un objeto a partir de una clase se usa la palabra new. Es como presionar el molde sobre la masa. Completa el código.",
      codigo: ['class Perro {', '    String nombre;', '}', 'Perro miPerro = ___ Perro();'],
      opciones: ['new', 'create', 'make'],
      correcta: 0,
      feedback: [
        "¡Correcto! new Perro() crea un objeto nuevo a partir de la clase Perro, y miPerro es la variable que lo guarda.",
        "create suena lógico, pero la palabra de Java para crear un objeto es new.",
        "make no es una palabra de Java para esto. Los objetos se crean con new."
      ]
    },
    {
      explicacion: "🏷️ Los datos que guarda un objeto se llaman atributos. Se accede a ellos con un punto: objeto.atributo. ¿Qué mostrará este código?",
      codigo: ['class Perro {', '    String nombre;', '}', 'Perro p = new Perro();', 'p.nombre = "Max";', 'System.out.println(p.nombre);'],
      opciones: ['Max', 'nombre', 'null'],
      correcta: 0,
      feedback: [
        "¡Correcto! Se crea el perro, se guarda Max en su atributo nombre y se muestra ese valor.",
        "nombre es el nombre del atributo, no su valor. p.nombre devuelve lo que se guardó adentro: Max.",
        "null es lo que tendría nombre si nadie le hubiera dado un valor. Pero la línea p.nombre = \"Max\" se lo da antes del println."
      ]
    },
    {
      explicacion: "🛠️ Un constructor es una receta especial que se ejecuta al crear el objeto, para darle sus datos desde el principio. Se llama igual que la clase y no lleva tipo de retorno (ni siquiera void). ¿Qué mostrará este código?",
      codigo: ['class Perro {', '    String nombre;', '    Perro(String n) {', '        nombre = n;', '    }', '}', 'Perro p = new Perro("Rex");', 'System.out.println(p.nombre);'],
      opciones: ['Rex', 'n', 'nombre'],
      correcta: 0,
      feedback: [
        "¡Correcto! Al crear el objeto con new Perro(\"Rex\"), se ejecuta el constructor: recibe Rex en n y lo guarda en el atributo nombre.",
        "n es solo el nombre temporal del parámetro del constructor. Lo que se guarda en nombre es lo que le pasaste: Rex.",
        "nombre es el nombre del atributo. Lo que se muestra es su valor, que el constructor llenó con Rex."
      ]
    },
    {
      explicacion: "👯 Cada objeto tiene su PROPIA copia de los atributos, como dos galletas hechas con el mismo molde pero con decoraciones distintas. Cambiar uno no cambia al otro. ¿Qué mostrará este código?",
      codigo: ['class Perro {', '    String nombre;', '    Perro(String n) { nombre = n; }', '}', 'Perro a = new Perro("Max");', 'Perro b = new Perro("Rex");', 'b.nombre = "Toby";', 'System.out.println(a.nombre);'],
      opciones: ['Max', 'Toby', 'Rex'],
      correcta: 0,
      feedback: [
        "¡Correcto! El perro a se llama Max y nunca se modificó. Solo se cambió el nombre del perro b. Cada objeto es independiente.",
        "Toby es el nuevo nombre del perro b, no del a. Cada objeto tiene sus propios datos.",
        "Rex era el nombre original del perro b, pero el código muestra el nombre del perro a, que es Max."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🐱 Vas a armar la clase Gato con un atributo y un método. Va primero el atributo nombre y después el método maullar. Ordena los bloques. Fíjate en la sangría para distinguir las llaves que cierran.",
      bloques: [
        'class Gato {',
        '    String nombre;',
        '    void maullar() {',
        '        System.out.println(nombre + " dice miau");',
        '    }',
        '}'
      ],
      pista: "Se abre primero la clase. Adentro va el atributo, luego el método con su contenido y su llave de cierre (la más sangrada). Al final se cierra la clase con la última llave.",
      feedbackBien: "¡Perfecto! La clase Gato tiene un dato (nombre) y una acción (maullar). Con este molde podrías crear muchos gatos, cada uno con su propio nombre. Esta idea es la base de la programación orientada a objetos."
    }
  ]
});