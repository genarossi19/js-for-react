//Return en funciones y String Literals
const button = document.createElement('button')
button.innerText='Clickeame'
const isAuthorized = false;
button.addEventListener('click',()=>{
    if(isAuthorized) return alert('Esta autorizado')
    alert('No esta autorizado')
})
button.style = `background: ${isAuthorized ? 'blue' : 'red'};`
document.body.append(button)