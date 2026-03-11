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
    // IMPORTANTE: O nome aqui deve ser exatamente igual ao título no HTML
    const reviewsData = {
        "O Monte dos Vendavais": {
            stars: "★★★★☆",
            quote: "Ele é mais eu própria do que eu mesma.",
            text: "Uma história visceral sobre obsessão e amor vingativo. A escrita de Brontë transporta-nos para as charnecas da alma humana de forma crua e inesquecível."
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
        }
    };

    // Função para fechar a modal de forma limpa
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
                document.getElementById('modalText').innerText = data.text;
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Fechar no botão X
    if (closeModal) {
        closeModal.onclick = fecharModal;
    }

    // Fechar ao clicar FORA da modal (no fundo escuro)
    window.onclick = (event) => {
        if (event.target == modal) {
            fecharModal();
        }
    };

    // Fechar ao carregar na tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            fecharModal();
        }
    });

    // ── 4. EFEITO 3D NOS CARDS (Suavizado para não irritar) ────────
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Dividido por 45 para o movimento ser muito subtil
            const rotateX = (y - centerY) / 45;
            const rotateY = (centerX - x) / 45;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
});
