function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}
var map;
var latlong={
   lat: -33.4488897,
   lng: -70.6692655
}

function initMap() {
var directionsService= new google.maps.DirectionsService;
var directionsDisplay= new google.maps.DirectionsRenderer;
map = new google.maps.Map(document.getElementById('map'), {
       center: {
           lat: latlong.lat,
           lng: latlong.lng},
     zoom: 12
       });
directionsDisplay.setMap(map);
};


var buscarCiudad= function(){
var origen = $('#origen');
var destino = $('#destino');
var boton = $('#buscar');
$("#buscar").click(function(){
  if ( origen.val() !=0 & destino.val() !=0 ){
    boton.removeAttr('disabled');
    boton.click(botonBuscar);
    $('.lista-carros').css("display", "table");
    }
  else{
    alert("escoge una ciudad");
  }
});


function botonBuscar(){
calcularRuta(directionOrigen, directionDestino);
}

};

document.getElementById('origen').addEventListener('change', buscarCiudad);
document.getElementById('destino').addEventListener('change',buscarCiudad());


function calculateAndDisplayRoute(directionsService, directionsDisplay){

directionsService.route({
origin: document.getElementById('origen').value,
destination: document.getElementById('destino').value,
travelMode: google.maps.TravelMode.DRIVING
}, function(response, status){
if (status === google.maps.DirectionsStatus.OK){
directionsDisplay.setDirections(response);
} else {
console.log('Direction request failed due to' + status);
}
});

}

$(".lista-carros input").click(function(){
   var hermano=$('#cant').val();
   var cantidad =$("#cantidad").val();
   if(hermano==cantidad){
    alert("ok");
   }

           
});













