

function validate(){
    var onTyhjia = false;
    let kayttajaid = document.forms["formi"]["kayttajaID"].value;
    if(kayttajaid.length < 6){
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

    var postinumero = document.forms["formi"]["postinumero"].value;
    if(postinumero==""){
        onTyhjia = true;
    }
    if (isNaN(postinumero)){
        onTyhjia = true;
    }
    if (postinumero.length != 5){
        onTyhjia = true;
    }
   

    let sahkoposti = document.forms["formi"]["sahkoposti"].value;
    if(sahkoposti== ""){
        onTyhjia = true;
    }
    if(sahkoposti.length < 3){
        onTyhjia = true;
    }
    if (!(sahkoposti.indexOf('@') > -1))
    {
      onTyhjia = true;
    }

    var suomi = document.getElementById("suomi");
    var muu = document.getElementById("muu");
    if(!(muu.checked || suomi.checked)){
        onTyhjia = true;
    }

    var mies = document.getElementById("mies");
    var nainen = document.getElementById("nainen");
    if(!(mies.checked || nainen.checked)){
        onTyhjia = true;
    }


    if(onTyhjia == true){
        alert("Tarkista kentät!");
    }

}
























