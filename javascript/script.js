
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

var palavraAntiga = document.querySelector("#cript");
var value;
var novaFrase;
var textoResultado;



// Não permite que o usuario escreva algum caractere especial. Bloqueou a tecla de espaço.


function impedirAcentuação() {

    var input = document.querySelector("#textoDigitado");
        input.addEventListener("keypress", function(e) {
            if(!checkChar(e)) {
             e.preventDefault();
            
            }
        });

        function checkChar(e) {
            var char = String.fromCharCode(e.keyCode);
  
            console.log(char);
            var pattern = '[a-zA-Z0-9]';
                if (char.match(pattern)) {
                   return true;
                }

        }

}


// Não permite que o usuario cole algum caractere especial
function impedirAcentuaçãoColar(){

    var input = document.querySelector("#textoDigitado");
    input.addEventListener("paste", function () {
        
        var regex = new RegExp("^[ 0-9a-zA-Z\b]+$");
        var self = this;
        
        setTimeout( function(){
        
            var text = self.value;
            
            if(!regex.test(text)) {             
                self.value = "";
            }
            
        }, 10);
    });    
}

//function criptografar() {
    
    palavraAntiga.addEventListener("click", function(criptografar){

        criptografar.preventDefault();
        var textoDigitado = document.querySelector("#textoDigitado");

        var value = textoDigitado.value;
        
        var novaFrase = value.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");  

        var textoResultado = document.querySelector('#msg')
        textoResultado.value = novaFrase;

        console.log(novaFrase) ;
      });     
   
//}

var descript = document.querySelector("#descript")
var voltarPalavra;

//function descriptografar(){

    descript.addEventListener("click", function(criptografar){

        criptografar.preventDefault();

        var value = textoDigitado.value;

        var voltarPalavra =  value.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");   

        var textoResultado = document.querySelector('#msg');
        textoResultado.value = voltarPalavra;

        console.log(voltarPalavra);
    });

//}

var copy = document.querySelector("#copy");

//function copiar() {

    copy.addEventListener("click", function(copiar){

        copiar.preventDefault();
        navigator.clipboard.writeText(msg.value);
        msg.value = ""
        
    });
//}

impedirAcentuação();
impedirAcentuaçãoColar();
cript.onclick = criptografar();
descript.onclick = descriptografar();
copy.onclick = copiar();

    