


//Evento cambio de color
document.getElementById("azul").addEventListener("click", function() {
  this.style.backgroundColor = "black";
});

document.getElementById("rojo").addEventListener("click", function() {
  this.style.backgroundColor = "black";
});

document.getElementById("verde").addEventListener("click", function() {
  this.style.backgroundColor = "black";
});

document.getElementById("amarillo").addEventListener("click", function() {
  this.style.backgroundColor = "black";
});





// Presionando teclas
let colorGlobal;

document.addEventListener('keydown', function (event) {
const tecla = event.key;
saveColor(tecla);
});

const saveColor = (tecla) => {
const teclaVerificada = tecla.toLowerCase();

switch (teclaVerificada) {
  case 'a':
    colorGlobal = 'pink';
    changeBg(colorGlobal);
    break;
  case 's':
    colorGlobal = 'orange';
    changeBg(colorGlobal);
    break;
  case 'd':
    colorGlobal = 'cyan';
    changeBg(colorGlobal);
    break;
  case 'q':
    colorGlobal = 'purple';
    crearCuadro();
    break;
  case 'w':
    colorGlobal = 'gray';
    crearCuadro();
    break;

  case 'e':
    colorGlobal = 'brown';
    crearCuadro();
    break;

  default:
    break;
}
};

const changeBg = (color) => {
const element = document.getElementById('key');
element.style.backgroundColor = color;
};

const changeBgNew = (color, element) => {
element.style.backgroundColor = color;
};

const crearCuadro = () => {
const existElement = document.getElementById('new_key');
console.log('Cuadro function');
if (existElement) {
  changeBgNew(colorGlobal, existElement);
} else {
  const newDiv = document.createElement('div');
  newDiv.id = 'new_key';
  newDiv.style.height = '200px';
      newDiv.style.width = '200px';

  document.querySelector('body').appendChild(newDiv);
  changeBgNew(colorGlobal, newDiv);
}
};
