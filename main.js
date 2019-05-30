let lat = 51.5083;
let long = -0.1257;
let inp = document.querySelector(".ipAdd");
let mapI = document.querySelector(".mapImg");

function pressEnt(event) {
    if (event.which === 13) {
        findLoc();
    }
}

function currLoc() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            showLocation();
        });
    }
}

function findLoc() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const asdf = "${proxy}api.ipinfodb.com/v3/ip-country/?key=94daef1e47ade07d6cfe0ee33aae591967e236b0f70a4f83640a270dabd69370&ip=${inp.value}http://api.ipstack.com/${inp.value}?access_key=ed5fea0677c0e772c606a40e9ecf1cf4&format=1"
    const findIP = `http://api.ipstack.com/${inp.value}?access_key=ed5fea0677c0e772c606a40e9ecf1cf4&format=1`;

    fetch (findIP)
        .then (response => {
            return response.json();
        })
        .then (data => {
            lat = data.latitude;
            long = data.longitude;
            showLocation();
        })

}

function showLocation() {
    let img = document.querySelector(".mapImg");
    const map = `https://image.maps.api.here.com/mia/1.6/mapview?c=${lat}%2C${long}&z=10&app_id=60pr8vGsEFH8PuKZli2T&app_code=NvdW0S8lL5xmvBZoZia3qQ`;
    img.src = map;
}