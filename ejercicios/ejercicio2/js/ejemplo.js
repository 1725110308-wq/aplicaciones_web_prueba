const boton = document.getElementById("mi_boton");

boton.addEventListener("click", ()=>{
    boton.textContent = "Si sirve";
    boton.style.backgroundColor = "black";
    console.log("Se hizo click" + new Date().toLocaleTimeString());
    
}
);