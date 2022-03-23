
var diceTypeEl=document.querySelector('#dice-type');
var resultEl=document.querySelector('#result');
var rollDiceBtnEl=document.querySelector('.btn');
var chosenType;

//choose dice type for api 
rollDiceBtnEl.addEventListener('click',()=>{
    chosenType=diceTypeEl.options[diceTypeEl.selectedIndex].text;
    

    var getDiceApi =function(){
  
        var diceURL="http://roll.diceapi.com/json/" + chosenType;
    
            fetch(diceURL).then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                   console.log(data);
                   getDiceResult(data);
                  
                })
                } else {
                    alert("Something went wrong!");
                }
             })
            .catch(function(error){
                alert('Unable to connect to Dice Api');
            });
};
getDiceApi();

});
var getDiceResult=function(data){
    
    var result=data.dice[0].value;
    console.log(result);
    resultEl.innerHTML=result;



}





