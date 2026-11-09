agregarLeccion("python", {
  id: "py-8",
  titulo: "Diccionarios",
  ejercicios: [
    {
      explicacion: "📒 Un diccionario es una AGENDA: cada dato tiene un nombre (la clave) y un valor. Se escribe con llaves { } y cada pareja lleva dos puntos, así: clave: valor. Completa el código para guardar los datos de Ana.",
      codigo: ['persona = ___', 'print(persona["nombre"])'],
      opciones: ['{"nombre": "Ana", "edad": 20}', '["nombre": "Ana", "edad": 20]', '{"nombre", "Ana"}'],
      correcta: 0,
      feedback: [
        "¡Correcto! Llaves para abrir y cerrar, y cada dato como clave: valor, separados por comas.",
        "Los corchetes [ ] son para listas, y las listas no usan dos puntos. Un diccionario siempre se escribe con llaves { }.",
        "Falta el dos puntos entre cada clave y su valor. Con una coma, Python no sabe que 'nombre' es la etiqueta y 'Ana' el dato."
      ]
    },
    {
      explicacion: "🔑 En un diccionario no pides por número de casillero: pides por NOMBRE de la clave y te devuelve su valor, como buscar un contacto por su nombre. ¿Qué mostrará este código?",
      codigo: ['mascota = {"nombre": "Max", "tipo": "perro"}', 'print(mascota["tipo"])'],
      opciones: ['perro', 'Max', 'tipo'],
      correcta: 0,
      feedback: [
        "¡Exacto! Buscas con la clave 'tipo' y Python te devuelve el valor que tiene guardado: perro.",
        "Max es el valor de la clave 'nombre', no de 'tipo'. Cada clave guarda su propio valor.",
        "tipo es la clave, o sea, lo que usas para buscar. Lo que te devuelve y se muestra es el valor: perro."
      ]
    },
    {
      explicacion: "➕ Para agregar un dato nuevo, escribes la clave nueva entre corchetes y le asignas su valor con =. Si la clave ya existía, se reemplaza el valor. ¿Qué mostrará este código?",
      codigo: ['precios = {"pan": 10}', 'precios["leche"] = 25', 'print(len(precios))'],
      opciones: ['2', '1', '25'],
      correcta: 0,
      feedback: [
        "¡Correcto! Empezaba con una pareja (pan) y se agregó otra (leche). len cuenta cuántas parejas hay: 2.",
        "Empezaba con una sola pareja, pero la segunda línea agrega otra antes de que se cuente.",
        "25 es el precio de la leche, un valor. len no muestra los valores, cuenta cuántas parejas hay en total."
      ]
    },
    {
      explicacion: "🐞 Este código falla. Python mostraría el mensaje KeyError: 'verde', que significa 'esa clave no existe'. ¿Cuál es la causa?",
      codigo: ['colores = {"rojo": 1, "azul": 2}', 'print(colores["verde"])'],
      opciones: ['La clave verde no existe en el diccionario', 'Falta una coma', 'Las claves deben ser números'],
      correcta: 0,
      feedback: [
        "¡Bien! Pides el valor de verde, pero en la agenda solo hay rojo y azul. Es como buscar un contacto que nunca guardaste. KeyError significa 'error de clave'.",
        "Las comas están bien. El problema está en la clave que estás buscando.",
        "Las claves pueden ser textos, como aquí con rojo y azul. Lo que falla es que verde no está guardado."
      ]
    },
    {
      explicacion: "🔁 Si recorres un diccionario con for, en cada vuelta obtienes una CLAVE (el nombre), no el valor. ¿Qué mostrará este código? (cada uno en su línea)",
      codigo: ['notas = {"Ana": 9, "Luis": 7}', 'for nombre in notas:', '    print(nombre)'],
      opciones: ['Ana y Luis', '9 y 7', 'Ana 9 y Luis 7'],
      correcta: 0,
      feedback: [
        "¡Correcto! Al recorrer un diccionario con for, en cada vuelta nombre guarda una clave. Por eso salen Ana y Luis.",
        "Los números son los valores. Pero el for recorre las claves, y esas son los nombres.",
        "Se muestra solo lo que dice el print, y el print solo muestra nombre, o sea, la clave. Los valores no aparecen."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🎮 Guardas los datos de un jugador y le sumas 10 puntos. Ordena los bloques. ¿Qué mostrará al final?",
      bloques: [
        'usuario = {"nombre": "Ana", "puntos": 0}',
        'usuario["puntos"] = usuario["puntos"] + 10',
        'print(usuario["puntos"])'
      ],
      pista: "Primero hay que crear el diccionario, porque las demás líneas lo usan. Luego se actualizan los puntos (usando el valor que ya tenía) y al final se muestran.",
      feedbackBien: "¡Perfecto! Primero guardas el usuario con 0 puntos. Luego tomas sus puntos actuales (0), les sumas 10 y los vuelves a guardar. Al final se muestra 10. Un diccionario se parece mucho a una fila de una base de datos: tiene campos (las claves) y datos (los valores). Más adelante lo vamos a conectar con SQL."
    }
  ]
});