//Spread Operator, para concatenar
//Arrays

const names = ['ryan','joe','maria']
const newNames = ['marcos','mario','john']
console.log([...names, ...newNames])

//Objects

const user={
    name: 'Genaro',
    lastname: 'Rossi'
}
const address={
    street: 'main street 123',
    city: 'Buenos Aires'
}

const userInfo={
    ...user,...address
}

console.log(userInfo)