agregarLeccion("python", {
  id: "py-4",
  titulo: "Listas",
  ejercicios: [
    {
      explicacion: "🗄️ Una lista es un ESTANTE DE CASILLEROS: en una sola caja grande guardas varias cosas, cada una en su casillero. Se escribe con corchetes [ ] y las cosas separadas por comas. Completa para guardar tres frutas.",
      codigo: ['frutas = ___', 'print(frutas)'],
      opciones: ['["manzana", "pera", "uva"]', '[manzana, pera, uva]', '["manzana"; "pera"; "uva"]'],
      correcta: 0,
      feedback: [
        "¡Bien! Corchetes para abrir y cerrar el estante, cada texto entre comillas y separados por comas.",
        "Casi. Falta que los textos lleven comillas. Sin ellas, Python cree que manzana, pera y uva son nombres de cajas y no las encuentra.",
        "Los elementos de una lista se separan con COMAS, no con punto y coma. Python no entendería ese símbolo ahí."
      ]
    },
    {
      explicacion: "🔢 Los casilleros se numeran empezando desde 0, no desde 1. El primero es el 0, el segundo es el 1, y así. Queremos mostrar uva.",
      codigo: ['frutas = ["manzana", "pera", "uva"]', 'print(frutas[___])'],
      opciones: ['2', '3', '1'],
      correcta: 0,
      feedback: [
        "¡Exacto! manzana está en el 0, pera en el 1 y uva en el 2. Contar desde cero es la regla en casi todos los lenguajes.",
        "Es la trampa clásica. Como empezamos en 0, un estante de 3 casilleros usa los números 0, 1 y 2. El 3 no existe y Python marcaría un error.",
        "En el 1 está pera, no uva. Cuenta desde cero: manzana es 0, pera es 1 y uva es 2."
      ]
    },
    {
      explicacion: "➕ Con .append() agregas algo al FINAL de la lista, como poner un casillero nuevo al final del estante. Y len() cuenta cuántas cosas hay. ¿Qué mostrará este código?",
      codigo: ['compras = ["pan", "leche"]', 'compras.append("huevos")', 'print(len(compras))'],
      opciones: ['2', '3', 'huevos'],
      correcta: 1,
      feedback: [
        "Ojo con el orden. Se empieza con 2 cosas, pero la segunda línea agrega una más ANTES de contar. Python lee de arriba hacia abajo.",
        "¡Correcto! Empezaba con pan y leche (2), se agregó huevos (3) y len cuenta todo: 3.",
        "len() no muestra el contenido, muestra la CANTIDAD de elementos, o sea, un número."
      ]
    },
    {
      explicacion: "🐞 Este código falla al ejecutarse. Python mostraría el mensaje 'list index out of range', que significa 'esa casilla no existe en tu lista'. ¿Cuál es la causa?",
      codigo: ['colores = ["rojo", "azul", "verde"]', 'print(colores[3])'],
      opciones: ['No existe la casilla 3: solo hay 0, 1 y 2', 'Falta una coma', 'print no sirve con listas'],
      correcta: 0,
      feedback: [
        "¡Bien! Hay tres colores, así que los casilleros son 0, 1 y 2. Pedir el 3 es buscar un casillero que no existe. Este error es muy común, y ahora sabes leer su mensaje.",
        "Las comas están bien: hay una entre cada color. El problema está en la segunda línea, en el número que pides.",
        "print sí funciona con listas. El problema está en el número que escribes dentro de los corchetes."
      ]
    },
    {
      explicacion: "✏️ También puedes CAMBIAR lo que hay en un casillero: lo escribes con su número, un = y el valor nuevo. Es como reemplazar el contenido de ese casillero. ¿Qué mostrará este código?",
      codigo: ['numeros = [10, 20, 30]', 'numeros[1] = 99', 'print(numeros)'],
      opciones: ['[10, 99, 30]', '[99, 20, 30]', '[10, 20, 30, 99]'],
      correcta: 0,
      feedback: [
        "¡Correcto! El casillero 1 es el SEGUNDO (se cuenta desde 0), o sea, el que tenía 20. Se reemplazó por 99 y los demás quedaron igual.",
        "Ese cambio habría sido en el casillero 0. Aquí se cambia el 1, que es el segundo: el que tenía 20.",
        "Eso sería agregar con append. Aquí no se agrega nada: se REEMPLAZA lo que había en el casillero 1."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "📝 Tienes una lista de tareas, agregas una más y quieres mostrar la última. Ordena los bloques. ¿Qué se mostrará al final?",
      bloques: [
        'tareas = ["lavar", "estudiar"]',
        'tareas.append("cocinar")',
        'ultima = tareas[2]',
        'print(ultima)'
      ],
      pista: "La lista empieza con solo 2 tareas: casilleros 0 y 1. El casillero 2 solo existe después de usar append. ¿Qué línea tiene que ir antes de pedir tareas[2]?",
      feedbackBien: "¡Perfecto! Primero creas la lista con 2 tareas. Luego append agrega cocinar y nace el casillero 2. Después lo guardas en ultima y lo muestras: cocinar. Si hubieras pedido tareas[2] antes del append, Python habría marcado el error 'list index out of range'."
    }
  ]
});