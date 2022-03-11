function celsius (temperatura){
    let celsius
    celsius = parseFloat(celsius)
    temperatura = parseFloat(temperatura)
    document.querySelector("#resultado").innerHTML = "informe a temperatura em graus fahrenheit:" + temperatura
    celsius = (temperatura - 32) / 9
    document.querySelector("#resultado").innerHTML = "a temperatura em celsius é de:" + celsius
}