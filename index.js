const persona = {
    name: "Genaro",
    lastname: "Rossi",
    age: 20,
    address: {
        country: "Argemtina",
        city: "Trenque Lauquen",
        street: "Uruguay",
        number: 683
    },
    friends: ['Facundo', 'Camila','Abi'],
    saludar(){
        return "Hola gente"
    }
}

const mensaje = persona.name + " que vive en " + persona.address.city + " tiene "+  persona.friends.length + " amigos llamados " +  persona.friends;

let title = document.getElementById('title');
title.innerHTML= mensaje;