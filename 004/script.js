function media(n1,n2,n3,n4){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    n4 = parseFloat(n4)
   

    let media

   

    console.log("Digite suas notas!")

    console.log("Qual foi a primeira nota?", n1)

    console.log("Qual foi a segunda nota?", n2)

    console.log("Qual foi a terceira nota?", n3)

    console.log("Qual foi sua quarta nota?", n4)

   

    media = (n1 + n2 + n3 + n4) / 4

    document.querySelector("#resultado").innerHTML = "A media dos numeros é: " + media

    console.log("Sua média foi de:", media)

}