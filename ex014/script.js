var valor = Number(prompt9("Digite o valor da comprar"))
var desconto = prompt9("Digite o valor da comprar")
var resultado = (valor - (valor/100*10))

if (desconto == "des10"){
    alert(`O valor da comprar com desconto é de ${resultado}`)
}
else {
    alert("Cupon invalido")
    alert(`O valor da comprar é ${valor}`)
    
}