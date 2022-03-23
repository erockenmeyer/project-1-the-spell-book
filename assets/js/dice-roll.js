
var diceTypeEl=document.querySelector('#dice-type');
var resultEl=document.querySelector('#result');
var rollDiceBtnEl=document.querySelector('.btn');
var chosenType;
var rollTimes=document.querySelector('#times');

//choose dice type for api 
rollDiceBtnEl.addEventListener('click',()=>{
   
    chosenType=diceTypeEl.options[diceTypeEl.selectedIndex].text;
    
if(rollTimes.value>=1){
    var getDiceApi =function(){
  
        var diceURL="http://roll.diceapi.com/json/" + rollTimes.value+chosenType;
    
            fetch(diceURL).then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                   console.log(diceURL);
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
}
else{
    alert('please pick a number that is greater than 1');
}

});
var getDiceResult=function(data){
    resultEl.textContent = "";
    for (var i=0; i<rollTimes.value;i++){
    var result=data.dice[i].value;
    
    //resultEl.innerHTML=result;
    //create a container for each dice result
        var containerEl=document.createElement("div");
        //can put class list here
        //containEl.classList=
    //create span element to hold the result
        var resultSpanEl=document.createElement("span");
        resultSpanEl.textContent=result;
    //append container
        containerEl.appendChild(resultSpanEl);
    //append container to the DOM
        resultEl.appendChild(containerEl);

    }

}

function refreshPage(){
    window.location.reload();
} 



