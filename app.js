//Imprimir el titulo del document en la consola
console.log("El titulo de esta pagina es: " + document.title);

//guardar el titulo en una variable
let titulo = document. querySelector("#titulo-principal");


console.log(titulo);

//Extraer y editar propuedades
console.log(titulo.textContent);
titulo.textContent = "Nuevo titulo de la pagina";
titulo.style.color = "red";
titulo.style.backgroundColor = "pink";
titulo.style.fontSize = "20px";


//agregar texto sin borde a lo anterior

titulo.textContent = titulo.textContent + "Texto Nuevo agregado al titulo";

titulo.textContent += " Texto Nuevo agregado al titulo";

let parrafo = document.querySelector("#parrafo-principal");

parrafo.innerHTML += "nuevo texto" + "<i> pero este texto en cursiva</i>";
