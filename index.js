const ol = document.createElement('ol')



fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
       return response.json()
    }).then((data)=>{
        console.log(data)
        data.forEach((post)=>{
            const li = document.createElement('li')
            li.innerText = post.title
            ol.append(li)

        })
        document.body.append(ol)
    
    })

console.log('asincronia')

//async await

async function loadData(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await respuesta.json()
}

loadData()

console.log('asincronia2')