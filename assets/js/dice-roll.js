
var diceTypeEl=document.querySelector('#dice-type');
var resultEl=$('#result');
var chosenType;


diceTypeEl.addEventListener('change',()=>{
    chosenType=diceTypeEl.options[diceTypeEl.selectedIndex].text;
   
});
var getDiceApi =function(){
  
    var diceURL="http://roll.diceapi.com/json/" + chosenType;
    
    fetch(diceURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            alert("Something went wrong!");
        }
    })
    .catch(function(error){
        alert('Unable to connect to Dice Api');
    });
};


