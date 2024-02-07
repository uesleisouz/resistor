 let resistencia = 0
 let resistividadeCobre = 0.0172 // resistividade do condutor de cobre
 let comprimento = 0
 let secaoTransversal = 1

 resistencia = (resistividadeCobre * comprimento) / secaoTransversal

 console.log("O valor da resistência é : " + resistencia);