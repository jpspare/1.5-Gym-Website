function initMap() {
    const hueco_tanks = {lat: 31.916125310084, lng: -106.04452887002675};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: hueco_tanks,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    });
    const marker = new google.maps.Marker({
        position: hueco_tanks,
        map: map,
    });
}

window.initMap = initMap;


function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
  }
  
  document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);