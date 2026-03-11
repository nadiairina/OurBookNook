document.addEventListener('DOMContentLoaded', () => {

    // ── 1. NAVBAR
    const nav = document.getElementById('mainNav');
    const hasHero = document.querySelector('.hero');
    if (hasHero && nav) {
        const handleScroll = () => {
            if (window.scrollY > 60) nav.classList.remove('transparent');
            else nav.classList.add('transparent');
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ── 2. SCROLL REVEAL
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // ── 3. LÓGICA DA MODAL DE REVIEWS
    const modal = document.getElementById("reviewModal");
    const closeModal = document.querySelector(".close-modal");

    const reviewsData = {
        "O Monte dos Vendavais": {
            stars: "★★★★★",
            quote: "Ele é mais eu do que eu própria. Seja lá do que for que as nossas almas são feitas, a minha e a dele são feitas do mesmo.” - Catherine Earnshaw",
            text: `Um clássico intenso que não pede desculpa... [Teu Texto]`,
            signedBy: "Nádia Filipa" // A VÍRGULA FOI ADICIONADA NA LINHA ACIMA
        },
        "Os Sete Maridos De Evelyn Hugo": {
            stars: "★★★★★",
            quote: "Eles são apenas maridos. Eu sou a Evelyn Hugo.",
            text: "Um mergulho fascinante na Hollywood clássica..."
        }
        // ... (resto das reviews)
    };

    const fecharModal = () => {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

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
                
                // Prepara o texto
                let fullText = data.text;
                
                // ADICIONA A ASSINATURA NO FINAL DO TEXTO DA MODAL
                if (data.signedBy) {
                    fullText += `<br><br><p style="text-align:right; font-style:italic; font-family:var(--font-display); color:var(--gold);">Com carinho, <br><span style="font-size:1.2rem; color:var(--navy); font-weight:bold;">${data.signedBy}</span></p>`;
                }
                
                document.getElementById('modalText').innerHTML = fullText; // Usamos innerHTML para as quebras de linha (<br>) funcionarem
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });

    if (closeModal) closeModal.onclick = fecharModal;
    window.onclick = (event) => { if (event.target == modal) fecharModal(); };
    document.addEventListener('keydown', (event) => { if (event.key === "Escape") fecharModal(); });
});
