function PlacesBeen() {
    this.place = {};
    this.currentId = 0;
}

PlacesBeen.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
}

PlacesBeen.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

// Business Logic down here
function Place(location, landmark, time, name) {
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.name = name;
}

let myPlace1 = new Place("Oregon", "Highway I-84 East", "Summer", "Multnomah Falls" )
// ideally user input above
console.log(myPlace1.location)

// I need to know if this is actually making new id if i were to ad more and more places like place 0 place 1 ect
// i know that I need to use a submit function