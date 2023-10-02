//CALLBACKS
//Usar Alt+Z para ver los comentarios
//Supongamos que tenemos un servidor en nodejs el cual usamos para manejar peticiones que vienen de los usuarios y tratamos de dar respuesta

//manejador de la peticion
function requestHandler(req,res){
    User.findById(req.UserId, (err,user)=>{
        if(err){res.send(err)}
        else{
            task.findById(user.taskId, (err,task)=>{
                if(err) return res.send(err);
                else{
                    task.completed = true;
                    task.save((err)=>{
                        if(err) return res.send(err);
                        else{
                            res.send('TASK COMPLETED')
                        }
                    })
                }
            })
        }
    })
}

//  EXPLICACION
//Consulto un usuario a traves de un Id con User.findById. Como esta funcion va a esperar a la base de datos, node no se queda esperando la respuesta si no que seguiria con el codigo debajo, por eso si queremos hacer otras peticiones posteriores a la peticion anterior (del usuario) se debe hacer dentro de dicha funcion. 
//Luego valido si ocurre un error, envia respuesta del error. Si no hay error, vuelvo a consultar a la base de datos, en este caso por tareas que pertenecen al usuario encontrado. Como esta consulta tambien va a tomar tiempo, tambien hacemos una funcion que devuelve un error o tareas si no existe error.
//Si no existe error actualiza las tareas a completed y las guarda. Como guardarla tambien implica un manejo de la base de datos, se utiliza una funcion que devuelve error si hay, y si no hay devuelve una respuesta de tarea completada. 

//El codigo anterior es valido, pero conlleva una piramide muy grande complejizando un codigo para una peticion simple. Por eso se reemplaza los CALLBACKS por las PROMESAS