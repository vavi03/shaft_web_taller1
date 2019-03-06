

//pagina cargar

function paginaCargada(){
//swiper

var swiperAboutUs = new Swiper('.swiperAboutUs', {
    pagination: {
      el: '.swiperAboutUs-pagination',
      dynamicBullets: true,
    },
});

var swiperEvents = new Swiper('.swiperEvents', {
  direction: 'vertical',
  pagination: {
    el: '.swiperEventsPagination',
    dynamicBullets: true,
  },
});


//parallax header img
var headerImg = document.getElementById('headerImg');
var parallaxInstance = new Parallax(headerImg);


//interaction top-works

var series = [
  {
    name: "Fate/EXTRA: Last Encore",
    id: 0
  },
  {
    name: "Anime 2",
    id: 1
  },
  {
    name: "Anime 3",
    id: 2
  }
];

var contentSeries = [
  {
    name: "Fate/EXTRA: Last Encore",
    description: "..,",
    id: 0,
    imgUrl: "/img/series/fate.png"
  },
  {
    name: "Anime 2",
    description: "..,",
    id: 1,
    imgUrl: "/img/series/fate.png"
  },
  {
    name: "Anime 3",
    description: "..,",
    id: 2,
    imgUrl: "/img/series/fate.png"
  }
];

/*
createButtons();

function createButtons () {

  for (let index = 0; index < series.length; index++) {
    const serie = series[index];

    createButton(serie);
  }
}

function createButton(s){

  var lista = document.getElementById('listSeries');

  var serie = document.createElement('div');
  serie.setAttribute('class', 'top-works__serie');

  var name = document.createElement('h3');
  name.setAttribute('class', 'top-works__name');

  name.innerHTML = s.name;
  
  serie.appendChild(name);

  lista.appendChild(serie);

}  

*/


var arraySeries = document.querySelectorAll('.top-works__serie');
var contenidoSeries= document.querySelectorAll('.content__informacionSerie');

function recorrerSeries(serie, index){
  if(index==0){
    mostrarContenido();
  }
function mostrarContenido(){
  
  //create content
   contenidoSeries.forEach(function(content){
      content.style.display='none';
   });
   contenidoSeries[index].style.display='block'; 
  console.log("holi");
}

serie.addEventListener('click', mostrarContenido);
}
arraySeries.forEach(recorrerSeries);

/*
//var arraySeries = document.getElementsByClassName('top-works__serie');
createListenerSeries();

function createListenerSeries(){

  for (let index = 0; index < arraySeries.length; index++) {
    var element = arraySeries[index];
   
    element.addEventListener("click", function(){ createContentSerie(index) });
  }
}

function createContentSerie(index){
  var content = document.getElementById("animeContent");
  console.log("ejecuté evento");
  content.innerHTML = contentSeries[index].name;
}
*/
}

window.addEventListener('load', paginaCargada);