// gets the spell name from url
var getSpellName = function() {
    var queryString = document.location.search;
    var spellName = queryString.split("=")[1];

    // check that there is a spell name
    if (spellName) {
        // put it in the spell name spot & call info fetch function
        getSpellInfo(spellName);
    } else {
        document.location.replace("./index.html");
    }
}

var getSpellInfo = function(spell) {
    var apiUrl = "https://www.dnd5eapi.co/api/spells/" + spell;
    fetch(apiUrl).then(function(response) {
        // success
        if (response.ok) {
            response.json().then(function(data) {
                // send the spell info to be displayed
                console.log(data);
            });
        } else {
            document.location.replace("./index.html");
        }
    });
}

getSpellName();