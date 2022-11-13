var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Bibliothèque"){
        reponse.value="Gut gemacht, los geht's!";
    }
    else{reponse.value="Falsche Antwort";
}
    }



