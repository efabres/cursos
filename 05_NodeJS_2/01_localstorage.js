//LocalStorage en produccion almacena los datos en los directorios temporales del Browser usado.
//En este caso no informa al usuario que a creado estos archivos como lo hacen las 'cookies'.

//primero verifico si ya esta creado mi localStorage
if (typeof localStorage === "undefined" || localStorage === null ) {
    var MiLocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new MiLocalStorage("./dir_datos"); //define el directorio donde va a guardar los datos (dir_datos)
}
//para el ejemplo: esto se ejecuta una vez para guardar los datos: cmd> node 01_localstorage.js
//Guardo los datos en archivos: setItem( nombre del archivo, valor )
//localStorage.setItem("Mi clave primera", "Un valor primero");
//localStorage.setItem("Mi clave segunda", "Un valor segundo");

//para el ejemplo: luego lo anterior se comenta y se ejecuta de nuevo
var item1 = localStorage.getItem("Mi clave primera");
var item2 = localStorage.getItem("Mi clave segunda");
console.log("Item1: "+ item1+ ", item2: "+ item2);