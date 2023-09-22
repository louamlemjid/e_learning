document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    inputnom =document.getElementById("nom").value;
    inputprenom=document.getElementById("prenom").value;
    inputemail=document.getElementById("email").value;
    inputtel=document.getElementById("tel").value;
    inputdate=document.getElementById("birthday").value;
    inputpass=document.getElementById("pass1").value;
    
    var objet={
        nom: inputnom,
        prenom: inputprenom,
        
        email: inputemail,
        tel: inputtel,
        date: inputdate,
        pass: inputpass

    };
    console.log(objet);
    window.alert("Verifiez si les informations que vous avez entrer sont valides !\n nom et prenom : " +objet.nom +" "+objet.prenom+ "\n Email : "+objet.email +"\n Numero de telephonne : "+objet.tel +"\n Date de naissance : "+objet.date +"\n Mot de passe : "+objet.pass);
});
