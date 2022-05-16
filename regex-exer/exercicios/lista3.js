/* 1- Na primeira, mais simples, você deve identificar o padrão de urls de editorias e 
notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo. */

const texto =`https://ge.globo.com/pe/futebol/copa-do-brasil/noticia/2022/05/12/copa-do-brasil-veja-os-classificados-para-as-oitavas-de-final-com-dominio-dos-clubes-da-serie-a.ghtml
https://ge.globo.com/combate/noticia/2022/05/13/morte-do-presidente-dos-emirados-arabes-adia-evento-de-boxe-com-spider-e-floyd-mayweather.ghtml
https://ge.globo.com/basquete/nba/noticia/2022/05/13/nba-embiid-critica-harden-apos-eliminacao-dos-sixers-nos-playoffs.ghtml
https://g1.globo.com/pi/piaui/noticia/2022/05/13/fa-de-whindersson-nunes-descobre-9-anos-depois-que-foi-convidada-pelo-idolo-para-ir-ao-cinema-em-teresina.ghtml`

const regexURL = /(https:\/\/[\w+]*\.[\w+\/-\/.-]+)/gm
console.log(texto.match(regexURL))

/* 1.1 Editorias */

const texto2 = `https://g1.globo.com/
https://globoplay.globo.com/
https://oglobo.globo.com/
https://ge.globo.com/`

const regexEditoria = /https:\/\/[\w+]*.globo\.com\//gm
console.log(texto2.match(regexEditoria))


/* Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site. */

const texto3 = `
<h1 class="content-head__title" itemprop="headline">Copa do Brasil: veja os classificados para as oitavas de final, com domínio dos clubes da Série A</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">Dos 14 clubes já garantidos, 12 estão na elite do futebol nacional e número ainda vai aumentar com passagem Bragantino ou Goiás e em caso da confirmação da vaga do Atlético-MG </h2>
<time itemprop="datePublished" datetime="2022-05-13T02:24:19.640Z"> 12/05/2022 23h24 </time>

<h1 class="content-head__title" itemprop="headline">Morte do presidente dos Emirados Árabes adia evento de boxe com Anderson Silva e Mayweather</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">Xeque Khalifa bin Zayed Al Nahyan faleceu nesta sexta-feira de causas ainda não divulgadas. País terá luto de 40 dias com bandeira a meio-mastro e todos os eventos suspensos</h2>
<time itemprop="datePublished" datetime="2022-05-13T15:16:37.785Z"> 13/05/2022 12h16 </time>

<h1 class="content-head__title" itemprop="headline">NBA: Embiid critica Harden após eliminação dos Sixers nos playoffs</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">Depois de derrota diante do Miami Heat, astro do Philadelphia 76ers alfineta MVP de 2018: "Não é mais quem ele era"</h2>
<time itemprop="datePublished" datetime="2022-05-13T12:37:40.853Z"> 13/05/2022 09h37 </time>

<h1 class="content-head__title" itemprop="headline">Fã de Whindersson Nunes descobre 9 anos depois que foi convidada pelo ídolo para ir ao cinema em Teresina</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">O convite foi feito em 2013 pela rede social, mas Nathana Martins só visualizou a mensagem na segunda-feira (9). A jovem é fã do humorista e lamentou ter perdido a oportunidade de conhecer o artista.</h2>
<time itemprop="datePublished" datetime="2022-05-13T10:00:36.403Z"> 13/05/2022 07h00 </time>
`
const regexTitulo = /([<h1].*[/h1|\time>])/gm
console.log(texto3.match(regexTitulo))