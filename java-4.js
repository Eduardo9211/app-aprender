agregarLeccion("java", {
  id: "java-4",
  titulo: "Arreglos y listas",
  ejercicios: [
    {
      explicacion: "🗄️ Un arreglo (array) es un estante de casilleros de tamaño fijo. Se parece a las listas de Python, pero es más estricto: todos los elementos son del mismo tipo y el tamaño no cambia. El tipo lleva corchetes (int[]) y los valores van entre llaves { }. Completa el código.",
      codigo: ['int[] numeros = ___;'],
      opciones: ['{10, 20, 30}', '[10, 20, 30]', '(10, 20, 30)'],
      correcta: 0,
      feedback: [
        "¡Correcto! Los corchetes van junto al tipo (int[]) y los valores se escriben entre llaves.",
        "Casi. En Java los corchetes van en el tipo (int[]), pero los valores se escriben entre llaves. Los corchetes con valores son de Python.",
        "Los paréntesis no sirven para listar valores de un arreglo. Se usan llaves { }."
      ]
    },
    {
      explicacion: "🔢 Igual que en Python, los casilleros se numeran desde 0. Queremos mostrar kiwi. ¿Qué número va dentro de los corchetes?",
      codigo: ['String[] frutas = {"pera", "uva", "kiwi"};', 'System.out.println(frutas[___]);'],
      opciones: ['2', '3', '1'],
      correcta: 0,
      feedback: [
        "¡Correcto! pera es 0, uva es 1 y kiwi es 2.",
        "Es la trampa clásica. Con 3 elementos, los casilleros son 0, 1 y 2. El 3 no existe.",
        "En el 1 está uva, no kiwi. Cuenta desde cero: pera 0, uva 1, kiwi 2."
      ]
    },
    {
      explicacion: "📏 Para saber cuántos elementos tiene un arreglo se usa .length, SIN paréntesis. (Ojo: es distinto a Python, donde era len().) ¿Qué mostrará este código?",
      codigo: ['int[] a = {5, 6, 7, 8};', 'System.out.println(a.length);'],
      opciones: ['4', '3', '7'],
      correcta: 0,
      feedback: [
        "¡Correcto! .length devuelve cuántos elementos hay, no cuál es el último valor. Son 4.",
        "Hay 4 números: 5, 6, 7 y 8. Cuenta cuántos son, no cuál es el último índice.",
        "7 es uno de los valores guardados. .length devuelve la cantidad de elementos, que es 4."
      ]
    },
    {
      explicacion: "🐞 Este programa se detiene con el mensaje: ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3. Traducido: 'el índice 3 se sale de los límites de un arreglo de tamaño 3'. ¿Cuál es la causa?",
      codigo: ['int[] a = {1, 2, 3};', 'System.out.println(a[3]);'],
      opciones: ['Se sale de los límites: solo existen las posiciones 0, 1 y 2', 'Falta un punto y coma', 'a no es un nombre válido'],
      correcta: 0,
      feedback: [
        "¡Correcto! El arreglo tiene 3 casilleros: 0, 1 y 2. Pedir el 3 es buscar un casillero que no existe. Es el mismo error de Python (list index out of range), con otro nombre.",
        "El punto y coma está en su lugar al final de cada línea. El problema está en el número dentro de los corchetes.",
        "a es un nombre perfectamente válido. El problema es la posición que se pide."
      ]
    },
    {
      explicacion: "📈 Los arreglos no pueden crecer. Cuando necesitas una lista que crezca, Java ofrece ArrayList, con add() para agregar y size() para contar. Se escribe el tipo entre < >. ¿Qué mostrará este código?",
      codigo: ['ArrayList<String> lista = new ArrayList<>();', 'lista.add("pan");', 'lista.add("leche");', 'System.out.println(lista.size());'],
      opciones: ['2', '0', '1'],
      correcta: 0,
      feedback: [
        "¡Correcto! Se crea una lista vacía y se agregan dos elementos. size() cuenta cuántos hay: 2. Se parece a append y len() de Python.",
        "La lista empieza vacía, pero las dos líneas con add le agregan elementos antes de contar.",
        "Se agregaron dos elementos, pan y leche, así que size() devuelve 2."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "📝 Vas a crear una lista de tareas con ArrayList, agregar una y mostrarla. Ordena los bloques. Recuerda: el import va hasta arriba. ¿Qué se mostrará?",
      bloques: [
        'import java.util.ArrayList;',
        'ArrayList<String> tareas = new ArrayList<>();',
        'tareas.add("estudiar");',
        'System.out.println(tareas.get(0));'
      ],
      pista: "El import va primero, porque ArrayList no viene incluido por defecto y hay que avisarlo. Luego se crea la lista, después se agrega un elemento y al final se pide con get.",
      feedbackBien: "¡Perfecto! import avisa de dónde viene ArrayList, luego creas la lista vacía, le agregas estudiar y get(0) pide el primer elemento. Se muestra estudiar."
    }
  ]
});