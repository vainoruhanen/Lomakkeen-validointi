

var kayttajaIDtooShort = "\nKäyttäjä ID minimipituus 6";
var salasanaTyhja = "\nSalasana ei saa olla tyhjä";
var nimiTyhja = "\nNimi ei saa olla tyhjä";
var osoiteVaara = "\nOsoite ei saa olla tyhjä";
var postinumeroVaara = "\nPostinumeron pitää olla 5 numeroa";
var sahkopostiVaara = "\nLaita oikea sähköposti osoite";
var maaTyhja = "\nValitse maa";
var sukupuoliTyhja = "\nValitse sukupuoli";
var valitseKieli = "\nValitse kieli";

var virhetulostus = "Tarkista seuraavat virheet";







function validate(){
    var onTyhjia = false;
    let kayttajaid = document.forms["formi"]["kayttajaID"].value;
    if(kayttajaid.length < 6){
        onTyhjia = true;
        virhetulostus += kayttajaIDtooShort;
    }

    let salasana = document.forms["formi"]["salasana"].value;
    if(salasana== ""){
        onTyhjia = true; 
        virhetulostus += salasanaTyhja;
    }
    let nimi = document.forms["formi"]["nimi"].value;
    if(nimi== ""){
        onTyhjia = true;
        virhetulostus += nimiTyhja;
    }

    let osoite = document.forms["formi"]["osoite"].value;
    if(osoite== ""){
        onTyhjia = true;
        virhetulostus += osoiteVaara;
    }



    var maaForm = document.getElementById("maa");
    var valittu = maaForm.options[maaForm.selectedIndex].value;

    if(valittu != "suomi" || valittu != "ruotsi" || valittu != "muu"){
       virhetulostus += maaTyhja;
    }



    var postinumero = document.forms["formi"]["postinumero"].value;
    if(postinumero==""){
        onTyhjia = true;
        virhetulostus += postinumeroVaara;
    }
    else if (isNaN(postinumero)){
        onTyhjia = true;
        virhetulostus += postinumeroVaara;
    } 
    else if (postinumero.length != 5){
        onTyhjia = true;
        virhetulostus += postinumeroVaara;
    }
   

    let sahkoposti = document.forms["formi"]["sahkoposti"].value;
    if(sahkoposti== ""){
        onTyhjia = true;
        virhetulostus += sahkopostiVaara;
    }
    else if(sahkoposti.length < 3){
        onTyhjia = true;
        virhetulostus += sahkopostiVaara;
    }
   else if (!(sahkoposti.indexOf('@') > -1))
    { 
         onTyhjia = true;     
        virhetulostus += sahkopostiVaara;
    }

    var suomi = document.getElementById("suomi");
    var muu = document.getElementById("muu");
    if(!(muu.checked || suomi.checked)){
        onTyhjia = true;
        virhetulostus += valitseKieli;
    }

    var mies = document.getElementById("mies");
    var nainen = document.getElementById("nainen");
    if(!(mies.checked || nainen.checked)){
        onTyhjia = true;
        virhetulostus += sukupuoliTyhja;
    }





    if(onTyhjia == true){
        alert(virhetulostus);
        virhetulostus = "Tarkista seuraavat virheet";
    }

}
























