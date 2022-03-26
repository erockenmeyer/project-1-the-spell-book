
var diceTypeEl=document.querySelector('#dice-type');
var resultEl=document.querySelector('#result');
var rollDiceBtnEl=document.querySelector('.btn');
var chosenType;
var rollTimes=document.querySelector('#times');
var modalEl=document.querySelector('#modal');
var closeIconEl=document.querySelector('#close-icon');
var errorModalEl=document.querySelector('#error-modal');
var wrongModalEl=document.querySelector('#wrong-modal');

//choose dice type for api 
rollDiceBtnEl.addEventListener('click',()=>{
   
    chosenType=diceTypeEl.options[diceTypeEl.selectedIndex].text;
    
if(rollTimes.value>=1){
    var getDiceApi =function(){
        
  
        var diceURL="https://rolz.org/api/?" + rollTimes.value+chosenType+".json";
    
            fetch(diceURL).then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                   console.log(diceURL);
                   getDiceResult(data);
                  
                })
                } else {
                    wrongModalEl.style.display = "block";
                    closeIconEl.onclick=function(){
                        wrongModalEl.style.display = "none";
                    }
                }
             })
            .catch(function(error){
                errorModalEl.style.display = "block";
                errorModalEl.onclick=function(){
                    errorModalEl.style.display = "none" ;
                }
            });
};
getDiceApi();
}
else{
    modalEl.style.display = "block";
    closeIconEl.onclick=function(){
        modalEl.style.display="none";
    }
}

});
var getDiceResult=function(data){
    resultEl.textContent = "";
    var result=data.details;
    resultEl.innerHTML=result;
    

}







