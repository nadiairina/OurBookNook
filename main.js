document.addEventListener('DOMContentLoaded', () => {

    // ── 1. NAVBAR (Lógica de Transparência) ──────────────────────────────────
    const nav = document.getElementById('mainNav');
    const hasHero = document.querySelector('.hero');

    if (hasHero && nav) {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                nav.classList.remove('transparent');
            } else {
                nav.classList.add('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ── 2. SCROLL REVEAL (Animações de entrada) ─────────────────────────────
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));

    // ── 3. LÓGICA DA MODAL DE REVIEWS ──────────────────────────────────────
    const modal = document.getElementById("reviewModal");
    const closeModal = document.querySelector(".close-modal");

    // "Base de Dados" das reviews
    const reviewsData = {

        "Deus da Dor": {
            stars: `★★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>`,
            quote: "Eu estava destinado a quebrar a Annika Volkov. Só não sabia que seria eu a ficar destroçado.",
            text: `Estive bastante perto de dar 5 estrelas a esta obra-prima, em vez disso, avaliei-a em 4,5 estrelas apenas pelos seguintes motivos:<br><br>
“Deus da Dor” possui alguns aspetos similares ao primeiro livro da Saga “Legado dos Deuses”: Deus da Malícia. A sensação que tive no início do livro foi uma sensação de deja vu em relação ao discurso de Craighton comparativamente ao discurso de Kllian, ambos com fixação pelo facto das protagonistas femininas serem virgens, no entanto, essa sensação foi desaparecendo à medida que conhecia mais e mais do Creighton e do seu passado. <br><br>
Outro exemplo é precisamente esse: as protagonistas de ambos os livros nunca perderam a virgindade, o que acaba por tornar alguns discursos ligeiramente repetitivos. <br><br>
Um aspeto que reparei também é que as relações dos pais espelham as relações dos filhos, o que na minha opinião, se tornou demasiado recorrente, porém, gosto de ler sobre casais que continuam apaixonados muitos anos depois de se conhecerem, que era o caso de todos eles.<br><br>
Apesar deste pequenos detalhes, AMEI e senti-me verdadeiramente fascinada pela história de Annika e Creighton. Rina Kent escreve realmente uma jóia literária sob a forma de um dark romance. <br><br>
Annika é uma princesa da máfia, completamente protegida pelo pai e pelo irmão, Jeremy, que nunca a deixam fazer nada remotamente perigoso. E desde que conhece Craighton, desenvolve logo de imediato um fascínio por ele, uma vez que os dois são o oposto um do outro, em todos os sentidos. <br><br>
Enquanto ela é calorosa, social, extrovertida e fala durante horas, ele é calado, sério e emocionalmente fechado (e não lhe presta atenção nenhuma, nem a ela nem a ninguém). <br><br>
Achei, contudo, que no início, o interesse de Creighton por Annika não tenha sido bem explorado, uma vez que senti que surgiu de forma um pouco repentina. Ainda assim, a história torna-se muito mais fluida com o progresso dos acontecimentos. <br><br>
Creighton começa a interessar-se por Annika porque ele é sádico e ela possui um lado submisso que o atrai assim que repara nessa característica. Até então, ele apenas a via como uma boneca pequena e frágil, que ao mínimo toque, se partiria. <br><br>
Craighton é uma personagem moralmente cinzenta, intensa e implacável, com tendências autodestrutivas. Com um plano de vingança por cumprir, acaba por desenvolver um interesse por Annika, o que, eventualmente, os vai levar por caminhos obscuros e perigosos.<br><br>
Adorei, adorei, adorei a dinâmica entre os dois. Posso dizer, com confiança, que ultrapassou a minha loucura e o fascínio que tinha pelos protagonistas de “Deus da Malícia”. Este livro tem as cenas mais caóticas de sempre, nas quais os dois se colocavam em situações de total desespero.<br><br>
Este dark romance explora bastante a parte emocional e a vulnerabilidade dos personagens, envolve BDSM, o que torna tudo ainda mais excitante, brutal e sem filtros, e é o típico “Grumpy x Sunshine” que qualquer leitor de romance adora.`,
            signedBy: "Sara Rebeca"
        },

        "Deus da Malícia": {
            stars: `★★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>`,
            quote: "Tu odeias isso, não é? O quanto queres o que eu tenho para oferecer, como anseias por esse sentimento de te deixares ir enquanto és totalmente devastada. Por um momento, queres deixar de ser uma boa rapariga e apenas libertar o que quer que tenhas aí dentro, não é verdade?",
            text: `“Deus da Malícia” é o primeiro livro da Saga “Legado dos Deuses”, de dark romance, escrito por Rina Kent. Esta é uma leitura bastante controversa, emocionalmente instável e crua. Um dark romance sem filtros. E é excitante até dizer chega. <br><br>
Killian Carson aprendeu desde cedo que não se encaixa na sociedade normalizada e limitada. Ele nasceu para reinar sobre ela.<br><br>
Com uma grave perturbação de personalidade antissocial e possuidor de traços de narcisismo e maquiavelismo, é manipulador, desprovido de empatia afetiva e sente uma superioridade em relação a todos os outros neurotipicos, que segundo ele, são demasiado fracos, uma vez que se deixam guiar pelas suas emoções. <br><br>
Carson sente impulsos constantes para saciar os seus desejos. Contudo, conseguiu adaptar-se às expectativas sociais e consegue enganar muito bem todos os que o rodeiam. Exceto Glyndon, que conhece o seu lado sombrio numa noite marcada pelo desespero. A noite é a única altura do dia em que Killian se permite ser exatamente como é, reagindo aos seus impulsos mais depravados. Ela vê o monstro que se esconde por baixo da máscara, e odeia-o com todo o seu ser. <br><br>
Glyndon King é uma rapariga traumatizada, super reservada e deprimida. Ela conhece-o quando pensa em atirar-se de um penhasco, no qual o seu melhor amigo se suicidou. Killian salva-a, mas tem outras intenções para com ela, uma vez que não faz nada por bondade. Este livro explora bastante o consentimento duvidoso, fazendo de Carson um anti-herói cruel e implacável, obcecado pela perseguição e pela inocência de Glyndon.<br><br>
King carrega um enorme sentimento de inferioridade dentro dela, porque dos 3 irmãos, é a que tem uma arte mais caótica e distinta, sendo constantemente alvo de comparações com a sua família. <br><br>
Landon e Brandon, os seus irmãos, são gémeos, mas não podiam ser mais diferentes um do outro. O primeiro, tal como Killian, nasceu diferente, e tem uma obsessão em esculpir esculturas, o que o torna o mais focado e dotado dos irmãos. Brandon é meigo e adora Glyndon e é também super talentoso na sua arte, tal como a sua mãe, que é uma artista de renome.<br><br>
Tanto Brendan como Glyndon esforçam-se ao máximo para se manterem afastados de Landon, porque este não tem qualquer problema em usar quem quer que seja para conseguir aquilo que quer. O que a faz querer fugir de Killian, uma vez que vê demasiadas parecenças entre ambos.<br><br>
Um dos aspetos que mais apreciei neste livro foi o facto de Killian ser um psicopata diagnosticado, mas começar a apaixonar-se por Glyndon, sem se aperceber sequer desse facto. Supostamente, não devia ser capaz de amar, mas tem uma obsessão por ela, que não consegue controlar. E simultaneamente, é fascinante acompanhar a evolução desse sentimento.<br><br>
Adorei a forma, sem filtros, como Kent construiu a personagem de Killian, é incrível ver como o estudo da mente está por de trás de cada detalhe idealizado. Carson é uma personagem digna de estudo, o que me fascina, pois dissecar o que se esconde nas mentes mais obscuras é uma das minhas maiores paixões. Adoro ler livros assim, que exploram personagens psicologicamente complexas e moralmente ambíguas, e observar como lidam com aquilo que sentem.<br><br>
“Deus da Malícia” não tenta justificar o comportamento de Killian nem vender uma relação como modelo saudável. A proposta é explorar uma fantasia de romance obscuro, intensa e desconfortável, dirigida a leitores que apreciam este subgénero.<br><br>
E posso dizer que é uma experiência chocante e deliciosa.`,
            signedBy: "Sara Rebeca"
        },

        "Caro Leitor": {
            stars: "★★★★★",
            quote: "Onde há fumo, há fogo. Caro leitor, confia no teu instinto… estão todos a mentir. Mesmo aqueles que estão mais próximos de ti. Eu que o diga.",
            text: `“Caro Leitor”, de Tate James, é daqueles livros que prende do início ao fim. Um dark romance super diferente uma vez que envolve o leitor numa atmosfera de constante mistério e suspense. 

Assim que o terminei de ler, a minha primeira reação foi: “Que final foi este?! Preciso do 2° livro JÁ!”. Fiquei literalmente de boca aberta ao chegar à última página.

James proporciona uma leitura envolvente, intensa e viciante. A escrita é fluida e dinâmica, o que torna impossível não devorar esta história de uma ponta à outra. Um outro feito que a autora consegue também alcançar, é que, quem está a ler facilmente se apega às personagens, o que torna toda a experiência ainda mais marcante.

A história começa logo carregada de mistério, na qual uma das personagens escreve sobre uma sociedade intrigante e perigosa, avisando que se encontrarem este diário, é porque a mesma morreu, e quem está a ler será o próximo. Esta premissa prende instantaneamente quem está a ler, e a partir daí, a intensidade da narrativa só aumenta.

No início, somos apresentados a quatro homens, Nate, Heathcliff, Carter e Royce, que decidem implicar com Ashely, porque ela é filha da mulher que se irá casar com o pai de Nate, que ele odeia. Ashely é nova na Universidade Nevaeh, na qual irá iniciar o mestrado e se depara com estes homens avassaladores.

As suas brincadeiras estão longe de ser inocentes, transformando-se rapidamente num verdadeiro jogo de intimidação. Os mesmos fazem parte da Devil’s Backbone Society e são perigosamente bonitos, intimidantes e estão habituados a conseguir o que querem. A trope “Why Choose?” está constantemente presente no enredo, o que é só delicioso e extremamente empolgante. 

No entanto, a opinião que vamos formando sobre as personagens vai-se alterando ao longo da história. Tate cria no leitor uma ânsia por descobrir quem está por de trás de todos os acontecimentos sombrios que vão surgindo. Como resultado, quem lê este dark romance permanece constantemente em alerta, sem conseguir confiar de forma plena em nenhum dos quatro, nem em ninguém.

Nesta realidade, todos são suspeitos até prova em contrário.`,
            signedBy: "Sara Rebeca"
        },

        "Nero": {
            stars: "★★★★★",
            quote: "Não me arrependo de te ter arrastado para esta vida. Devia. É dura, cruel e implacável, mas tu és tão minha como a própria escuridão. E isso significa que o nosso lugar é juntos.",
            text: `“Nero”, de S. J. Tilly, diferencia-se dos outros livros de dark mafia romance uma vez que tem tanto de terno e doce como de obscuro e spicy, que é uma mistura que não se vê muito neste género de escrita. 

Como já deu para perceber, adoro um homem literário que tem tanto de obcecado como de perigoso e como não podia deixar de ser, Nero tem exatamente a quantidade certa de obsessão e de possessividade, ao mesmo tempo que é carinhoso e gentil. E é daquele género de homem: “mato quem se atrever a olhar para ti”, mas para Payton é tão soft e doce, vendo nela uma pureza que não existe no seu mundo cruel.

Nero é líder de uma organização mafiosa, é perigoso, controlador e implacável e entra sem autorização na vida de Payton. (Ele entra literalmente pela porta aberta da casa dela, e em vez de sentir medo, Payton sente-se atraída por ele). A partir daí desenvolvem uma relação cheia de dedicação obsessiva e proteção extrema.

Payton é uma rapariga inocente e ingénua, no entanto, já passou por bem mais do que se vê à primeira vista, o que desencadeou uma série de traumas na mesma. E Nero capta isso assim que põe os olhos nela, o que o atrai instantaneamente.

Uma história leve, apesar dos temas sombrios, centrada nas personagens, e com capítulos rápidos e uma escrita fluida, é realmente difícil não devorá-la em poucas horas.`,
            signedBy: "Sara Rebeca"
        },

        "O Predador": {
            stars: "★★★★★",
            quote: "No que toca à morte, és minha.",
            text: `Estão a ver quando terminam um livro e sentem umas saudades agonizantes dos personagens e de todo aquele universo literário? É o que eu sinto neste preciso momento e o que tenho vindo a sentir desde que conheci a história dos dois personagens mais complexos que já existiram. 

“O Predador” é o primeiro livro da série Dark Verse, de RuNyx. Tristan e Morana infiltraram-se na minha pele, na minha mente, no meu coração, e nos meus pensamentos, e continuarão a ser uma presença eterna em mim. 

Tristan, um homem enigmático, implacável e letal, ocupa uma posição de destaque na organização mafiosa Tenebrae Outfit. E é o único que não pertence à família através de laços de sangue, porém toda a gente o teme. Chamam-lhe de “O Predador”.

É moralmente ambíguo, extremamente observador e as suas verdadeiras intenções permanecem ocultas durante grande parte do livro. 

Morana Vitalio é filha de uma família rival, super inteligente e destemida. Quando os seus caminhos se cruzam, Morana vê Tristan instantaneamente como inimigo e sente uma raiva tremenda por parte dele em relação a ela que não consegue decifrar. Nada nele é decifrável…

Mas há muito mais sobre o passado deles que Morana desconhece, mas que para Tristan não muda nada e para ela muda tudo. É de partir o coração. Ele quer a vida dela mais do que tudo… 

Tanto a história individual de cada um como a química e a tensão existente entre os dois é viciante. Parece uma droga. Senti o coração aos saltos durante toda a leitura e não conseguia parar de roer as unhas e de dar gritinhos. A tensão entre Tristan e Morana é mais do que palpável, é eletrizante.

RuNyx merece um prémio por criar dois dos personagens mais complexos que já conheci, com uma tensão excruciante e uma química avassaldora. Eu ainda não superei este livro e acho que nunca irei superar. Irei recomendá-lo sempre que me me pedirem sugestões de livros, quer estejam já familiarizados com este género quer não, porque esta história é também uma incrível porta de entrada para este mundo tão obscuro que é o dark romance.`,
            signedBy: "Sara Rebeca"
        },
        
        "Insaciável": {
            stars: "★★★★★",
            quote: "Centímetro a centímetro, com os olhos fixos e os lábios entreabertos, tornamo-nos os primeiros um do outro. E, se depender de mim, os últimos também.",
            text: `Quando iniciei este livro, pensei que seria mais um dark romance que não variaria muito dos outros todos que já tive a oportunidade de ler, no entanto, “Insaciável” foi um livro que me devorou e me deixou completamente destruída. A escrita de Leigh Rivers transcende tudo o que já li, no que toca a dor e mágoa.

A história de Kade e Stacey não é uma história feliz, é sombria e melancólica, a qual me deixou com lágrimas nos olhos e um aperto no coração. 

Este livro tem temas pesados e muito sombrios, o que contrasta com o início da relação deles em adolescentes, tão doce e inocente. O processo de descoberta pela qual eles passam juntos e o amor que sentem um pelo o outro torna a história bonita e, simultaneamente, triste. 

Mas os anos passaram e tanta coisa errada e cruel aconteceu entre eles, que os deixaram a ambos magoados um com o outro. 

Kade é agora um homem perigoso, envolvido no submundo do crime, e odeia a ex-namorada mas vive obcecado com ela, e mesmo tendo ela o traído (ou pensa ele), não consegue parar de a observar à distância, nem de a perdoar. Quando regressa à cidade após anos de ausência, a atração, os segredos e o ressentimento entre os dois voltam a explodir. 

Ele tem 5 regras:
Primeira: Afasta-te da tua ex-namorada tóxica.
Segunda: Mantém o número dela bloqueado.
Terceira: Se estiverem na mesma sala, não olhes para ela — é uma armadilha!
Quarta: Nunca, mas mesmo nunca!, tenhas qualquer contacto sexual com ela.
Quinta: Nunca perdoes Stacey Rhodes…

Porém, ele quebra quaisquer regras que possa ter sempre que ela está na sua presença…

“Insaciável” faz jus ao nome, deixa-nos sempre a querer mais. Mais respostas, mais capítulos, mais de Kade e Stacey.

Este livro é o primeiro da trilogia “Abismo da Escuridão”, e assim que chegarem à última página, o segundo vai tornar-se uma necessidade, não uma opção.`,
            signedBy: "Sara Rebeca"
        },
        
        "Um por Um": {
            stars: "★★★★☆",
            quote: "Posso dizer-vos já o meu segredo: No fim desta semana, só um de nós regressará a casa com vida.",
            text: `“Um por Um” é uma história arrepiante, típica da autora Freida McFadden. Este thriller inicia-se logo com uma mensagem que ecoa por todo o livro: uma floresta, 6 amigos completamente sozinhos, nenhum escapará com vida, à exceção de um. Mas quem? Coisas estranhas acontecem à volta dos seis. Um a um, começam a desaparecer sem deixar rastro, o que cria uma sensação constante de mistério e intriga.

“Porque é que continuam a desaparecer? O que se está realmente a passar? Será que estão a ser caçados ou enganados uns pelos outros?” Eram as perguntas que me iam surgindo à medida que ia lendo este livro. Todos eles iam tendo comportamentos estranhos a certo ponto, pelo que Freida consegue mesmo cumprir o seu objetivo: deixar-nos a todos à nora.

Esta história é contada sobre o ponto de vista de 2 personagens: Claire e Anónimo. A escrita anónima é enigmática, e deixa-nos sem saber o que pensar e a sentir diversas emoções, todas elas contraditórias. 

As coisas nunca são o que parecem. O que pode parecer terrível pode-se tornar num pesadelo ainda maior.

Esta história impressionou-me até certo ponto, isto porque já começo a perceber o desenrolar da escrita de McFadden e como a mesma vai construindo as suas épicas reviravoltas. Senti-me ansiosa com o final, uma vez que este mexe com a cabeça da personagem principal, mas já não é nada a que eu não esteja habituada ao ler os livros desta autora.

No entanto, é espantoso como Freida consegue criar mundos inteiros com reviravoltas de arrepiar, é tão fácil para ela mexer com a cabeça do leitor: primeiro gosta-se de um personagem, logo a seguir detesta-se com todo o íntimo.

Freida McFadden tem, realmente, um dom no que toca a deixar o leitor ansioso e sempre à espreita, sem conseguir largar o livro.`,
            signedBy: "Sara Rebeca"
        },
        "Intocável": {
    stars: "★★★★☆",
            quote: "Sou tocada por um milhão de chamas e engulo outro milhão. Olha-me fixamente como se nunca antes me tivesse visto. Quero lavar a alma no azul sem fundo daqueles olhos.” - Juliette Ferrars",
            text: `“Intocável” é o primeiro livro da saga “Shatter Me” e conta-nos a história de Juliette Ferrars, uma rapariga de 17 anos que vive numa sociedade distópica. Ela encontra-se presa há três anos, pois possui uma "condição" que faz com que o seu toque seja fatal. A história toma um rumo diferente quando o Governo a liberta, mas com uma condição muito específica…

A escrita deste livro é peculiar e tocou-me bastante, apesar de ser ficção, existem muitos elementos poéticos e melancólicos. Juliette apaixona-se, e Tahereh Mafi descreve esse sentimento de uma maneira tão doce e poética que me emocionou bastantes vezes. Eu nunca tinha lido um livro de ficção que fosse tão poético e achei uma junção super original que resulta bastante bem, apesar de serem temas que, à primeira vista, não se "juntam".

Juliette é uma rapariga solitária e deprimida, que sofre bastante com a falta de toque e de amor, sentindo-se profundamente sozinha no mundo. Com esta escrita tão melancólica e visual, o leitor consegue "ver" o seu mundo a ganhar vida e cor ao longo do livro. Quando Juliette se apaixona, e apesar de esta ser uma história de ficção onde o principal objetivo é a sobrevivência, como normalmente são, arrisco-me a dizer que as descrições poéticas dos seus sentimentos ofuscam a ficção. Dei por mim a querer mais descrições do que ela estava a sentir e a torcer mais pelo romance dos protagonistas do que pela sua própria sobrevivência naquela sociedade distópica.`,
            signedBy: "Nadia Irina"
                },
        "Corrupt": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
            quote: "E apesar de ter sido sempre ela a observar-me enquanto crescíamos isso não significava que eu também não estivesse atento a ela. Ainda me lembro do dia em que ela nasceu. Há dezasseis anos, onze meses e dezoito dias. Naquela manhã fresca de novembro.",
            text: `Uma noite pode mudar tudo.
Um erro. Um segredo enterrado.
E quatro rapazes que nunca esqueceram.

Anos depois, o passado deixa de ser apenas uma memória e transforma-se num jogo calculado de vingança. Michael regressa com um plano, e Erika torna-se o centro de tudo  presa numa teia onde o medo alimenta o desejo e onde cada passo pode ser o último.
Há jogos que só terminam quando alguém perde tudo.

O perigo nunca foi tão atraente…
Michael Crist destaca-se imediatamente como uma presença dominante. Misterioso distante, impenetrável e perigosamente fascinante.
Mas por trás dessa postura, existem fissuras sinais de que o que sente pode ser mais complexo do que aquilo que demonstra.

Ele queria odiá-la…
A ligação entre Michael e Erika é intensa, carregada de passado e emoções mal resolvidas. Não é uma relação linear nem fácil  é construída no conflito, na tensão e numa atração que nunca desaparece.

A presença da “irmandade” entre o grupo de rapazes acrescenta uma camada extra à narrativa. Este grupo não é apenas um conjunto de personagens secundárias é uma força marcada por lealdade, segredos e uma energia quase ameaçadora que reforça o ambiente do livro.
A motivação por trás da vingança vai sendo revelada lentamente através destes personagens, o suspense mantém sempre uma sensação de inquietação. E quando finalmente as peças começam a encaixar nada é exatamente como parece…

Um dos elementos mais marcantes da história é a forma como explora a ligação entre medo e excitação. A adrenalina, o risco e o perigo tornam as emoções mais intensas, criando uma experiência de leitura fora do comum. É ousado, provocador e não procura agradar, as partes mais hot são carregadas de tensão psicológica e emocional e é exatamente o que atrai e se torna impactante, como se tudo fosse pensado em desafiar limites e nos libertarmos daquilo que nos é imposto.
No final, Corrupt afirma-se como uma história sombria, viciante e emocionalmente intensa  daquelas que ficam na memória, foi o meu primeiro Dark Romance e abriu portas ao género na perfeição.`,
            signedBy: "Nádia Filipa"
                },
        "Verity": {
    stars: "★★★★☆",
            quote: "Verity era mestre em manipular a verdade. A única dúvida que fica é: que verdade estava a manipular?",
            text: `Se ainda não ouviste falar de Verity, prepara-te porque este é daqueles livros que te agarra logo nas primeiras páginas e não te larga até ao fim. A história acompanha Lowen, uma escritora que aceita terminar uma série de livros inacabados de uma autora famosa após um acidente misterioso. Para isso, muda-se temporariamente para a casa dessa autora e é aí que tudo começa a ficar… estranho.

Sem entrar em spoilers, o que mais se destaca neste livro é a forma como a tensão vai crescendo de forma quase viciante e é incrível como começa logo de forma muito impactante na primeira página. É impossível não querer ler “só mais um capítulo”. A relação entre Lowen e Jeremy é outro ponto forte há uma química muito bem construída, cheia de intensidade e momentos que nos fazem sentir tão atraidos como a própria Lowen se sente. 

Jeremy, aliás, é aquele tipo de personagem que não passa despercebido: envolvente, misterioso e com uma aura que nos deixa sempre a questionar o que realmente está por trás dele e daquela casa. E falando da casa… o ambiente é quase uma personagem por si só carregado, inquietante e cheio de segredos.

Outro ponto impossível de ignorar é a presença de Verity. Sem revelar demasiado, há algo profundamente perturbador na forma como ela se impõe na narrativa quase como uma força invisível, sufocante, que paira sobre tudo, é quase como se ela não fosse apenas uma personagem mas também uma sensação, um desconforto persistente.

Um dos aspetos mais interessantes é o recurso ao “livro dentro do livro”, que acrescenta camadas à narrativa e nos faz duvidar constantemente daquilo que pensamos saber. Ao longo da leitura, há sempre aquela sensação de que nada é exatamente o que parece e isso mantém o suspense lá no alto.

Considero que o final podia ter sido um pouco mais desenvolvido. Parece que tudo acontece muito rápido depois de uma construção tão intensa. Ainda assim, não tira o mérito à experiência geral.



No fundo, Verity é um thriller envolvente, tenso e perfeito para quem gosta de histórias que mexem com a nossa cabeça. E sim aquele sentimento constante de desconforto e medo? Sentimos tudo através da Lowen.`,
            signedBy: "Nádia Rodrigues"
                },
        "O Acidente": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
            quote: "Vou morrer aqui.",
            text: `“O Acidente”, de Freida McFadden, é mais um daqueles livros, com narrativas viciantes que nos fazem devorar cada página, que nos consomem e nos fazem roer as unhas, sempre à espera de ver o que vai acontecer a seguir.

Este livro conta a história de Tegan, uma rapariga de 23 anos que engravidou de um desconhecido numa noite, há 8 meses atrás. A ligação que ela tem com a bebé, ainda no útero, é dos pontos que mais gostei no livro e que mais difere na escrita da Freida, comparativamente aos outros livros da autora. 

Tegan tem um acidente de carro durante uma tempestade de neve e é encontrada por Hank, um homem com ar temível que a leva para a sua cabana remota, com o pretexto de a ajudar. Uma vez chegados a sua casa, a mulher de Hank, Polly, aparece, o que tranquiliza Tegan, uma vez que assim não se vê sozinha com Hank.

Polly, que já foi enfermeira, parece uma mulher simpática e disposta a ajudar Tegan, no entanto, assim que ela percebe que Tegan está grávida, o rumo das coisas muda e ela começa a ter pensamentos estranhos. Ao que parece, este casal tem um passado sombrio do qual Tegan nem imagina.

Este thriller retrata de forma assustadora como podemos tirar ilações erradas sobre as pessoas e como isso nos pode levar a situações das quais não podemos voltar atrás. Neste livro de suspense, nada é o que parece e as coisas mudam e acabam de uma forma que nunca imaginaríamos, com reviravoltas de 180°.`,
            signedBy: "Sara Rebeca"
                },
        "A Mulher no Andar de Cima": {
            stars: "★★★★★",
            quote: "Hoje, conheci o homem com quem me vou casar.",
            text: `Uma vez mais, Freida McFadden cria nos seus leitores um misto de sensações com a sua escrita indecifrável. 

Fiquei de queixo caído com as reviravoltas deste thriller e não tenho palavras para descrever a sensação com que fiquei quando o terminei. Apenas sei que me senti imensamente frustrada e triste (e com muita raiva).

“A Mulher no Andar de Cima” é uma história angustiante, trágica e macabra. Se estão à procura de ficar com o coração nas mãos, este livro é para vocês! Não é, de todo, uma história feliz e deixa-nos com o coração apertado à medida que vamos descobrindo mais e mais sobre a Victoria e o Adam.

Freida faz-nos sempre questionar tudo e todos e colocar tudo em causa, e, até ao último segundo, não podemos confiar em nada nem em ninguém. 

Do início ao fim, esta história é dolorosa e injusta, com temas muito sensíveis, que deixa quem a lê com uma sensação sufocante muito depois de a ter terminado.`,
            signedBy: "Sara Rebeca"
                },
        "Grita por Nós": {
            stars: "★★★★★",
            quote: "Não vim em teu auxílio porque sou o teu príncipe encantado. Sou o vilão e quero-te só para mim.",
            text: `Oh. Meu. Deus. 🌶️🌶️🌶️🌶️🌶️

Se este não é o livro mais hot que vocês vão ler, então não sei qual é. Ele devia ser crime de tão spicy que é. 

“Grita por Nós”, de Molly Doyle, é um dark romance curto completamente extasiante, cheio de suspense e fantasia erótica que vicia qualquer leitor que aprecie este género. 

Eu devorei-o numa hora e queria, por tudo, voltar a esquecê-lo para o ler de novo, como se fosse a primeira vez. 

A história ocorre numa noite de Halloween, na qual não há quaisquer regras (é ainda mais picante do que estão a imaginar). A química entre os personagens é enlouquecedora, viciante, e é tudo o que nós queremos num dark romance intenso como este. 

Quinn é uma rapariga introvertida com desejos sombrios que, numa festa de Halloween, conhece 3 homens mascarados - Ghost, Jason e Michael (que metem medo a qualquer um) - e quando eu digo que vocês não estão preparados para a obscenidade deste livro, não estou a exagerar. Ele é proibido, brutal, completamente inebriante e excitante.

Não aconselho a leitura de “Grita por Nós” antes de irem dormir porque, acreditem quando digo que não vão conseguir pregar olho a noite inteira. 

Todos os fãs de dark romance: façam o favor de devorar esta história tão quente e perigosa!!`,
            signedBy: "Sara Rebeca"
        },
        "Hooked": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
            quote: "Não há nenhum lugar para onde possas fugir onde eu não te encontre.",
            text: `Tenho de confessar que, quando iniciei este livro, pensei que seria mais um daqueles romances cliché que começam por vingança, e depois as personagens apaixonam-se loucamente uma pela outra, mas caramba, como eu estava enganada.

James é vingativo e não olha a meios para vingar a morte da sua família, incluindo manipular e enganar Wendy. Introvertida e com uma personalidade submissa, Wendy está sempre à espera da aprovação de todos, principalmente do pai. No entanto, a vida dela muda de um dia para o outro quando James entra na sua vida.

As reviravoltas nesta história surpreenderam-me imenso, e tenho a dizer que eu estou sempre à espera de um grande plot twist. Alguns marcos importantes tiveram lugar mais rápido na história do que eu suponha, o que o diferencia dos outros romances do mesmo género.

Um romance cheio de segredos obscuros, temas pesados, traições, vingança e um sentimento tão intenso capaz de deixar qualquer um sem fôlego! `,
            signedBy: "Sara Rebeca"
        },
        "Paixão Proibida": {
            stars: "★★★★★",
            quote: "Espero que me ames, porque te amo loucamente, e vou amar-te para o resto da minha vida. Tentei manter-me afastado, porque julguei que era o correto, porra, mas não consigo. Preciso de ti, e amo-te.",
            text: `Penelope Douglas traz-nos mais um romance de aquecer o coração (e fazer subir a temperatura). “Paixão Proibida” é escaldante e cheia de uma tensão constante entre desejo e culpa. 

Jordan tem 19 anos e é uma menina cheia de garra e desejos para o futuro e Pike? Pike é o pai do namorado dela (I know, right!!!). 

Perigosamente picante, com uma proximidade forçada, picardias e ciúmes à mistura, e uma diferença de idades escandalosamente sensual, este romance é perfeito para leitores ávidos que amam histórias provocantes com age gaps um bocadinho mais esticadinhas 😏`,
            signedBy: "Sara Rebeca"
        },
        "Chama-lhe o que quiseres": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
            quote: "Esta não é uma daquelas histórias de amor bonitas em que ambos acabam por ficar juntos. Esta é uma daquelas histórias em que a mágoa e a confusão os consomem. É uma daquelas histórias em que a pessoa  que está a sofrer se levanta, ergue a cabeça e percebe o seu valor",
            text: `Chama-lhe o Que Quiseres apresenta-nos um romance contemporâneo que foge ao típico “felizes para sempre” e mergulha numa realidade emocional mais crua e, para muitos, bastante familiar. A história acompanha uma jovem que se vê presa numa relação indefinida marcada por idas e vindas com um rapaz que nunca consegue entregar-se por completo.

Ao longo do livro, acompanhamos este ciclo repetitivo de reencontros e tentativas falhadas. Mesmo consciente de que ele não lhe consegue dar aquilo que precisa, a protagonista continua a justificar comportamentos e a alimentar a esperança de que, desta vez, será diferente. A narrativa, feita do ponto de vista dela, reforça bem este conflito interno entre razão e emoção algo com que muitos leitores se poderão identificar.

A premissa é, sem dúvida, interessante e pouco explorada no romance tradicional: uma história que não idealiza o amor, mas sim expõe padrões emocionais difíceis de quebrar, muitas vezes ligados a traumas e inseguranças. No entanto, apesar deste potencial, o livro acaba por não atingir totalmente o impacto esperado.

Com o avançar da leitura, a repetição do ciclo torna-se algo cansativa, faltando uma evolução mais marcante ou momentos de maior intensidade. Sente-se a ausência de um elemento surpreendente uma reviravolta, um desenvolvimento mais profundo ou algo que realmente marque o leitor. Além disso, a componente emocional poderia ter sido mais explorada, especialmente no que toca ao passado e aos bloqueios do personagem masculino, que acabam por ficar um pouco em aberto.

Também a ligação com as personagens não é tão forte quanto poderia ser, o que dificulta a criação de empatia e envolvimento com a história.

Ainda assim, é de valor reconhecer a intenção da autora: retratar um tipo de relação imperfeita, realista e longe dos clichés habituais. Apesar de não ter sido uma leitura memorável, é um livro que pode ressoar com quem já viveu algo semelhante e que procura histórias mais próximas da realidade crua de alguns relacionamentos.`,
            signedBy: "Nadia Rodrigues"
        },
        "Tóxico": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
            quote: "Ele é um desejo do qual eu não consigo livrar-me.",
            text: `“Tóxico”, de Nicole Blanchard, é um romance sombrio e perverso entre uma enfermeira prisional e um recluso de alta segurança. Senti-me rapidamente envolvida pela trama e pela química intoxicante entre os dois personagens. A tensão entre Tessa e Gracin é de provocar arrepios desde o primeiro minuto. 

O que é tão cativante no Gracin é que ele não esconde quem ele é — cruel, brutal e desequilibrado. Apesar de saber que ele é um homem perigoso, Tessa não consegue controlar a atração que sente por ele.

Um dark romance tóxico, perigoso e completamente explosivo que irá despertar sensações eletrizantes a quem se atrever a mergulhar nele.`,
            signedBy: "Sara Rebeca"
        },
        "Little Stranger": {
            stars: "★★★★★",
            quote: "Acredites ou não, és a única pessoa na minha vida e sempre foste. E quando deres o teu último suspiro, ou eu der o meu, isso não vai mudar. Tu. És. Minha. A minha maldita propriedade, entendes?",
            text: `Quando eu digo que não consigo parar de pensar neste livro, não estou, de modo algum, a exagerar.

Fiquei presa a esta história de amor tão intensa e proibida entre Malachi e Olivia, e, ela irá ficar vivida na minha memória durante muito, muito tempo.

“Little Stranger”, de Leigh Rivers, tornou-se num dos meus livros preferidos. Esta obra tem mais do que apenas erotismo e cenas de tirar o fôlego. Ela envolve traumas, emoções explosivas, sentimentos incompreensíveis e uma ligação tão forte que é impossível de quebrar. 

E é o livro mais tabu que eu já li. A sensação de o ler é “isto é tão sujo, mas não consigo para de o ler”. Eu devorei-o em pouquíssimas horas, de tão bom que ele é. 

Em termos de erotismo, “Little Stranger” chega a ultrapassar a Sombra de Adeline, e isto é dizer muito. É hipnótico, é proibido, e é perturbador e é completamente DECADENTE. 

Malachi é perigosamente obcecado por Olívia e ele não tira da cabeça de que ela irá ser dele, seja como for. É a melhor personagem literária já criada, na minha opinião. 

A autora ultrapassa quaisquer barreiras até para dark romance, é demasiado erótico e eu não conseguia parar de reagir às sensações que os dois provocavam um no outro. 

Quando pensas que é impossível ficar mais perturbador, Leigh prova-te o contrário. Um must read obrigatório para quem é viciado em heavy dark romance.`,
            signedBy: "Sara Rebeca"
        },
        "O Monte dos Vendavais": {
            stars: "★★★★★",
            quote: "Ele é mais eu do que eu própria. Seja lá do que for que as nossas almas são feitas, a minha e a dele são feitas do mesmo.” - Catherine Earnshaw",
            text: `Um clássico intenso que não pede desculpa: “Wuthering Heights”.

Há livros que gostamos… e há livros que nos marcam. O Monte dos Vendavais, de Emily Brontë pertence claramente à segunda categoria. Publicado em 1847, este clássico da literatura inglesa continua a ser uma leitura poderosa, sombria e emocionalmente intensa, daquelas que ficam connosco muito depois de virarmos a última página.

Uma das primeiras coisas que notei ao começar foi a diferença na escrita. Não estava muito habituada à literatura inglesa mais antiga, e no início sente-se bem a distância em relação aos livros modernos. A linguagem é mais densa e o ritmo diferente um pouco teatral até. No entanto, essa estranheza inicial desaparece rapidamente. À medida que avançamos na leitura, percebemos que esta história simplesmente não funcionaria da mesma forma com uma escrita mais atual. Há algo nesta forma clássica de narrar que encaixa perfeitamente na atmosfera do livro.

E que atmosfera! A atmosfera gótica e sombria acompanha perfeitamente a tragédia da narrativa. As personagens são intensas, complexas e, muitas vezes, difíceis de gostar. Em vários momentos mostram o lado mais feio da natureza humana, o que torna a história crua e nada romantizada e é isso que a torna tão marcante.

Catherine Earnshaw e Heathcliff são duas personagens impossíveis de esquecer. A relação entre eles é obsessiva, possessiva e profundamente tóxica, mas existe ali uma forma de amor ? Na minha opinião sim existe. Não a forma de amor ideal, talvez um pouco desfigurado, mas com uma ligação intensa que parece unir os dois de forma inevitável.

A narrativa é detalhada e consegue transportar-nos facilmente para aquele tempo e espaço, acompanhando diferentes gerações e tornando a história ainda mais envolvente. É um livro que prende porque há sempre a curiosidade de continuar a ler para descobrir o rumo das consequências das escolhas dos personagens.
No final, apesar de toda a intensidade, tristeza, vingança e raiva que atravessam a história, existe um certo alívio ao ver a narrativa ir para algo mais próximo da paz. 

É um livro duro, intenso e memorável e recomendo muito a leitura para quem quer experimentar um clássico que realmente fica connosco.`,
            signedBy: "Nádia Filipa"
        },
        "Os Sete Maridos De Evelyn Hugo": {
            stars: "★★★★★",
            quote: "As pessoas pensam que a intimidade tem que ver com sexo. Mas a intimidade tem a ver com a verdade. No momento em que percebemos que podemos contar a alguém a nossa verdade, quando podemos mostrar-nos a essa pessoa, quando nos despimos de tudo à frente dela e a resposta é: «Comigo, estás segura.» Isso é intimidade.",
            text: `Os Sete Maridos de Evelyn Hugo é um livro sobre glamour, amor e mistério. 

Passa-se na época dourada de Hollywood, em 1950, e conta-nos detalhadamente a história da atriz cubana, Evelyn Hugo, desde a sua infância, carreira, a sua ascensão ao estrelato e a sua vida amorosa.

Taylor Jenkins Reid, é uma escritora muito visual, tendo trabalhado numa produtora cinematográfica, tem o dom de fazer com que o leitor consiga visualizar todas as cenas na sua cabeça, é por esta grande qualidade que gosto imenso de todos os seus livros, consigo “ver um filme” com imensa facilidade e de forma intensa, enquanto leio. 

Cheio de glamour de Hollywood, drama, mistério e plot twists, Taylor Jenkins Reid detalha com pormenores o mundo do cinema americano, respondendo às curiosidades que a maior parte das pessoas tem em relação à indústria. 

Começamos a história curiosos sobre a quantidade de casamentos, apenas para percebermos que isto é uma história de sobrevivência e que as características manipuladoras e os planos engenhosos de Evelyn são essenciais para a sua sobrevivência. No início, até pode parecer uma história “superficial” porque é sobre o showbusiness americano (acredito que era esse o objetivo da autora), mas conta-nos uma história profunda de resiliência por parte de quase todas as personagens. Apercebem-nos rapidamente que este livro é uma história de amor e questionamo-nos se poderá sobreviver a um “inimigo” comum. 

É daqueles livros que se devora em poucos dias e que nos deixa com um sentimento amargo por sabermos que nunca vamos ter a mesma experiência de o ler de novo. Confesso que este ficou dos meus livros preferidos, lê-lo foi das melhores experiências que tive, e sempre que me pedem uma recomendação, é este o livro que escolho.`,
            signedBy: "Nadia Irina"
        },
        "O Comboio dos Orfãos": {
            stars: "★★★★★",
            quote: "Há histórias que começam com perda, e passam a vida inteira à procura de um lugar para chamar casa.",
            text: `O livro inesquecível de “O Comboio dos Órfãos” de Christina Baker Kline. 

Há livros que escolhemos ler… e há livros que, de alguma forma, acabam por nos escolher e por nos marcar mais do que estávamos à espera. O Comboio dos Órfãos foi exatamente isso para mim.

Com uma escrita simples e envolvente, este leva-nos a descobrir um capítulo pouco conhecido da história: o das crianças órfãs que eram enviadas de comboio em busca de novas famílias e de uma oportunidade de vida melhor, em busca de amor e cuidado. Baseado em testemunhos reais da verdadeira história por detrás da vida destas tantas crianças. Ao longo da leitura, é impossível não sentir um aperto no coração ao perceber a dureza dessa realidade, especialmente por envolver crianças muitas vezes tratadas de forma desumana.

A narrativa alterna entre o passado e o presente, criando um paralelismo interessante com uma jovem da atualidade que, de forma inesperada, acaba por se cruzar com a vida da protagonista. À medida que as memórias vão sendo partilhadas, percebemos que esta não é apenas uma história dura, é também uma história de coragem, resiliência e esperança, com partes muito agoniantes que nos fazem sentir um misto de emoções.

Apesar dos momentos emocionalmente pesados, é um livro de leitura fluida, daqueles que nos fazem querer continuar sempre mais um capítulo. Foi também um livro que me fez sentir muita compaixão pela personagem principal e pelo caminho difícil que teve de percorrer até conseguir encontrar, finalmente, alguma felicidade.

Um drama histórico marcante, que nos faz refletir sobre o passado e sobre a incrível capacidade humana de resistir, mesmo quando a vida parece tirar quase tudo.`,
            signedBy: "Nádia Filipa"
        },
        "O Namorado": {
            stars: "★★★★★",
            quote: `Nem todos os monstros parecem assustadores - alguns parecem perfeitos.`,
            text: `O Namorado”, de Freida McFadden, é um thriller envolvente que prende o leitor desde a primeira página. A autora faz-nos questionar até onde se é capaz de ir por amor e o lado obscuro de cada personagem. 

Com capítulos curtos e um ritmo rápido, é daqueles livros que se lê quase de uma assentada. Como já é habitual nos thrillers de Freida McFadden, a história está cheia de reviravoltas e momentos que fazem o leitor repensar tudo o que achava que sabia. 

Um thriller viciante, cheio de tensão e mistério, perfeito para quem gosta de histórias onde nada é o que parece.`,
            signedBy: "Sara Rebeca"
        },
        "Isto Não Acontece nos Filmes": {
            stars: "★★★★★",
            quote: `Não quero ser apenas mais uma parte da tua história… quero ser o teu final.`,
            text: `Este é um daqueles livros que nos lembram porque é que gostamos tanto do género Romance. “Isto Não Acontece nos Filmes”, de Lynn Painter, é exatamente o tipo de leitura leve, divertida, com questões emocionais mas reconfortante.

A história acompanha uma protagonista completamente apaixonada por filmes românticos e por todas as ideias de amor que eles nos fazem acreditar. Entre grandes referências a clássicos do cinema que todos conhecemos e momentos que parecem saídos diretamente de um filme, o livro brinca muito bem com o contraste entre aquilo que imaginamos que o amor deveria ser e aquilo que ele realmente acaba por ser. Com uma dinâmica enemies to lovers cheia de química crescente, a narrativa prende e flui de uma forma que nos faz virar páginas quase sem dar por isso.

Apesar de ter aquele toque de cliché que reconhecemos neste género, a autora consegue dar-lhe um outro ar, mais fresco e juvenil. Com atenção aos detalhes de forma inteligente, seja na construção das personagens, nas suas inseguranças e traumas, ou na forma como o romance se vai desenvolvendo. Não é uma história lenta, o que torna a leitura ainda mais fluida e envolvente, e as personagens são descritas de forma tão carismática que é fácil imaginá-las como se estivéssemos mesmo a ver um filme.

No fundo, este é um livro sobre expectativas, sobre crescer e sobre perceber que, por vezes, o amor que achamos que queremos não é exatamente aquele de que precisamos. E muitas vezes ele pode estar muito mais perto do que imaginamos.

Uma leitura rápida, doce, jovem e muito confortável, daquelas perfeitas para quando só queremos uma história romântica que nos faça sorrir.`,
            signedBy: "Nádia Filipa"
        },
        "A Sombra de Adeline": {
            stars: "★★★★★",
            quote: "O gato comeu-te a língua, ratinha?",
            text: `O livro "A Sombra de Adeline", de H. D. Carlton, é sem sombra de dúvida o livro mais erótico e sombrio que já li até aos dias de hoje. 

Este dark romance intenso e controverso acompanha Adeline, uma jovem escritora que acaba de herdar a antiga casa de família - uma mansão isolada, cheia de história e mistério.

Quando Zade se depara com Adeline, desenvolve de imediato uma obsessão por ela. Zade então decide que ela será sua, quer ela queira, quer não. Adeline começa a sentir desejos que nunca imaginou explorar, levando-a a questionar os próprios limites, vontades e fantasias.

Esta é uma história repleta de desejo, obsessão e erotismo, o que a torna tão irresistível para os leitores de dark romance.`,
            signedBy: "Sara Rebeca"
        },
        "Dança do Mar Estrelado": {
    stars: "★★☆☆☆",
    quote: "É verdade que sempre amei o mar. Mas mentiria se dissesse que a sua natureza intrusiva não me aterrorizava.",
    text: `A “Dança do Mar Estrelado” tem um conceito e uma arte de capa que me chamaram a atenção. Confesso que não adoro ler ficção, pois sinto que tenho dificuldade em acertar no subgénero que me agrada, arrisquei com este e, mais uma vez, a escolha foi ao lado.

A história acompanha Lila, uma bailarina que, após cometer um erro no palco e cair, perde as estribeiras. Devido à pressão constante que sempre sofreu, ela acaba por descarregar na mãe de forma violenta. Como consequência, os pais enviam-na para a Ilha Luna para viver com a tia. A ilha é mágica, repleta de mitos sobre a existência de anjos.

O conceito é interessante, sendo baseado no mito de Hades e Perséfone. Por isso, a história dá a ideia de ser um romance, mas Damien mal aparece e, quando surge, as cenas são pouco exploradas. O foco narrativo reside quase inteiramente nas feridas internas de Lila. Grande parte do livro resume-se à protagonista a tentar perceber o que se passa à sua volta, respondendo às próprias dúvidas sozinha, ninguém lhe dá respostas, ela simplesmente tem "palpites" que, por acaso, estão sempre certos.

Não existe um desenvolvimento completo entre o par romântico. A relação evolui muito rápido, o que me impediu de criar uma ligação com o casal. A evolução de Lila pareceu-me repentina. Num momento ela é extremamente insegura e, logo a seguir, transforma-se numa mulher decidida. Essa mudança soou "do nada", sem um processo de amadurecimento credível.

A escrita da autora foca-se nos pontos errados. Há um detalhismo excessivo em roupas, cheiros e cenários, enquanto as cenas de ação são despachadas rapidamente. Isso torna a leitura aborrecida nos momentos de transição e frustrante nos momentos de clímax, que passam num fôlego.

No geral, a história e a caracterização das personagens pareceram-me bastante forçadas.`,
    signedBy: "Nadia Irina"
},
        "A Dor que Fica": {
    stars: "★★★★☆",
    quote: "Adoro quando te magoas, querida, mas só quando sou eu a infligir a dor.",
    text: `A Dor que Fica”, da autoria de H. D. Carlton, é uma história sobre obsessão, trauma, dor, amor sombrio e paixão. 

Sawyer foge de monstros do seu passado, que a atormentam, obrigando-a a isolar-se do mundo. Quando ela conhece Enzo, um italiano charmoso e perigoso, uma atração entre ambos surge logo de imediato, fazendo com que não se consigam resistir um ao outro. 

No entanto, Sawyer vê-se obrigada a mentir e enganar Enzo para continuar a sobreviver e ele? Ele quer vingança por ter sido enganado por uma bonita ladra. 

Os dois vêm-se presos um ao outro quando naufragam para uma ilha remota. Na ilha do corvo, apenas habita uma alma, o faroleiro estranho, que lhes dá abrigo. No entanto, ele esconde segredos obscuros e intenções cruéis. 

Feridas irão reabrir, sentimentos obscuros emergirão e uma obsessão começará a formar-se. 

Um dark romance tão intenso que nos deixa com água na boca mas também com uma tristeza no coração.`,
    signedBy: "Sara Rebeca"
},

    "A Criada": {
    stars: "★★★★☆",
    quote: "Nem tudo o que parece seguro é, de facto, um refúgio.",
    text: `Há livros que nos devoram. A trilogia A Criada é claramente deste tipo. Com uma escrita viciante, envolvente e cheia de tensão, Freida McFadden consegue prender-nos desde a primeira página até ao último suspiro de cada capítulo, daqueles que dizemos “só mais um” e, de repente, já são 3 da manhã.

“A Criada”
O primeiro livro é, sem dúvida, o grande destaque da trilogia. Original, inesperado e com um ritmo que não abranda, apresenta-nos uma história que parece simples… até deixar de o ser. O verdadeiro brilho está na forma como tudo se transforma, levando-nos a questionar absolutamente tudo e todos. O plot twist final não é apenas surpreendente é daqueles que nos obriga a voltar atrás mentalmente e perceber o quão enganados estivemos, faz nos questionar todos os pequenos detalhes que lemos ao longo da história e como não conseguimos perceber antecipadamente a verdade.`,
    signedBy: "Nádia Filipa"
},
        "O Segredo da Criada": {
    stars: `★★★<span style="position:relative; display:inline-block; color:#ccc;">☆<span style="position:absolute; left:0; top:0; width:50%; overflow:hidden; color:#B8962E;">★</span></span>☆`,
    quote: "Às vezes, os maiores segredos são aqueles que escolhemos não ver.",
    text: `O segundo livro mantém o suspense característico da autora, com aquele ambiente tenso e desconfortável típico de que o perigo está á espreita que já esperamos e adoramos. No entanto, comparativamente ao primeiro, a ligação emocional à história e às personagens não é tão forte. Continua a ser uma leitura envolvente, mas falta-lhe aquele impacto arrebatador que nos deixa completamente rendidos. Ainda assim, a escrita continua afiada e impossível de largar.`,
    signedBy: "Nádia Filipa"
},
        "A Criada Está a Ver": {
    stars: "★★★★☆",
    quote: "Há olhares que dizem mais do que qualquer verdade alguma vez dita.",
    text: `O terceiro livro recupera parte da intensidade que sentimos no início da trilogia. Mais cativante do que o segundo, traz uma evolução interessante à história e aprofunda relações que já vinham a ser construídas especialmente aquelas que tantos leitores já acompanhavam com carinho. Há mais emoção, mais envolvimento, e uma sensação mais familiar ao redor de toda a história, com personagens que já nos parecem próximos e que nos afeiçoamos permite uma dinâmica crescente e amarga ao mesmo tempo por nos fazer duvidar “de quem já tão bem conhecemos” . Ainda assim, não supera a genialidade do primeiro. No geral, esta trilogia é uma experiência compulsiva e cheia de reviravoltas, perfeita para quem adora thrillers psicológicos que brincam com a nossa perceção da realidade. Mesmo com algumas oscilações ao longo dos livros, o talento de Freida McFadden para criar histórias viciantes é inegável. E no fim, fica aquela sensação agridoce: nenhum livro superou o primeiro… mas todos nos deram uma razão para continuar a virar páginas sem parar.`,
    signedBy: "Nádia Filipa"
},
        "Pequenas Mentiras Inocentes": {
    stars: "★★★★☆",
    quote: "Às vezes, as mentiras mais perigosas são aquelas que aprendemos a contar como se fossem tradições.",
    text: `Se o assunto for livros que nos envolvem como um segredo sussurrado ao ouvido. “Pequenas Mentiras Inocentes”, de Jennifer Lynn Barnes, é exatamente a escolha perfeita: uma teia elegante de mistério, luxo e verdades escondidas sob camadas de perfeição.

Com uma escrita ágil e fluída, este é daqueles livros que se lê quase sem dar por isso. As páginas passam rápido, sem momentos arrastados, enquanto a história se vai apertando lentamente como um laço invisível que nos prende cada vez mais. Não é um thriller pesado ou psicológico, mas tem aquele toque viciante.

A narrativa leva-nos diretamente para um mundo distante da realidade da maioria…o da alta sociedade, onde poder, influência e aparência valem tanto ou mais do que a verdade. Entre vestidos deslumbrantes, bailes sofisticados e eventos luxuosos, existe algo muito mais sombrio a crescer por baixo de cada personagem.

Seguimos três jovens protagonistas, diferentes entre si, mas ligadas por algo maior do que aparenta. Um segredo. Ou talvez vários. À medida que a história avança, percebemos que nada surge do nada tudo é herdado, repetido, passado de geração em geração como uma tradição silenciosa feita de mentiras, pactos e escolhas duvidosas.

O mais cativante é essa sensação constante de estar a tentar montar um puzzle incompleto. As peças vão sendo reveladas pouco a pouco, obrigando-nos a questionar tudo, quem está a dizer a verdade? Quem está a manipular quem? E até onde alguém iria para proteger o seu lugar neste mundo?

Não é um livro que tenta ser avassalador e talvez seja aí que ganha. É consistente, envolvente e perfeito para quem procura uma leitura leve mas intrigante, ideal para um fim de semana ou dias de férias, sem nunca perder o charme.
`,
    signedBy: "Nádia Filipa"
},
        "A Enfermeira": {
    stars: "★★☆☆☆",
    quote: "Farás o bem.",
    text: `“A Enfermeira”, de Valerie Keogh, conta a história de Lissa, uma mulher que se torna enfermeira depois de ter crescido a ser ignorada e mal tratada pelos colegas. No entanto, Lissa não se torna cuidadora por ser bondosa e empática. 



Na minha opinião, este thriller deixou muito a desejar. A história até cativa no início, no entanto, o enredo ficou bastante aquém, e a escrita tornou-se bastante aborrecida. Ficaram algumas pontas soltas e o final desiludiu muito. A autora poderia ter proporcionado aos fãs de thrillers um final muito mais emocionante e explorado mais aspetos da trama. Uma história da qual estás sempre à espera de que, a qualquer momento haverá um plot twist que te irá deixar de queixo caído, porém, isso nunca acontece.`,
    signedBy: "Sara Rebeca"
},
        "Noiva": {
    stars: "★★★★☆",
    quote: "Algumas noites, quando ele passa pela porta dela, tem de sussurrar a si mesmo: Continua a andar.",
    text: `“Noiva”, de Ali Hazelwood, parece leve… até deixar marca. Este romance, elétrico e mordaz entre uma vampira e um lobisomem, é simultaneamente leve e sangrento, da maneira mais doce possível. A química entre os dois personagens é lenta, tensa e palpável e quando explode, leva tudo consigo. 
    
Misery é a filha do vampiro mais poderoso do norte da América. Desde pequena que é facilmente descartada por todos, principalmente pelo próprio pai, e usada como garantia de paz entre os humanos e vampiros. É, então, em território humano que cria laços inquebráveis com Serena, a sua melhor e única amiga humana. Misery serviu como garantia durante 10 anos entre os humanos, e assim que esta responsabilidade foi finalmente cumprida, decidiu que nunca mais iria por os pés em território vampírico. 
Mas Serena desaparece de um dia para o outro sem deixar rasto. E o pai de Misery volta a convocá-la passados todos estes anos, desta vez para ser entregue aos lobisomens. 
Agora Misery deve casar-se com Lowe, o Alfa dos lobisomens, de modo a que haja um acordo de paz entre os dois povos. Misery só aceita casar-se com o Alfa porque suspeita de que ele possa estar envolvido no desaparecimento de Serena.
Assim que vê Misery vestida de noiva, Lowe fica enfeitiçado e sabe exatamente o quão arruinado está. Afinal, não é aceite que lobisomens e vampiros se apaixonem.  `,
    signedBy: "Sara Rebeca"
},

    };

    // ── CONFIGURAÇÃO DE ASSINATURAS PERSONALIZADAS ──
    const personalSignatures = {
        "Nádia Filipa": "Com amor, até ao próximo capítulo,<br><strong style='font-size: 1.2rem; color: var(--navy);'>Nádia Filipa</strong>",
        "Nadia Irina": "Com carinho, do meu lado da estante,<br><strong style='font-size: 1.2rem; color: var(--navy);'>Nadia Irina</strong>",
        "Sara Rebeca": "Com carinho e histórias no coração,<br><strong style='font-size: 1.2rem; color: var(--navy);'>Sara Rebeca</strong>"
    };

    const fecharModal = () => {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // Abrir a modal
    document.querySelectorAll('.btn-outline').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = button.closest('.book-card');
            if (!card) return;

            const title = card.querySelector('.book-card-title').innerText.trim();
            const author = card.querySelector('.book-card-author').innerText;
            const data = reviewsData[title];

            if (data) {
                e.preventDefault();
                document.getElementById('modalTitle').innerText = title;
                document.getElementById('modalAuthor').innerText = author;
                document.getElementById('modalStars').innerHTML = data.stars;
                document.getElementById('modalQuote').innerText = `"${data.quote}"`;
                
                // Lógica de texto e assinatura personalizada
                let reviewHtml = data.text;
                
                if (data.signedBy && personalSignatures[data.signedBy]) {
                    reviewHtml += `<br><br><div style="text-align: right; font-style: italic; color: var(--gold); font-family: var(--font-display);">
                        ${personalSignatures[data.signedBy]}
                    </div>`;
                }

                // Usamos innerHTML para os parágrafos e assinaturas funcionarem
                document.getElementById('modalText').innerHTML = reviewHtml;
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });

    if (closeModal) closeModal.onclick = fecharModal;

    window.onclick = (event) => {
        if (event.target == modal) fecharModal();
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") fecharModal();
    });
});
