function initMap() {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const mapUser = new google.maps.Map(document.getElementById('mapUser'), {
        center: userLocation,
        zoom: 10
      });
  
      const mapCanada = new google.maps.Map(document.getElementById('mapCanada'), {
        center: { lat: 56.1304, lng: -106.3468 }, // Example Canadian city coordinates
        zoom: 6
      });
    });
  }
  