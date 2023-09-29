//Inline Arrow Functions y return objetcs

const showObject = ()=>({name: 'Genaro'})

const button = document.createElement("button")
button.innerText="Clickeame"
button.addEventListener('click', ()=> alert(showObject() + 'clicked')) //no muestra "Genaro clicked" es solo para mostrar el uso
document.body.append(button)