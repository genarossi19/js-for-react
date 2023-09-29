//Arrays

const names = ['ryan','joe','maria']

//forEach: recorre elementos del arreglo

names.forEach(name => {
    console.log(name) 
});
//map: recorre el arreglo y devuelve un nuevo arreglo
const newName = names.map(name=>{return `Hola ${name}`})

console.log("Nuevo arreglo")
console.log(newName)

//find: busca un elemento en el arreglo

const nameFound = names.find(name =>{
    if (name === 'joe') return name;
})

console.log(`Nombre encontrado: ${nameFound}`)

//filter: crear un nuevo arreglo con elementos filtrados (elementos que cumplen cierta condicion)

const filterNames = names.filter(name=>{
    if(name !== 'joe') return name
})
console.log("Nuevo arreglo FILTRADO")
console.log(filterNames)
//--------------------------------------------------------------------------------------//

//Operaciones entre Arrays
//creo un segundo array
const newNames = ['marcos', 'mario','john']
//concat: los concateno en un nuevo array
const arrayConcat = names.concat(newNames)
console.log(`Array concatenado: ${arrayConcat}`)
