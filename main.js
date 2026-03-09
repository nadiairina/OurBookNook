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



    // ── 4. EFEITO 3D E SOMBRA DINÂMICA NOS LIVROS ───────────────────────────
    const cards = document.querySelectorAll('.book-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Inclinação suave
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

    // ── 5. LÓGICA DA MODAL (COM TRANSIÇÕES SUAVES) ──────────────────────────
    const modal = document.getElementById("reviewModal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll('.btn-read-review').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Preencher dados
            document.getElementById('modalTitle').innerText = this.getAttribute('data-title');
            document.getElementById('modalStars').innerText = this.getAttribute('data-stars');
            document.getElementById('modalQuote').innerText = this.getAttribute('data-quote');
            document.getElementById('modalText').innerText = this.getAttribute('data-text');

            // Reset de estilos para animação de entrada
            modal.style.display = "block";
            modal.style.opacity = "0";
            modalContent.style.transform = "scale(0.8) translateY(30px)";
            
            // Trigger da animação
            setTimeout(() => {
                modal.style.transition = "opacity 0.4s ease";
                modalContent.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
                modal.style.opacity = "1";
                modalContent.style.transform = "scale(1) translateY(0)";
            }, 10);
            
            document.body.style.overflow = "hidden";
        });
    });

    const closeWithAnim = () => {
        modal.style.opacity = "0";
        modalContent.style.transform = "scale(0.8) translateY(30px)";
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 400);
    };

    if(closeModal) closeModal.onclick = closeWithAnim;
    window.onclick = (event) => { if (event.target == modal) closeWithAnim(); };

    // ── 6. CONTACT FORM (SIMULADO) ──────────────────────────────────────────
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
                    animation: fadeIn 1s ease;
                `;
                form.appendChild(msg);
                form.reset();
                btn.innerHTML = orig;
                btn.disabled = false;
                setTimeout(() => msg.remove(), 5000);
            }, 1500);
        });
    }

    // ── 7. SMOOTH SCROLL PARA LINKS ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#' || this.classList.contains('btn-read-review')) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
