//Cuando el objeto process es procesado el exit ejecuta esto
process.on("exit",
    function(codigo) {
        console.log("Saliendo de Marcha "+ codigo);
    }
);

console.log("Titulo: ", process.title);
console.log("S.O.: ", process.platform); //Sitema operativo
console.log("PID : ", process.pid); //ID del proceso
process.exit();
