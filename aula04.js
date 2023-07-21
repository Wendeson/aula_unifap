/* let livros = {
   
}


if (Object.entries(livros).length === 0) {
    console.log('vazio')
} else {
    console.log('n vazio')
}
 */

/* let listaDeCompras = {
    produtos:{
        acai: 10,
        leite: 10,
        pao: 10
    }
}

soma = 0 
for( let i = 0; i < Object.values(listaDeCompras.produtos).length; i++){
    soma += Object.values(listaDeCompras.produtos)[i];
   
} */


// for(let i in Object.values(listaDeCompras.produtos)) {
//     soma +=  Object.values(listaDeCompras.produtos)[i]
// }


// for(let valores of Object.values(listaDeCompras.produtos)) {
//     soma += valores
// }

/* console.log(soma) */
/* console.log(listaDeCompras.produtos.acai + listaDeCompras.produtos.leite) */


/* let livros = {
   'o iluminado': 50,
   'o hobbit': 0,
   'rambo': 16 
}

let livroN = Object.values(livros)

for (let livroN of values){
    console.log(livroN)
} */






/* if (Object.values(livros).length === 0) {
    console.log(Object.values(livros))
} */ 


//FUNCOES



/* function somaA (array){
    soma = 0
    for( let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma
}

let array = [1, 2, 3]

somaA(array)

console.log(somaA(array)) */

/* function filterString(array){
    
}

const carac = ['digimon', 'pokemon', 'pikachu', 'squar', 'ttttt']
const res = carac.filter((carac3) => carac3.length <= 5)

console.log(res)
 */


function retornaNNumerosPares(n) {

    let numerosPares = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}
retornaNNumerosPares(5) 

console.log(retornaNNumerosPares(5))





