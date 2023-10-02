// ASYNC ()=>{AWAIT}
//Usar Alt+Z para leer los cometarios

async function requestHandler(req,res){
    try{
        const user = await User.findById(req.userId);
        const task = await Task.findById(user.taskId);
        task.completed = true;
        await tasks.save();
        res.send('TASK COMPLETED');
    }
    catch(e){
        res.send(e);
    }
}

//  EXPLICACION
//try-> codigos con casos de exito
//catch-> manejador de errores

//await -> Significa que el codigo va a tomar tiempo de ejecucion (lo que manejamos anteriormente con callbacks o con promesas) pero ahora lo manejamos con await
//async-> la funcion principal es asincrona, por lo que debe tener antes de function un async que permita el uso del await dentro de ella

//Cuando los await esperan un valor se pueden guardar en variables o constantes, o bien podriamos no poner nada. 
//Los multiples await consecutivos permiten que al terminar uno, continue con el otro, asi como el .then de las promesas
//A continuacion, veremos async-await en serie (secuencial) y paralelo
