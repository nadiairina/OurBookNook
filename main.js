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
        "O Monte dos Vendavais": {
            stars: "★★★★★",
            quote: "Ele é mais eu do que eu própria. Seja lá do que for que as nossas almas são feitas, a minha e a dele são feitas do mesmo.” - Catherine Earnshaw",
            text: `Um clássico intenso que não pede desculpa: “Wuthering Hights”.

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
            quote: "Eles são apenas maridos. Eu sou a Evelyn Hugo.",
            text: "Um mergulho fascinante na Hollywood clássica, onde a verdade é muito mais complexa e dolorosa do que as manchetes dos tablóides sugerem."
        },
        "Amanhecer na Ceifa": {
            stars: "★★★★☆",
            quote: "Onde começa a humanidade e termina a sobrevivência?",
            text: "Suzanne Collins regressa a Panem com uma prequela que desafia a nossa percepção sobre o poder e a natureza do mal."
        },
        "Orgulho e Preconceito": {
            stars: "★★★★★",
            quote: "Só o amor mais profundo me levaria ao matrimónio.",
            text: "O clássico definitivo de Jane Austen. Uma dança elegante de palavras, costumes e a descoberta de que o primeiro julgamento raramente é o correto."
        },
        "O comboio dos Orfãos": {
            stars: "★★★★★",
            quote: "Carregamos o nosso passado no coração, não apenas na bagagem.",
            text: "Uma narrativa comovente que entrelaça gerações, revelando um pedaço esquecido da história americana e a força da amizade improvável."
        },
        "Dança do Mar Estrelado": {
            stars: "★★★★★",
            quote: "A magia não está no oceano, mas no que ele nos faz sentir.",
            text: "Um romance etéreo que combina a brisa marítima com segredos de família. Uma leitura que se sente como um mergulho em águas cristalinas sob o luar."
        },
        "A Criada": {
            stars: "★★★★☆",
            quote: "Ninguém sabe o que acontece atrás de portas fechadas.",
            text: "Um thriller psicológico viciante e claustrofóbico. Freida McFadden constrói uma teia de mentiras que nos mantém a adivinhar até à última página."
        },
        "Twisted Lies": {
            stars: "★★★★★",
            quote: "Faria qualquer coisa para te manter, mesmo que isso significasse queimar o mundo.",
            text: "O desfecho viciante da série Twisted. Uma história de segredos, perigo e um amor possessivo que nos prende do início ao fim."
        },
        "O Namorado": {
    stars: "★★★★★",
    quote: `Nem todos os monstros parecem assustadores - alguns parecem perfeitos.`,
    text: `O Namorado”, de Freida McFadden, é um thriller envolvente que prende o leitor desde a primeira página. A autora faz-nos questionar até onde se é capaz de ir por amor e o lado obscuro de cada personagem. Com capítulos curtos e um ritmo rápido, é daqueles livros que se lê quase de uma assentada. Como já é habitual nos thrillers de Freida McFadden, a história está cheia de reviravoltas e momentos que fazem o leitor repensar tudo o que achava que sabia. Um thriller viciante, cheio de tensão e mistério, perfeito para quem gosta de histórias onde nada é o que parece.`,
    signedBy: "Sara Rebeca"
},
        "Isto Não Acontece nos Filmes": {
    stars: "★★★★★",
    quote: `Não quero ser apenas mais uma parte da tua história… quero ser o teu final.`,
    text: `Este é um daqueles livros que nos lembram porque é que gostamos tanto do género Romance. “Isto Não Acontece nos Filmes”, de Lynn Painter, é exatamente o tipo de leitura leve, divertida, com questões emocionais mas reconfortante.

A história acompanha uma protagonista completamente apaixonada por filmes românticos e por todas as ideias de amor que eles nos fazem acreditar. Entre grandes referências a clássicos do cinema que todos conhecemos e momentos que parecem saídos diretamente de um filme, o livro brinca muito bem com o contraste entre aquilo que imaginamos que o amor deveria ser e aquilo que ele realmente acaba por ser. Com uma dinâmica enemies to lovers cheia de química crescente, a narrativa prende e flui de uma forma que nos faz virar páginas quase sem dar por isso.

Apesar de ter aquele toque de cliché que reconhecemos neste género, a autora consegue dar-lhe um outro ar, mais fresco e juvenil . Com atenção aos detalhes de forma inteligente, seja na construção das personagens, nas suas inseguranças e traumas, ou na forma como o romance se vai desenvolvendo. Não é uma história lenta, o que torna a leitura ainda mais fluida e envolvente, e as personagens são descritas de forma tão carismática que é fácil imaginá-las como se estivéssemos mesmo a ver um filme.

No fundo, este é um livro sobre expectativas, sobre crescer e sobre perceber que, por vezes, o amor que achamos que queremos não é exatamente aquele de que precisamos. E muitas vezes ele pode estar muito mais perto do que imaginamos.

Uma leitura rápida, doce, jovem e muito confortável, daquelas perfeitas para quando só queremos uma história romântica que nos faça sorrir. `,
    signedBy: "Nádia Filipa"
},
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
                document.getElementById('modalStars').innerText = data.stars;
                document.getElementById('modalQuote').innerText = `"${data.quote}"`;
                
                // --- LÓGICA DA ASSINATURA NA JANELA ---
                let reviewFinal = data.text;
                
                // Se houver uma assinatura definida, adicionamos ao texto
                if (data.signedBy) {
                    reviewFinal += `<br><br><div style="text-align: right; font-style: italic; color: var(--gold); font-family: var(--font-display);">Com carinho, <br><strong style="font-size: 1.2rem; color: var(--navy);">${data.signedBy}</strong></div>`;
                }

                // Usamos innerHTML para as quebras de linha (<br>) e o estilo funcionarem
                document.getElementById('modalText').innerHTML = reviewFinal;
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });

    if (closeModal) {
        closeModal.onclick = fecharModal;
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            fecharModal();
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            fecharModal();
        }
    });
});
