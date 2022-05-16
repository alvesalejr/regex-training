/* 1- A expressão regular \d{3}\.\d{3}\.\d{3}\/\d{2} casa um CPF como 772.843.809-34. 
Inclua quantificadores para que a pontuação seja opcional.
A regex resultante deve casar com 77284380934. */

const texto = 'Um CPF como 772.843.809-34 a regex resultante deve casar com 77284380934'

const regexCPF = /\d{3}.\d{3}.\d{3}\-\d{2}/g
const regexCPF2 = /\d{3}\d{3}\d{3}\d{2}/gi
console.log(texto.match(regexCPF))
console.log(texto.match(regexCPF2))

/*2 - Modifique a solução do exercício 1.1 para aceitar CPFs escritos com espaços ou pontos entre os grupos de três digitos, e com hifen -
 ou barra / antes dos dois dígitos de controle.
A regex resultante deve casar com 772 843 809/34, 772.843.809/34, e continuar casando com as strings aceitas pela solução de 1.1. */

const regexCPF3 = /\d{3}\d{3}\d{3}\d{2}/gm
console.log(texto.match(regexCPF3))

// 3 - Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras que teriminam com a letra “o”. 

const texto2 = 'Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras que teriminam com a letra “o”. '
const regex2 = /\w+o\b/gi
console.log(texto2.match(regex2))

// 4 - Escreva uma regex capas de encontrar no parágrafo acima todas as palavras que começam e terminam com vogais.

const texto3 = 'Escreva uma regex capas de encontrar no parágrafo acima todas as palavras que começam e terminam com vogais.'
const regex = /\b[aeiou]\w+/gi
console.log(texto3.match(regex))