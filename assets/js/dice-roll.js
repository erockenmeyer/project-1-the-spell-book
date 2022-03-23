
var type =["d6","d20"];
var i=1;
var rollDice =function(){
  
   /* var diceURL="http://roll.diceapi.com/json/" +type[i];
    
    fetch(diceURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            console.log("Something went wrong!");
        }
    });*/

    const dicefetch =  fetch('http://roll.diceapi.com/' + type[i], {
        header:{
            'Accept': 'application/json'}
    });

    const diceResult = await dicefetch.json();
    var diceNumber=diceResult.value; 
    console.log(diceNumber);
    
    
}

rollDice();
