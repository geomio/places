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

// Business Logic down here
function Place(location, landmark, time, name) {
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.name = name;
}
let placeData = new PlacesBeen();
let myPlace1 = new Place("Oregon", "Highway I-84 East", "Summer", "Multnomah Falls" )//see line 5 above this would have a id place0
let myPlace2 = new Place("Idaho", "Highway I-84 East", "Fall", "Pocatello" )// this would have id place1
placeData.addPlace(myPlace1);
placeData.addPlace(myPlace2);

// ideally user input above

console.log(myPlace1.location)
console.log(myPlace1.name)
console.log(myPlace2.location)
console.log(myPlace2.name)
console.log(placeData.placesList[1])
console.log(placeData.placesList[0])

// I need to know if this is actually making new id if i were to ad more and more places like place 0 place 1 ect
// i know that I need to use a submit function