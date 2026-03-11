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

    const reviewsData = {
        "O Monte dos Vendavais": {
            stars: "★★★★★",
            quote: "Ele é mais eu própria do que eu mesma.",
            text: "Uma história visceral sobre obsessão e amor vingativo. A escrita de Brontë transporta-nos para as charnecas de Yorkshire de forma magistral."
        },
        "Os Sete Maridos de Evelyn Hugo": {
            stars: "★★★★★",
            quote: "Eles são apenas maridos. Eu sou a Evelyn Hugo.",
            text: "Uma jornada glamorosa e dolorosa pelos segredos de Hollywood. Evelyn ensina-nos que a verdade é muito mais complexa do que as manchetes."
        },
        "Twisted Lies": {
            stars: "★★★★★",
            quote: "Ele faria qualquer coisa para a manter.",
            text: "Um romance intenso e viciante que nos prende do início ao fim."
        }
    };

    // Seleciona todos os botões que dizem "Ler Review"
    const reviewButtons = document.querySelectorAll('.btn-outline');
    
    reviewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Verifica se o clique é para uma review
            if (button.textContent.includes("Review")) {
                e.preventDefault();
                
                // No teu HTML, o título está dentro de .book-card-content h3
                const card = button.closest('.book-card');
                const titleElement = card.querySelector('.book-card-title');
                
                if (!titleElement) return;

                const title = titleElement.innerText.trim();
                const data = reviewsData[title];

                if (data && modal) {
                    document.getElementById('modalTitle').innerText = title;
                    document.getElementById('modalStars').innerText = data.stars;
                    document.getElementById('modalQuote').innerText = `"${data.quote}"`;
                    document.getElementById('modalText').innerText = data.text;
                    
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                }
            }
        });
    });

    // Fechar a modal (X)
    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }


        });
    });
});
