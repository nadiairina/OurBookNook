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

    // "Base de Dados" das reviews - O nome deve ser IDÊNTICO ao título no HTML
    const reviewsData = {
        "O Monte dos Vendavais": {
            stars: "★★★★★",
            quote: "Ele é mais eu própria do que eu mesma.",
            text: "Uma história visceral sobre obsessão e amor vingativo. A escrita de Brontë transporta-nos para as charnecas de Yorkshire de forma magistral, onde os sentimentos são tão selvagens quanto o clima."
        },
        "Os Sete Maridos de Evelyn Hugo": {
            stars: "★★★★★",
            quote: "Eles são apenas maridos. Eu sou a Evelyn Hugo.",
            text: "Uma jornada glamorosa e dolorosa pelos segredos de Hollywood. Evelyn ensina-nos que a verdade é muito mais complexa do que as manchetes dos jornais e que o amor verdadeiro raramente é o que o público vê."
        },
        "Twisted Lies": {
            stars: "★★★★★",
            quote: "Ele faria qualquer coisa para a manter.",
            text: "Um romance intenso e viciante que nos prende do início ao fim. A química entre Christian e Stella é palpável, explorando os limites entre a proteção e a obsessão no mundo moderno."
        }
    };

    // Função para abrir a modal ao clicar no botão
    const reviewButtons = document.querySelectorAll('.btn-outline');
    
    reviewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Se o botão for de review, impedimos a navegação e abrimos a modal
            if (button.innerText.toLowerCase().includes("review")) {
                e.preventDefault();
                
                const card = button.closest('.book-card');
                const title = card.querySelector('.book-card-title').innerText.trim();
                const author = card.querySelector('.book-card-author').innerText.trim();
                const data = reviewsData[title];

                if (data && modal) {
                    document.getElementById('modalTitle').innerText = title;
                    document.getElementById('modalAuthor').innerText = author;
                    document.getElementById('modalStars').innerText = data.stars;
                    document.getElementById('modalQuote').innerText = `"${data.quote}"`;
                    document.getElementById('modalText').innerText = data.text;
                    
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden"; // Retira o scroll do site ao fundo
                } else {
                    console.error("Review não encontrada para o título:", title);
                }
            }
        });
    });

    // Fechar a modal no X
    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    // Fechar a modal ao clicar fora da caixa branca
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    // ── 4. EFEITO 3D NOS CARDS (Opcional, mas estava no teu ficheiro) ────────
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });
});
