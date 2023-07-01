CajaFrase=document.querySelector("textarea");
salida=document.querySelector(".output-prase");

botonEnc=document.querySelector(".encript");
botonDes=document.querySelector(".desencript");

salidaVacia=document.getElementById("1");
salidaLlena=document.getElementById("2");

botonEnc.onclick = encriptar;
botonDes.onclick = desencriptar;

fraseDefecto="Ingrese el texto aquí";

letra=["e","i","a","o","u"];
llaves=["enter","imes","ai","ober","ufat"];


function obtenerTexto(){
    return (CajaFrase.value);
}


function mostrarSalida(){
    if(salidaVacia.style.display!="none"){
        salidaVacia.style.display="none";
        salidaLlena.style.display="flex";
    }
    if(frase == ""){
        salidaVacia.style.display="block";
        salidaLlena.style.display="none";
    }
}

function encriptar(){
   frase=obtenerTexto();
   if (frase != fraseDefecto){
        for (var i=0; i<5; i++){
            frase=frase.replaceAll(letra[i],llaves[i])
        }
        salida.innerHTML= frase;
        mostrarSalida();
    }
   
   
}

function desencriptar(){
    frase=obtenerTexto();
    if (frase != fraseDefecto){
        for (var i=0; i<5; i++){
            frase=frase.replaceAll(llaves[i],letra[i])
        }
        salida.innerHTML= frase;
        mostrarSalida();
   }
   
}

document.getElementById("copy-text").onclick= function(){
navigator.clipboard.writeText(frase)
.then(() => {
    console.log("texto copiado correctamente: " + frase);
})
.catch(err => {
    console.log("error al copiar al portapapeles",err);
})
}

