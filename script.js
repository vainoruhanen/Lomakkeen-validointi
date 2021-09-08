

function checkIfEmpty(){
    var onTyhjia = false;
    let kayttajaid = document.forms["formi"]["kayttajaID"].value;
    if(kayttajaid== ""){
        onTyhjia = true;
    }

    let salasana = document.forms["formi"]["salasana"].value;
    if(salasana== ""){
        onTyhjia = true;
    }
    let nimi = document.forms["formi"]["nimi"].value;
    if(nimi== ""){
        onTyhjia = true;
    }

    let osoite = document.forms["formi"]["osoite"].value;
    if(osoite== ""){
        onTyhjia = true;
    }

    let postinumero = document.forms["formi"]["postinumero"].value;
    if(postinumero== ""){
        onTyhjia = true;
    }

    let sahkoposti = document.forms["formi"]["sahkoposti"].value;
    if(sahkoposti== ""){
        onTyhjia = true;
    }

    if(onTyhjia == true){
        alert("kentät ei saa olla tyhjiä");
    }

}
























