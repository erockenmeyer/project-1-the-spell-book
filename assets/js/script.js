var getSpellList = function(type, keyword) {

    // checks for multiple types
    if (type === "level" || type === "school") {
        // format api url
        var apiUrl = "https://www.dnd5eapi.co/api/spells?" + type + "=" + keyword;
    } else {
        // turns key into array
        var splitKey = keyword.split(" ");
        var levels = [];
        var schools = [];

        // checks each variable in the array and assigns to either levels or schools arrays
        for (var i = 0; i < keyword.length; i++) {
            var char = splitKey[i];
            if (parseInt(char)) {
                levels.push(char);
            } else {
                schools.push(char);
            }
        }

        // turns both arrays into strings
        var lvlString = levels.join(",");
        var schoolString = schools.join(",");

        var apiUrl = "https://www.dnd5eapi.co/api/spells?level=" + lvlString + "&school=" + schoolString;
    }

    // make request to url
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        } else {
            console.log("Something went wrong!");
        }
    })
}