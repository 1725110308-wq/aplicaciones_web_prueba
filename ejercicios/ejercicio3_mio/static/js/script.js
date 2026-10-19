function sumar(){
    console.log("boton sumar");
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    const resultado=document.getElementById("Resul");
    console.log("num1:",num1,"\nnum2:", num2);
    const suma=parseFloat(num1)+parseFloat(num2);
    console.log("resultado:", suma);
    resultado.value=suma;
};
function restar(){
    console.log("boton restar");
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    const resultado=document.getElementById("Resul");
    console.log("num1:",num1,"\nnum2:", num2);
    const res=parseFloat(num1)-parseFloat(num2);
    console.log("resultado:", res);
    resultado.value=res;
};
function multi(){
    console.log("boton multipl");
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    const resultado=document.getElementById("Resul");
    console.log("num1:",num1,"\nnum2:", num2);
    const mul=parseFloat(num1)*parseFloat(num2);
    console.log("resultado:", mul);
    resultado.value=mul;
};
