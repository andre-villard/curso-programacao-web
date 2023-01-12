const car = {
    type: "sedan",
    color: "black",
    name: "corola",
    id: 1944,
    completeCar: function(){
        return this.type + " | " + this.color + " | " + this.name + " | " + this.id
    },

    run: function() {
        return "vruuuuuuuum"
    }
};

if (car.hasOwnProperty("type")) {
    console.log(true)
};


for ( let prop in car) {
    console.log("propriaty " + prop + " = " + car[prop]);
};






