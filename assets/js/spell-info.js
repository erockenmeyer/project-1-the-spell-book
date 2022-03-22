var spellNameEl = document.getElementById("spell-name");
var spellInfoEl = document.getElementById("spell-info");

// gets the spell name from url
var getSpellName = function () {
    var queryString = document.location.search;
    var spellName = queryString.split("=")[1];

    // check that there is a spell name
    if (spellName) {
        // call info fetch function
        getSpellInfo(spellName);
    } else {
        document.location.replace("./index.html");
    }
}

var getSpellInfo = function (spell) {
    var apiUrl = "https://www.dnd5eapi.co/api/spells/" + spell;
    fetch(apiUrl).then(function (response) {
        // success
        if (response.ok) {
            response.json().then(function (data) {
                // send the spell info to be displayed
                displaySpellInfo(data);
            });
        } else {
            document.location.replace("./index.html");
        }
    });
}

var displaySpellInfo = function (info) {
    spellNameEl.textContent = info.name;
    // make array to iterate through
    var spellInfo = Object.entries(info);
    console.log(spellInfo);

    // iterate through array
    for (var i = 0; i < spellInfo.length; i++) {
        // create elements to hold info name & info
        var infoContainer = document.createElement("div");
        var nameEl = document.createElement("span");
        var infoEl = document.createElement("p");

        // switch case to fill content
        var array = spellInfo[i];
        var key = array[0];
        var value = array[1];

        // use switch case to check what to print
        switch (key) {
            case 'level':
                nameEl.textContent = "Level";
                infoEl.textContent = value;
                break;
            case 'classes':
                nameEl.textContent = "Class";
                infoEl.textContent = value;
                break;
            case 'school':
                nameEl.textContent = "School";
                infoEl.textContent = value;
                break;
            case 'components':
                nameEl.textContent = "Components";
                infoEl.textContent = value.join(", ");
                break;
            case 'material':
                nameEl.textContent = "Material";
                infoEl.textContent = value;
                break;
            case 'casting_time':
                nameEl.textContent = "Casting Time";
                infoEl.textContent = value;
                break;
            case 'duration':
                nameEl.textContent = "Duration";
                infoEl.textContent = value;
                break;
            case 'concentration':
                nameEl.textContent = "Concentration";
                if (value) {
                    infoEl.textContent = "Yes";
                } else {
                    infoEl.textContent = "No";
                }
                break;
            case 'ritual':
                nameEl.textContent = "Ritual";
                if (value) {
                    infoEl.textContent = "Yes";
                } else {
                    infoEl.textContent = "No";
                }
                break;
            case 'attack_type':
                nameEl.textContent = "Attack Type";
                infoEl.textContent = value;
                break;
            case 'range':
                nameEl.textContent = "Range";
                infoEl.textContent = value;
                break;
            case 'dc':
                nameEl.textContent = "DC";
                infoEl.textContent = value;
                break;
            case 'desc':
                nameEl.textContent = "Description";
                infoEl.textContent = value;
                break;
            case 'higher_level':
                if (value.length === 0) {
                    break;
                }
                nameEl.textContent = "At higher levels";
                infoEl.textContent = value;
                break;
            case 'damage':
                nameEl.textContent = "Damage";
                infoEl.textContent = value;
                break;
            default:
                break;
        }

        // append to dom
        infoContainer.appendChild(nameEl);
        infoContainer.appendChild(infoEl);
        spellInfoEl.appendChild(infoContainer);
    }
}


getSpellName();