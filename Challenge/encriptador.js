function encriptar (){
   var texto = document.querySelector(".texto1").value;
   var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
   document.querySelector(".texto2").value = textoCifrado;
   document.querySelector(".texto1").value;
   }


   
var boton1 = document.querySelector(".encriptar"); boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector(".texto1").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".texto2").value = textoCifrado; document.querySelector(".texto1").value;

}

var boton2 = document.querySelector(".desencriptar"); boton2.onclick = desencriptar;

async function copyText() {
   try {
      const textArea = document.querySelector(".texto2");
     await navigator.clipboard.writeText(textArea.value);
     console.log('Text copied to clipboard');
   } catch (err) {
       if (err.name === 'NotAllowedError') {
           console.log('Permission to access the clipboard was denied')
       } else if (err.name === 'InvalidStateError') {
           console.log('Cannot write to clipboard from an input field')
       } else {
           console.error('Failed to copy text: ', err);
       }
   }
 }

 var button3 = document.querySelector(".copiar"); button3.onclick = copyText;



 /*  a = ai
   e = enter
   i = imes
   o = ober
   u = ufat
*/
  