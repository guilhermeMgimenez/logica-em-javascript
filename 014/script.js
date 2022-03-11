 function cal_salario(){
     let salarioBruto,salarioLiquido,inss,sindicato,impRenda
     salarioBruto = document.querySelector("#salarioBruto").value
     salarioBruto = parseFloat(salarioBruto)
     inss = salarioBruto * 8/100
     sindicato = salarioBruto * 5/100
     impRenda = salarioBruto * 11/100
     salarioLiquido = salarioBruto - inss - sindicato - impRenda
     document.querySelector("#resultado").innerHTML = "salario bruto: R$ "+ salarioBruto
     document.querySelector("#resultado").innerHTML += "<br>"
     document.querySelector("#resultado").innerHTML += "inss (8%): R$ "+ inss
     document.querySelector("#resultado").innerHTML += "<br>"
     document.querySelector("#resultado").innerHTML += "sindicato (5%): R$ "+ sindicato
     document.querySelector("#resultado").innerHTML += "<br>"
     document.querySelector("#resultado").innerHTML += "imposto de renda (11%): R$ "+ impRenda
     document.querySelector("#resultado").innerHTML += "<br>"
     document.querySelector("#resultado").innerHTML += "salario liquido: R$ "+ salarioLiquido






 }


   