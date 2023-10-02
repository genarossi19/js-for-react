// PROMESAS
//Usar Alt+Z para leer los cometarios
// /Codigo de callbacks.js escrito con promesas

function requestHandler(req,res){
    User.findById(req.userId)
    .then (function (user){
        return task.findById(user.taskId)
    })
    .then (function(task){
        task.completed = true;
        return task.save();
    })
    .then(function (){
        res.send('TASK COMPLETED');
    })
    .catch (function (errors){
        res.send(errors);
    })
}

//Con .then manejamos los casos de exito y con .catch capturamos los errores de cualquiera de los then
//Cuando una promesa continua luego de la otra, ademas del .then colocamos el return en la promesa anterior para que haya una continudad con los datos o funciones que una promesa necesita de otra
//Como se ve, las promesas facilitan el codigo comparado a los callbacks, pero hay incluso una mejor forma, los async await