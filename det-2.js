agregarLeccion("detective", {
  id: "det-2",
  titulo: "Errores de Java",
  ejercicios: [
    {
      explicacion: "🔎 El compilador de Java revisa tu código ANTES de ejecutarlo y te avisa de los errores. Este es uno de los más comunes. El mensaje dice: error: ';' expected (se esperaba un punto y coma). ¿Dónde falta?",
      codigo: ['int x = 5', 'System.out.println(x);'],
      opciones: ['Al final de la línea int x = 5', 'Al final de println', 'Antes de int'],
      correcta: 0,
      feedback: [
        "¡Correcto! A veces el compilador señala la línea siguiente, porque se da cuenta del problema al llegar ahí. Cuando un error parezca estar en un lugar raro, revisa también la línea de arriba.",
        "println ya tiene su punto y coma. El que falta es el de la línea anterior.",
        "El punto y coma va al final de cada instrucción, no antes. Mira cuál instrucción no lo tiene."
      ]
    },
    {
      explicacion: "🔤 Otro clásico: cannot find symbol (no se encuentra el símbolo). Significa que usaste un nombre que Java no conoce. ¿Cuál es la causa en este código?",
      codigo: ['int total = 10;', 'System.out.println(totl);'],
      opciones: ['Escribiste totl en vez de total', 'Falta una llave de cierre', 'El tipo int no existe'],
      correcta: 0,
      feedback: [
        "¡Correcto! La variable se llama total, pero se pide totl, un nombre que no existe. El error cannot find symbol casi siempre es un nombre mal escrito (o una mayúscula distinta).",
        "Una llave de cierre faltante daría otro mensaje distinto. Aquí el problema es el nombre que se pide.",
        "int sí existe, es uno de los tipos básicos de Java. El problema está en el nombre de la variable."
      ]
    },
    {
      explicacion: "🔄 El mensaje dice: incompatible types: String cannot be converted to int (tipos incompatibles: un String no se puede convertir a int). ¿Qué pasa en este código?",
      codigo: ['int edad = "20";'],
      opciones: ['El 20 con comillas es un texto y la variable es de números', 'int no admite números', 'Falta new'],
      correcta: 0,
      feedback: [
        "¡Correcto! Las comillas convierten el 20 en un String (texto), y no cabe en una caja int. La solución es quitar las comillas: int edad = 20;",
        "int está hecho justamente para números enteros. El problema son las comillas: vuelven al 20 un texto.",
        "new se usa para crear objetos, no para guardar números simples. El problema son las comillas."
      ]
    },
    {
      explicacion: "💥 Este error aparece cuando el programa YA se está ejecutando, y es de los más famosos: NullPointerException. null significa 'sin valor': una caja vacía. ¿Qué pasa con este código?",
      codigo: ['String nombre = null;', 'System.out.println(nombre.length());'],
      opciones: ['Falla con NullPointerException: nombre no tiene ningún texto', 'Muestra 0', 'Muestra null'],
      correcta: 0,
      feedback: [
        "¡Correcto! nombre es una caja vacía (null), y le estás pidiendo su longitud. Es como preguntarle cuántas letras tiene a un texto que no existe. Siempre que veas este error, busca qué variable está vacía.",
        "Un texto vacío tendría longitud 0, pero aquí no hay ni texto vacío: nombre es null, o sea, no hay nada.",
        "El println mostraría null solo si se le pasara nombre directamente. Pero se le pide nombre.length(), y esa operación sobre null provoca el error."
      ]
    },
    {
      explicacion: "📁 Java es estricto con los nombres de archivo. El mensaje dice: class Casa is public, should be declared in a file named Casa.java (la clase Casa es pública y debe estar en un archivo llamado Casa.java). ¿Qué debes hacer?",
      codigo: [],
      opciones: ['Nombrar el archivo Casa.java, igual que la clase pública', 'Escribir Casa en minúsculas', 'Agregar un método main'],
      correcta: 0,
      feedback: [
        "¡Correcto! En Java, una clase pública debe estar en un archivo con exactamente su mismo nombre, mayúsculas incluidas. Es un error típico cuando guardas con otro nombre.",
        "Las mayúsculas son correctas: por convención las clases empiezan con mayúscula. Lo que hay que ajustar es el nombre del archivo.",
        "main sirve para ejecutar un programa, pero no tiene relación con este mensaje. El problema es el nombre del archivo."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🧱 Cuando compilas y aparecen MUCHOS errores, no entres en pánico: a menudo un solo error provoca varios más. Ordena los pasos del método de un buen detective.",
      bloques: [
        '1. Arreglar solo el PRIMER error de la lista',
        '2. Volver a compilar',
        '3. Ver cuántos errores desaparecieron',
        '4. Repetir con el siguiente error'
      ],
      pista: "Se empieza por el primero de la lista, se arregla, se vuelve a compilar y se mira el resultado. Solo después se repite con el siguiente.",
      feedbackBien: "¡Perfecto! Muchas veces un solo error (como un punto y coma faltante) hace que el compilador se confunda y reporte diez errores más. Al arreglar el primero, desaparecen casi todos. Empieza siempre por arriba."
    }
  ]
});