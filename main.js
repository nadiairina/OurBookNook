document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar scroll / transparency logic ──────────────────────────────────
    const nav = document.getElementById('mainNav');
    const hasHero = document.querySelector('.hero');

    if (hasHero) {
        // Home: starts transparent, becomes solid after scrolling past hero banner
        const handleScroll = () => {
            if (window.scrollY > 60) {
                nav.classList.remove('transparent');
            } else {
                nav.classList.add('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run on load
    }
    // Inner pages (review, contacto): nav has no 'transparent' class → always solid

    // ── Scroll reveal animations ─────────────────────────────────────────────
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // Also activate any reveal elements already in view on page load
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });

    // ── Smooth scroll for anchor links ───────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Contact form (simulated) ──────────────────────────────────────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const orig = btn.textContent;
            btn.textContent = 'A enviar…';
            btn.disabled = true;

            setTimeout(() => {
                // Show success message
                const msg = document.createElement('p');
                msg.textContent = '✦ A vossa mensagem foi selada e enviada com sucesso!';
                msg.style.cssText = `
                    font-family: var(--font-body);
                    font-style: italic;
                    font-size: 1.05rem;
                    color: var(--gold);
                    margin-top: 1rem;
                    text-align: center;
                `;
                form.appendChild(msg);
                form.reset();
                btn.textContent = orig;
                btn.disabled = false;

                setTimeout(() => msg.remove(), 4000);
            }, 1200);
        });
    }

});
// Lógica da Modal de Reviews
const modal = document.getElementById("reviewModal");
const closeModal = document.querySelector(".close-modal");

// Seleciona todos os botões "Ler Review"
document.querySelectorAll('.btn-read-review').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Extrai os dados do botão clicado
        const title = this.getAttribute('data-title');
        const stars = this.getAttribute('data-stars');
        const quote = this.getAttribute('data-quote');
        const text = this.getAttribute('data-text');

        // Preenche a modal
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalStars').innerText = stars;
        document.getElementById('modalQuote').innerText = quote;
        document.getElementById('modalText').innerText = text;

        // Mostra a modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Impede scroll no fundo
    });
});

// Fechar ao clicar no X
if(closeModal) {
    closeModal.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Fechar ao clicar fora da janelinha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
