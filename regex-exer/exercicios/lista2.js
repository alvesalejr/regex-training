/* 1- Na primeira, mais simples, você deve identificar o padrão de urls de editorias e 
notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo. */

const texto = `https://tecnoblog.net/noticias/2022/05/12/regras-do-prefixo-0303-prejudicam-consumidores-diz-grupo-de-telemarketing/
https://tecnoblog.net/noticias/2022/05/12/nvidia-abre-codigo-fonte-de-drivers-de-gpu-no-linux-mas-nao-se-anime-ainda/
https://tecnoblog.net/noticias/2022/05/12/nubank-agora-permite-negociar-criptomoedas-a-partir-de-r-1-direto-no-app/
https://tecnoblog.net/noticias/2022/05/12/em-patente-da-microsoft-xbox-series-s-pode-aceitar-jogos-em-midia-fisica/`

const regexNoticias = /https:\/\/tecnoblog\.net\/\w+\/\d{4}.\d{2}.\d{2}\/[\w-]+/gm
console.log(texto.match(regexNoticias))

/* 1.1 Editorias */

const texto2 = `https://tecnoblog.net/sobre/microsoft/
https://tecnoblog.net/sobre/apple/iphone-13/
https://tecnoblog.net/sobre/microsoft/
https://tecnoblog.net/sobre/microsoft/xbox-series-s/`

const regexEditorias = /https:\/\/tecnoblog\.net\/[\w/-]+/gm
console.log(texto2.match(regexEditorias))

/* Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site. */

const texto3 = `
<h1 class="flipboard-title title" itemprop="headline">Regras do prefixo 0303 prejudicam consumidores, diz grupo de telemarketing</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Presidente da Feninfra afirma que clientes podem deixar de receber propostas de bons negócios ao recusar chamadas de telemarketing</h2>
<time datetime="2022-05-12T17:33:50+00:00">12/05/2022 às 14:33</time>

<h1 class="flipboard-title title" itemprop="headline">Nvidia abre código-fonte de drivers de GPU no Linux, mas não se anime ainda</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Depois de anos de conflito com a comunidade Linux, Nvidia abriu código-fonte de módulos usados nos drivers de suas GPUs</h2>
<time datetime="2022-05-12T17:42:52+00:00">12/05/2022 às 14:42</time>

<h1 class="flipboard-title title" itemprop="headline">Nubank agora permite negociar criptomoedas a partir de R$ 1 direto no app</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Novo recurso do app do Nubank permite comprar e vender bitcoin (BTC) e ether (ETH); Nu Holdings anuncia compra de bitcoin equivalente a 1% de seu caixa</h2>
<time datetime="2022-05-12T15:52:49+00:00">12/05/2022 às 12:52</time>
`
const regexTitulo = /([<h1].*[/h1|\time>])/gm
console.log(texto3.match(regexTitulo))