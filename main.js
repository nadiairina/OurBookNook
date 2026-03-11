document.addEventListener('DOMContentLoaded', () => {

    // ── 1. NAVBAR (Lógica de Transparência) ──────────────────────────────────
    const nav = document.getElementById('mainNav');
    const hasHero = document.querySelector('.hero');

    if (hasHero) {
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

    // ── 3. EFEITO 3D SUAVE (Sem irritar o utilizador) ────────────────────────
    const cards = document.querySelectorAll('.book-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Dividir por 50 torna o movimento elegante e não saltitante
            const rotateX = (y - centerY) / 50; 
            const rotateY = (centerX - x) / 50;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.boxShadow = `0 15px 35px rgba(28, 43, 58, 0.15)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });

    // ── 4. LÓGICA DA JANELA DE REVIEW (MODAL) ────────────────────────────────
    const modal = document.getElementById("reviewModal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");

    // Seleciona todos os botões que possam ter dados de review
    const allReviewBtns = document.querySelectorAll('.btn-read-review, .btn-outline, .btn-gold');

    allReviewBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            const title = this.getAttribute('data-title');
            
            // Só dispara se o botão tiver de facto atributos de dados e a modal existir no HTML
            if (title && modal) {
                e.preventDefault();
                
                // Preencher campos da modal
                document.getElementById('modalTitle').innerText = title;
                document.getElementById('modalStars').innerText = this.getAttribute('data-stars') || "";
                document.getElementById('modalQuote').innerText = this.getAttribute('data-quote') || "";
                document.getElementById('modalText').innerText = this.getAttribute('data-text') || "";

                // Mostrar a janela
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Impede scroll no fundo
                
                // Pequeno delay para a transição de opacidade do CSS funcionar
                setTimeout(() => {
                    modal.style.opacity = "1";
                    if(modalContent) modalContent.style.transform = "scale(1) translateY(0)";
                }, 10);
            }
        });
    });

    const closeReview = () => {
        if(!modal) return;
        modal.style.opacity = "0";
        if(modalContent) modalContent.style.transform = "scale(0.95) translateY(20px)";
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    };

    if (closeModal) closeModal.onclick = closeReview;
    window.onclick = (event) => { if (event.target == modal) closeReview(); };

    // ── 5. FORMULÁRIO DE CONTACTO (Simulado) ──────────────────────────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerText = 'A selar correspondência…';
            btn.disabled = true;

            setTimeout(() => {
                const msg = document.createElement('p');
                msg.innerHTML = '❦ A vossa mensagem foi enviada com sucesso!';
                msg.style.cssText = "color: var(--gold); font-family: var(--font-body); font-style: italic; margin-top: 1rem; text-align: center;";
                form.appendChild(msg);
                form.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                setTimeout(() => msg.remove(), 5000);
            }, 1200);
        });
    }

    // ── 6. SMOOTH SCROLL PARA LINKS INTERNOS ──────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#' || this.hasAttribute('data-title')) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
const modal = document.getElementById("reviewModal");
const closeModal = document.querySelector(".close-modal");

// 1. Criar um "banco de dados" das reviews
const reviews = {
    "O Monte dos Vendavais": {
        stars: "★★★★★",
        quote: "Ele é mais eu própria do que eu mesma.",
        text: "Uma história visceral sobre obsessão e amor vingativo. A escrita de Brontë transporta-nos para as charnecas de Yorkshire de forma magistral..."
    },
    "Os Sete Maridos de Evelyn Hugo": {
        stars: "★★★★★",
        quote: "Eles são apenas maridos. Eu sou a Evelyn Hugo.",
        text: "Uma jornada glamorosa e dolorosa pelos segredos de Hollywood. Evelyn ensina-nos que a verdade é muito mais complexa do que as manchetes dos jornais."
    }
    // Adiciona os outros livros aqui seguindo o mesmo padrão
};

// 2. Função para abrir a modal
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Impede de saltar para outra página
        
        // Descobre qual é o livro baseado no título do card
        const card = button.closest('.book-card');
        const title = card.querySelector('.book-card-title').innerText;
        const author = card.querySelector('.book-card-author').innerText;
        const data = reviews[title];

        if (data) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalAuthor').innerText = author;
            document.getElementById('modalStars').innerText = data.stars;
            document.getElementById('modalQuote').innerText = `"${data.quote}"`;
            document.getElementById('modalText').innerText = data.text;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Impede o scroll atrás da modal
        }
    });
});

// 3. Fechar a modal
closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
