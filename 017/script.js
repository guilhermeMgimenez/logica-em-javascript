function maiorNumero(valor1 = 0, valor2 = 0, valor3 = 0){
valor1 = parseFloat(valor1)
valor2 = parseFloat(valor2)
valor3 = parseFloat(valor3)



if(valor1 > valor2 && valor1 > valor3){
    document.querySelector("#resultado").innerHTML = "o numero dado foi " + valor1 
}
else if(valor2 > valor1 && valor2 > valor3){
    document.querySelector("#resultado").innerHTML = "o numero dado foi " + valor2
 }
else if(valor3 > valor1 && valor3 > valor2){
    document.querySelector("#resultado").innerHTML = "o numero dado foi " + valor3
 }
}
