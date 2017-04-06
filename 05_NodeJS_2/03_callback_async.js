//Cuando el objeto 'process' es procesado el exit ejecuta esto
process.on("exit",
    function(codigo) {
        console.log("Saliendo de Marcha " + codigo);
    }
);

function funCallback1(parametros) {
    console.log("funCallback 1 ha sido llamada con " + parametros);
}

function funCallback2(parametros) {
    console.log("funCallback 2 ha sido llamada con " + parametros);
}

miProceso("datos 1", funCallback1);
miProceso("datos 2", funCallback2);

function miProceso(datos, callback) {
    console.log("Titulo: ", process.title);
    console.log("S.O.: ", process.platform); //Sitema operativo
    console.log("PID : ", process.pid); //ID del proceso   
    callback("Parametros: " + process.title);
}