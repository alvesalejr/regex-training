/* 1 - Faça um regex para capturar os cpfs presentes no trecho abaixo. 
Obs.: o regex precisa casar com cpfs com ou sem pontuação (772.843.809-34 ou 77284380934) */

const texto = `
Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), 
porém, para confirmar o número do seu novo documento, foi pedido que na hora de digitar no sistema,
que digitasse sem a pontuação, então ela digitou 77284380934.
`
const regexCPF = /\d{3}.\d{3}.\d{3}-\d{2}/gm
console.log(texto.match(regexCPF))

/* 2- Encontre a data e hora no texto abaixo. O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00. */

const texto2 = 'O sistema vai parar para uma manutenção programada no dia 10/09/2020 às 23:00.'

const regexData = /\d{2}.\d{2}.\d{4}/gm
const regexH = /\d{2}:\d{2}/gm
console.log(texto2.match(regexH))
console.log(texto2.match(regexData))

/*3-  Escreva um regex que encontre o conteúdo do atributo href do link no html a seguir (somente o endereço). */

const texto3 = `<html>
<head><title>Exercícios</title></head>
<body>
  <p>Menu</p>
  <ul>
    <li><a href="https://google.com">Google</a></li>
  </ul>
</html>`

const regexAT = /(https:\/\/)?\w+\.\w{2,}/gm // Criei o grupo pra capturar o "(https:\/\/) BARRA BARRA"
console.log(texto3.match(regexAT))

/* 4 - Encontre o texto dentro da tag h1 abaixo. */ //

const texto4 =`<html>
<head><title>Exercícios</title></head>
<body>
  <h1>Exercícios</h1>
  <table>
    <thead>
      <th>#</th>
      <th>Questão</th>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Primeiro exercício de regex</td>
      </tr>
    </tbody>
  </table>
</html>`

const regexTAG = /<h1>.*<\/h1>/gm
console.log(texto4.match(regexTAG))