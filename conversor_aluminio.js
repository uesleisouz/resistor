 let resistencia = 0
 let resistividadeAlumi = 0.0282 // resistividade do condutor de alúminio
 let comprimento = 1555
 let secaoTransversal = 2.5

 resistencia = (resistividadeAlumi * comprimento) / secaoTransversal

 console.log("O valor da resistência é : " + resistencia);