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

function printInfo({name}){
    return '<h1>Hola ' + name + '</h1>'

}document.body.innerHTML = printInfo(persona)