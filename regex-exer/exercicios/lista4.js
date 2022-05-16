/* 1- Na primeira, mais simples, você deve identificar o padrão de urls de editorias e 
notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo. */

const texto =`
https://esportes.r7.com/futebol/campeonato-carioca/fotos/fluminense-e-campeao-do-cariocao-2022-relembre-a-campanha-03042022
https://noticias.r7.com/brasilia/ministerio-da-saude-vai-por-fim-a-secretaria-de-combate-a-covid-11052022
https://noticias.r7.com/saude/jovem-sofre-de-alergia-a-agua-caso-raro-que-acontece-com-uma-a-cada-200-milhoes-de-pessoas-13052022
`
const regexURL = /(https:\/\/[\w+]*\.[\w+\/-\/.-]+)/gm
console.log(texto.match(regexURL))

/* 1.1 Editorias */

const texto2 = `
https://esportes.r7.com/futebol/campeonato-carioca
`

/* Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site. */

const texto3 = `
<h1 class="toolkit-title">Fluminense é campeão do Cariocão 2022; relembre a campanha</h1>
<h2 class="toolkit-subtitle mt-5">Tricolor começou mal, perdendo do Bangu, mas se recuperou ao longo da competição até levantar a taça em cima do rival</h2>
<time datetime="2022-04-03T02:00:14-03:00" class="toolkit-signature__publication-time">03/04/2022 - 02h00</time>

<h1 class="toolkit-title">Jovem sofre de alergia à água, caso raro que acontece com uma a cada 200 milhões de pessoas</h1>
<h2 class="toolkit-subtitle mt-5">Abigail Beck, de 15 anos, contou que não consegue tomar banho regularmente nem chorar porque líquidos causam sensação de queimação na pele</h2>
<time datetime="2022-05-13T11:05:00-03:00" class="toolkit-signature__publication-time">13/05/2022 - 11h00<span class="toolkit-signature__publication-update">(Atualizado em 13/05/2022 - 14h06)</span></time>
`
const regexTitulo = /([<h1].*[/h1|\time>])/gm
console.log(texto3.match(regexTitulo))