let text = prompt("Ingrese el nombre del alumno:", "");
document.getElementById("nombreUser").innerHTML = text.toUpperCase();

// Función para ingresar notas de HTML y calcular su promedio.
function notasHTML() {
  let notaHTML1In = prompt("Ingrese nota 1 [HTML]:", "");
  document.getElementById("htmlNota1User").innerHTML = notaHTML1In;
  let notaHTML2In = prompt("Ingrese nota 2 [HTML]:", "");
  document.getElementById("htmlNota2User").innerHTML = notaHTML2In;
  let notaHTML3In = prompt("Ingrese nota 3 [HTML]:", "");
  document.getElementById("htmlNota3User").innerHTML = notaHTML3In;
  if (notaHTML1In == 0 || notaHTML2In == 0 || notaHTML3In == 0) {
    document.getElementById("htmlUser").innerHTML = "Faltan notas";
  } else {
    document.getElementById("htmlUser").innerHTML = "HTML";
  }
  let ttlPromedio = parseInt(notaHTML1In) + parseInt(notaHTML2In) + parseInt(notaHTML3In);
  ttlPromedio = ttlPromedio || parseInt(0);
  document.getElementById("promedioHtml").innerHTML = (parseFloat(ttlPromedio) / 3).toFixed(2);
}
notasHTML();

// Función para ingresar notas de CSS y calcular su promedio.
function notasCSS() {
  let notaCSS1In = prompt("Ingrese nota 1 [CSS]:", "");
  document.getElementById("cssNota1User").innerHTML = notaCSS1In;
  let notaCSS2In = prompt("Ingrese nota 2 [CSS]:", "");
  document.getElementById("cssNota2User").innerHTML = notaCSS2In;
  let notaCSS3In = prompt("Ingrese nota 3 [CSS]:", "");
  document.getElementById("cssNota3User").innerHTML = notaCSS3In;
  if (notaCSS1In == 0 || notaCSS2In == 0 || notaCSS3In == 0) {
    document.getElementById("cssUser").innerHTML = "Faltan notas";
  } else {
    document.getElementById("cssUser").innerHTML = "CSS";
  }
  let ttlPromedio = parseInt(notaCSS1In) + parseInt(notaCSS2In) + parseInt(notaCSS3In);
  ttlPromedio = ttlPromedio || parseInt(0);
  document.getElementById("promedioCSS").innerHTML = (parseFloat(ttlPromedio) / 3).toFixed(2);
}
notasCSS();

// Función para ingresar notas de JS y calcular su promedio.
function notasJS() {
  let notaJS1In = prompt("Ingrese nota 1 [JS]:", "");
  document.getElementById("jsNota1User").innerHTML = notaJS1In;
  let notaJS2In = prompt("Ingrese nota 2 [JS]:", "");
  document.getElementById("jsNota2User").innerHTML = notaJS2In;
  let notaJS3In = prompt("Ingrese nota 3 [JS]:", "");
  document.getElementById("jsNota3User").innerHTML = notaJS3In;

  if (notaJS1In == 0 || notaJS2In == 0 || notaJS3In == 0) {
    document.getElementById("jsUser").innerHTML = "Faltan notas";
  } else {
    document.getElementById("jsUser").innerHTML = "JS";
  }

  let ttlPromedio = parseInt(notaJS1In) + parseInt(notaJS2In) + parseInt(notaJS3In);
  ttlPromedio = ttlPromedio || parseInt(0);
  document.getElementById("promedioJS").innerHTML = (parseFloat(ttlPromedio) / 3).toFixed(2);
}
notasJS();
    
