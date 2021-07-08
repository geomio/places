function PlacesBeen() {
    this.placesList = {};
    this.currentId = 0;
}
// i want new items entered to  have new auto id such as place0 place2 place3
PlacesBeen.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.placesList[place.id] = place;
}

PlacesBeen.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

PlacesBeen.prototype.FindPlace = function(id) {
    if (this.placesList[id] != undefined) {
        return this.placesList[id];
    }
    return false;
}

PlacesBeen.prototype.deletePlace = function(id) {
    if (this.placesList[id] === undefined) {
        return false;
    }
    delete this.placesList[id];
    return true;
}

// Business Logic down here
function Place(location, landmark, time, name) {
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.name = name;
}

Place.prototype.fullPlace = function(){
    return this.location + " " + this.name;
}

// let myPlace1 = new Place("Oregon", "Highway I-84 East", "Summer", "Multnomah Falls" )//see line 5 above this would have a id place0
// let myPlace2 = new Place("Idaho", "Highway I-84 East", "Fall", "Pocatello" )// this would have id place1
// let testPlace = new Place("testplace", "another", "oneMore", "lastOne")
// placeData.addPlace(myPlace1);
// placeData.addPlace(myPlace2);
// placeData.addPlace(testPlace);





$(document).ready(function () {
    let placeData = new PlacesBeen();
    $("form#userInput").submit(function(event){
        $("#hide").show();
        const userLocation = $('input#locationInput').val();
        const userLandmark = $('input#landmarkInput').val();
        const userTime = $('input#timeInput').val();
        const userName = $('input#nameInput').val();
        let userPlace = new Place(userLocation, userLandmark, userTime, userName)
        placeData.addPlace(userPlace);
        console.log(placeData.placesList)
    event.preventDefault();
  });
});