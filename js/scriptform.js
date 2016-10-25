

var sexe = document.getElementsByTagName("sexe_c");
var prenom = document.getElementById("prenom");
var age = document.getElementById("age");
var pseudo = document.getElementById("pseudo");
var password = document.getElementById("password");
var passwordc = document.getElementById("passwordc");
var pays = document.getElementById("pays");
var newsletter = document.getElementById("chnewsletter");
var nom = document.getElementById("nom");

var err_sexe = document.getElementsByTagName("err_sexe");
var err_prenom = document.getElementById("err_prenom");
var err_age = document.getElementById("err_age");
var err_pseudo = document.getElementById("err_pseudo");
var err_password = document.getElementById("err_password");
var err_passwordc = document.getElementById("err_passwordc");
var err_pays = document.getElementById("err_pays");
var err_nom = document.getElementById("err_nom");

var valider = document.getElementById("valider");

var rg_nom = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var rg_num = /[0-9]*/;

valider.addEventListener('click',validerform);


function validerform(e){
	if(validernom() == true){
		e.preventDefault();
	}else 	if(validerprenom() == true){
		e.preventDefault();
	}else 	if(validerage() == true){
		e.preventDefault();
	}
}


function validernom(){
	if(nom.value == ""){
		err_nom.innerHTML = "Champ vide";
		err_nom.style.color = "red";
		return true;
	}else if(rg_nom.test(nom.value) == false){
		err_nom.innerHTML = "Format incorrect";
		err_nom.style.color = "red";
		return true;
	}else{
		err_nom.innerHTML = "";
		return false;
	}
}

function validerprenom(){
	if(prenom.value == ""){
		err_prenom.innerHTML = "Champ vide";
		err_prenom.style.color = "red";
		return true;
	}else if(rg_nom.test(prenom.value) == false){
		err_prenom.innerHTML = "Format incorrect";
		err_prenom.style.color = "red";
		return true;
	}else{
		err_prenom.innerHTML = "";
		return false;
	}
}

function validerage(){
	if(parseFloat(age.value)<5 || parseFloat(age.value)>140){
		err_age.innerHTML = "Age doit etre entre 5 et 140";
		err_age.style.color = "red";
		return true;
	}else if(rg_num.test(prenom.value) == false){
		err_age.innerHTML = "Format incorrect";
		err_age.style.color = "red";
		return true;
	}else{
		err_age.innerHTML = "";
		return false;
	}
}

function validerpassword(){
	if(parseFloat(age.value)<5 || parseFloat(age.value)>140){
		err_age.innerHTML = "Age doit etre entre 5 et 140";
		err_age.style.color = "red";
		return true;
	}else if(rg_num.test(prenom.value) == false){
		err_age.innerHTML = "Format incorrect";
		err_age.style.color = "red";
		return true;
	}else{
		err_age.innerHTML = "";
		return false;
	}
}