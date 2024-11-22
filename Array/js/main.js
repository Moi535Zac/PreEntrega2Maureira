const numeros=[1,2,3,4,5];
const textos=["Juan", "Pedro", "Luna", "Tomy"];
//Agrega al final
numeros.push(6,5,8)
//Agrega al principio
numeros.unshift(-1,-2,0)
//Elimina al final
numeros.pop();
//Elimina al principio
numeros.shift();
// Elimina varios elemento, selecionas la posición y despues cantidad de elementos
numeros.splice(1,2);
//me devuelve los elementos separados y convertis en String
const listaTexto=textos.join("-");
console.log(listaTexto);
console.log(textos);


const listaNum=numeros.join("-");
console.log(listaNum);
console.log(numeros);

//CONCAT=> concatena ambos array
const fusion = numeros.concat(textos);
console.log(fusion);

//SLICE => seleciona solo algunos elementos y crea un nuevo array
const NuevoNum = numeros.slice(1,3);
const NuevoText = textos.slice(1,3);
console.log(NuevoNum, NuevoText);
/**
 * for (let i=0; i<numeros.length; i++)
{
    console.log(numeros[i])
}
 */

