//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var cargo_propiedad = 0.35; // 35%
var cargo_salario = 0.05; // 5%

var hijos_recargo = 0.2; // 20%

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final
var precio_final = 0;

var contizacion_activa = true;

do {
  //Mensajes de alerta para ingresar datos
  var nombre = prompt("Ingrese su nombre, por favor");

  if ("salir" === nombre.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }

  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");

  if ("salir" === edad.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }

  var casado = prompt("¿Está casado actualmente?", "si/no");

  if ("salir" === casado.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge;
  if ("SI" == casado.toUpperCase()) {
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
  }

  if ("salir" === edad_conyuge.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }
  //convirtiendo las edades ingresadas a números
  var edad_numero = parseInt(edad);
  var edad_conyuge_numero = 0;
  //convirtiendo la edad del cónyuge si se esta casado/a
  if ("SI" == casado.toUpperCase()) {
    edad_conyuge_numero = parseInt(edad_conyuge);
  }

  var hijos = prompt("¿Tiene hijos o hijas?");

  if ("salir" === hijos.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos;
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  cantidad_hijos = parseInt(hijos);

  // Confirmando si el usuario tiene propiedades.

  var propiedades = prompt(
    "Tienes propiedades? Por favor, ingresa la cantidad!",
  );

  if ("salir" === propiedades.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }

  var propiedades_numero = parseInt(propiedades);

  //Solicitando el salario del cliente

  var salario = prompt("Por favor indicar tu salario mensual.");

  if ("salir" === salario.toLocaleLowerCase()) {
    contizacion_activa = false;
    break;
  }

  var salario_numero = parseInt(salario);

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
  if (edad_numero >= 18 && edad_numero < 25) {
    //Calculamos el recargo en base a la edad
    recargo = precio_base * edad_18;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo;
  } //aqui puede colocar un else if() con el siguiente rango
  else if (edad_numero >= 25 && edad_numero < 50) {
    recargo = precio_base * edad_25;
    recargo_total = recargo_total + recargo;
  } else if (edad_numero >= 50) {
    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;
  }

  /**
   * 2. Recargo por la edad del conyuge
   */

  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo = precio_base * casado_18;

    recargo_total = recargo_total + recargo;
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo = precio_base * casado_25;

    recargo_total = recargo_total + recargo;
  } else if (edad_conyuge_numero >= 50) {
    recargo = precio_base * casado_50;

    recargo_total = recargo_total + recargo;
  }

  /**
   * 3. Recargo por la cantidad de hijos
   */

  if (cantidad_hijos >= 1) {
    recargo = cantidad_hijos * hijos_recargo;

    recargo_total = recargo_total + recargo;
  }

  /**
   * 4. Recargo por la cantidad de propiedades
   */

  if (propiedades_numero >= 1) {
    var cargo_todas_propiedades = propiedades_numero * cargo_propiedad;
    recargo = precio_base * cargo_todas_propiedades;

    recargo_total = recargo_total + recargo;
  }

  /**
   * 5. Recargo por el 5% del salario del usuario.
   */

  if (salario_numero >= 1) {
    recargo = salario_numero * cargo_salario;

    recargo_total = recargo_total + recargo;
  }

  precio_final = precio_base + recargo_total;
  //Resultado
  alert("Para el asegurado " + nombre);
  alert("El recargo total sera de: " + recargo_total);
  alert("El precio sera de: " + precio_final);
} while (contizacion_activa);
