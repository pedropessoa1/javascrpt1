const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // quando não tem o indece 4 definido e eu peço para ele aparecer, não da erro, mais sim "undefined" = NÃO DEFINIDO

valores[4] = 10
console.log(valores)
console.log(valores.length) //Função length mostra quantos elementos tem no arrays

valores.push({id: 3}, false, null, "teste") //Função push é pra colocar elementos no arrays
console.log(valores)

console.log(valores.pop()) //retira do arrays o ultimo adicionado 
delete valores[0] // delete é pra tirar o elementos do indice selecionado 
console.log(valores)

console.log(typeof valores) //um arrays em JS em do tipo object