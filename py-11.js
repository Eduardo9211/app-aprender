agregarLeccion("python", {
  id: "py-11",
  titulo: "JSON y APIs básicas",
  ejercicios: [
    {
      explicacion: "🍽️ Imagina un restaurante. Tú eres el cliente, la cocina es otro programa que tiene la información, y la API es el MESERO: le haces un pedido, él va a la cocina y te trae la respuesta. Así se comunican las aplicaciones entre sí. ¿Qué es una API?",
      codigo: [],
      opciones: ['El mesero que lleva tu pedido a la cocina y te trae la respuesta', 'Un tipo de base de datos', 'Un lenguaje de programación'],
      correcta: 0,
      feedback: [
        "¡Correcto! Una API es la forma en que un programa le pide cosas a otro programa y recibe una respuesta, sin necesidad de entrar a su 'cocina'.",
        "Una base de datos guarda información, pero no es la que atiende los pedidos. La API es la que lleva y trae los mensajes.",
        "Python o Java son lenguajes para escribir programas. Una API no es un lenguaje, es el canal de comunicación entre programas."
      ]
    },
    {
      explicacion: "📦 Las APIs suelen responder en un formato llamado JSON, que se parece muchísimo a un diccionario de Python. Pero tiene una regla estricta: los textos SIEMPRE van con comillas dobles. ¿Cuál es JSON válido?",
      codigo: [],
      opciones: ['{"nombre": "Ana", "edad": 20}', "{'nombre': 'Ana', 'edad': 20}", '{nombre: Ana, edad: 20}'],
      correcta: 0,
      feedback: [
        "¡Correcto! Comillas dobles en las claves y en los textos, dos puntos y comas. Los números van sin comillas.",
        "Casi. Python acepta comillas simples, pero JSON no: exige comillas dobles. Es un detalle que causa muchos errores.",
        "Sin comillas, JSON no sabe dónde empiezan y terminan los textos. Las claves y los textos deben llevar comillas dobles."
      ]
    },
    {
      explicacion: "🔄 Lo que llega de una API es TEXTO con forma de JSON. Para usarlo como diccionario hay que convertirlo con json.loads(). ¿Qué mostrará este código?",
      codigo: ['import json', `texto = '{"edad": 20}'`, 'datos = json.loads(texto)', 'print(datos["edad"] + 1)'],
      opciones: ['21', '20', 'Error'],
      correcta: 0,
      feedback: [
        "¡Correcto! json.loads convierte el texto en un diccionario real. Entonces datos['edad'] vale 20 (un número) y sumarle 1 da 21.",
        "20 es el valor guardado, pero el print le suma 1 antes de mostrar. El resultado es 21.",
        "No hay error porque se usó json.loads. Sin esa conversión sí fallaría, porque un texto no se puede consultar con claves."
      ]
    },
    {
      explicacion: "🚦 Cuando una API responde, manda también un código numérico que dice cómo le fue a tu pedido. 200 = todo bien, 404 = no encontrado y 500 = el servidor falló. Una API te responde 404. ¿Qué significa?",
      codigo: [],
      opciones: ['Lo que pediste no existe', 'Todo salió bien', 'El servidor tuvo una falla'],
      correcta: 0,
      feedback: [
        "¡Correcto! 404 significa 'no encontrado': es como pedir en el restaurante un plato que no está en el menú. Seguro has visto esta página en internet.",
        "Todo bien es el código 200. Un 404 es justo lo contrario: algo de lo que pediste no se encontró.",
        "La falla del servidor es el 500. Un 404 significa que el problema está en lo que se pidió, no en la cocina."
      ]
    },
    {
      explicacion: "🪆 Muchas respuestas de APIs traen diccionarios dentro de otros diccionarios, como cajas dentro de cajas. Para llegar al dato abres una caja tras otra, con una clave a la vez. ¿Qué mostrará este código?",
      codigo: [`respuesta = {"codigo": 200, "datos": {"nombre": "Ana"}}`, 'print(respuesta["datos"]["nombre"])'],
      opciones: ['Ana', 'datos', `{"nombre": "Ana"}`],
      correcta: 0,
      feedback: [
        "¡Correcto! Primero abres la caja datos, que te da un diccionario, y de ahí abres la clave nombre, que te da Ana.",
        "datos es la primera clave que se usa para abrir una caja, pero no es lo que se muestra. Falta abrir la segunda.",
        "Ese es el contenido de la primera caja, pero el código abre una segunda clave, nombre, y muestra solo lo que hay ahí."
      ]
    },
    {
      tipo: "ordenar",
      explicacion: "🌎 Simulas lo que haría un programa al recibir la respuesta de una API del clima: recibe texto JSON, lo convierte y muestra un dato. Ordena los bloques. ¿Qué mostrará al final?",
      bloques: [
        'import json',
        `texto = '{"ciudad": "Lima"}'`,
        'datos = json.loads(texto)',
        'print(datos["ciudad"])'
      ],
      pista: "Primero hay que importar json para poder usarlo. Luego se tiene el texto, después se convierte con json.loads y por último se consulta el dato.",
      feedbackBien: "¡Perfecto! Importas json, recibes el texto, lo conviertes en diccionario y muestras la ciudad: Lima. Una API real hace lo mismo, solo que el texto llega por internet. Un hábito profesional: antes de usar los datos de una API, revisa que el código de respuesta sea 200. Si no, tus datos podrían estar vacíos o ser un error."
    }
  ]
});