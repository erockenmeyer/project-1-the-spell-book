
var type=["d6", "d20"];

var rollDice =function(type){
    var diceURL="http://roll.diceapi.com/" + type[i];
    
    fetch(diceURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            console.log("Something went wrong!");
        }
    })
}


rollDice();
