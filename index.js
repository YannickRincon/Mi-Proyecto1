//Parte uno. Se definen variables para manipular los botones y para esconder 
//los contenidos de usuario y Admin
const filterButton = document.getElementById('filterButton');
const featureElements = document.querySelectorAll('.feature');
const imageItems = document.querySelectorAll('.image-item');
const clearFilterButton = document.getElementById('clearFilterButton');
const listaProd = document.getElementById('lista-productos');
const home = document.getElementById('iniciar');
////////////////////////////////////////////////////

//Parte dos. Se esconden los contenidos de usuario y admin
//Para solo mostrar los botones de opciones usuario y admin
home.style.display='none';

listaProd.style.display = 'none';

imageItems.forEach(item => {
  item.style.display = 'none';
});
////////////////////////////////////////////////////////////

//Parte tres. Se definen las variables para manipular los botones
//de usuario y admin
const userButton = document.getElementById('userButton');
const adminButton = document.getElementById('adminButton');
const userButtons = document.getElementById('userButtons');
///////////////////////////////////////////////////////////////

//Parte cuatro. Se muestran los elementos ocultos al elegir Usuario o admin
userButton.addEventListener('click', () => {
  userButtons.style.display = 'none';
  imageItems.forEach(item => {
    item.style.display = 'block';
  });
  home.style.display='block';
});

adminButton.addEventListener('click', () => {
  userButtons.style.display = 'none';
  listaProd.style.display = 'block';
  home.style.display='block';
  });
///////////////////////////////////////////////////////////////////////////
///Este 
home.addEventListener('click',() =>{
  userButtons.style.display = 'block';
  listaProd.style.display = 'none';
  home.style.display='none';
  
  imageItems.forEach(item => {
  item.style.display = 'none';
});
});


filterButton.addEventListener('click', () => {
  const selectedFeature = prompt('Escriba "regado semanal" o "regado mensual"');
  
  imageItems.forEach(item => {
    const feature = item.querySelector('.feature');
    if (feature.textContent === selectedFeature || selectedFeature === '') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

clearFilterButton.addEventListener('click', () => {
    imageItems.forEach(item => {
      item.style.display = 'block';
    });
  });
///////////////////////////////////////
const cactus = [
    {
      imagen: 'images/1.jpg',
      nombre: 'Tubulus',
      regado: 'mensual',
      precio: '$80',
      stock: 120
    },
    {
      imagen: 'images/2.jpg',
      nombre: 'Niorum',
      regado: 'semanal',
      precio: '$10',
      stock: 140
    },
    {
        imagen: 'images/3.jpg',
        nombre: 'Florus',
        regado: 'semanal',
        precio: '$35',
        stock: 87
    },
    {
        imagen: 'images/4.jpg',
        nombre: 'Blancus',
        regado: 'semanal',
        precio: '$25',
        stock: 210
      },
    {
        imagen: 'images/5.jpg',
        nombre: 'Puntus',
        regado: 'semanal',
        precio: '$40',
        stock: 35
      },
      {
        imagen: 'images/6.jpg',
        nombre: 'Roundus',
        regado: 'mensual',
        precio: '$85',
        stock: 70
      },
  ];
  
  const listaProductos = document.getElementById("lista-productos");


  cactus.forEach(cactus => {
    const li = document.createElement("li");
    li.innerHTML = `${cactus.nombre},<br>Stock: ${cactus.stock},Regado: ${cactus.regado},Precio: $${cactus.precio}`;
    listaProductos.appendChild(li);
  });
  
///////////////////////
