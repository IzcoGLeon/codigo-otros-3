// Tenemos un li de productos
// Arreglo de objetos 

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

// Referencias de los elementos del Dom de los que se obtendrá el valor y donde se mostrarán productos

const list = document.getElementById("lista-de-productos");
const input = document.querySelector('.input');


// Se define la función para mostrar los productos filtrados en el DOM
const displayProductos = (productos) => {


  //Se itera sobre el arreglo de productos filtrados para la inserción de elementos con sus respectivas clases ya definidas en el archivo CSS
  for (let i = 0; i < productos.length; i++) {
    var divEl = document.createElement("div");
    divEl.classList.add("producto");

    var title = document.createElement("p");
    title.classList.add("titulo");
    title.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    divEl.appendChild(title);
    divEl.appendChild(imagen);

    list.appendChild(divEl);
  }
}

const botonDeFiltro = document.querySelector("button");

// Se proporciona una referencia a lafunción
botonDeFiltro.onclick = function filtrar() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  