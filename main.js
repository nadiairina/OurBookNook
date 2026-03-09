document.addEventListener('DOMContentLoaded', () => {

    // ── 1. NAVBAR (SCROLL & TRANSPARENCY) ──────────────────────────────────
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

    // ── 2. SCROLL REVEAL (ANIMAÇÕES AO DESCER A PÁGINA) ─────────────────────
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // ── 3. EFEITO 3D E SOMBRA DINÂMICA NOS LIVROS ───────────────────────────
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

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            card.style.boxShadow = `${-rotateY * 3}px ${rotateX * 3}px 35px rgba(28, 43, 58, 0.25)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });

    // ── 4. LÓGICA DA MODAL (ABRIR REVIEW) ──────────────────────────────────
    const modal = document.getElementById("reviewModal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");

    // Seleciona botões de review (funciona na página de Reviews e nos Destaques da Home)
    const allReviewBtns = document.querySelectorAll('.btn-read-review, .btn-outline[data-title]');

    allReviewBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Captura os dados do botão
            const title = this.getAttribute('data-title');
            const stars = this.getAttribute('data-stars');
            const quote = this.getAttribute('data-quote');
            const text = this.getAttribute('data-text');

            // Se o botão não tiver dados, não faz nada (evita erro em links vazios)
            if(!title) return;

            // Preencher a modal
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalStars').innerText = stars;
            document.getElementById('modalQuote').innerText = quote;
            document.getElementById('modalText').innerText = text;

            // Mostrar com animação
            modal.style.display = "block";
            modal.style.opacity = "0";
            modalContent.style.transform = "scale(0.8) translateY(30px)";
            
            setTimeout(() => {
                modal.style.transition = "opacity 0.4s ease";
                modalContent.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
                modal.style.opacity = "1";
                modalContent.style.transform = "scale(1) translateY(0)";
            }, 10);
            
            document.body.style.overflow = "hidden"; // Bloqueia scroll do fundo
        });
    });

    // Função para fechar a modal
    const closeWithAnim = () => {
        if(!modal) return;
        modal.style.opacity = "0";
        modalContent.style.transform = "scale(0.8) translateY(30px)";
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 400);
    };

    if(closeModal) closeModal.onclick = closeWithAnim;
    window.onclick = (event) => { if (event.target == modal) closeWithAnim(); };

    // ── 5. FORMULÁRIO DE CONTACTO ──────────────────────────────────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.innerText = 'A selar mensagem…';
            btn.disabled = true;

            setTimeout(() => {
                const msg = document.createElement('p');
                msg.innerHTML = '❦ A vossa correspondência foi enviada com sucesso!';
                msg.style.cssText = `
                    font-family: var(--font-body);
                    font-style: italic;
                    color: var(--gold);
                    margin-top: 1.5rem;
                    text-align: center;
                `;
                form.appendChild(msg);
                form.reset();
                btn.innerHTML = orig;
                btn.disabled = false;
                setTimeout(() => msg.remove(), 5000);
            }, 1500);
        });
    }

    // ── 6. SMOOTH SCROLL PARA LINKS ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            // Não aplica smooth scroll se for o botão de abrir review
            if (id === '#' || this.hasAttribute('data-title')) return;
            
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
