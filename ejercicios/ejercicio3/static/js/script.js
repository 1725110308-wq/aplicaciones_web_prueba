//Estructura de una funcion base
function suma(num1,num2){
    return num1+num2;
};

//estructura con flecha
const res = (num1,num2)=>num1-num2;

//tipos de datos primitivos

const texto = "hola mundo;";
const numero = 1;
const boleano = true;
const nulos = null;

//arreglos o listas

const personas = ["djah", "jonh","carla"];

//objetos literales 
const persona = {
    nombre: "dejah thoris",
    email: "dejah2@gmail.com",
    edad: 20,
    activo: true
};
/* variables
   const = variables que no van a ser reasignadas
   let = variables cuyo valor cambiara con el tiempo
   var _ obsoleto, variables que cambian de valor
*/

//uso de consola para depuracion
console.log(persona);
console.log("texto ",texto);
console.log("numero ",numero);
console.log("boleano ",boleano);
console.log("nulo ",nulos);
console.log(res (12,5));
console.log(suma (25,8494165416425));

let parrafo0 = document.getElementById("parrafo2");
parrafo0.textContent="jajaja cambiado desde js";
console.log(parrafo0.textContent);