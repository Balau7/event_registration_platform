document.addEventListener('DOMContentLoaded', () => {
    /* filter logic */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('#eventsContainer .card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter.toLowerCase();
            cards.forEach(card => {
                const col = card.closest('.col-12');
                col.classList.toggle('d-none', !(cat === 'all' || card.dataset.category.toLowerCase().includes(cat)));
            });
        });
    });

    /* hide second card */
    const hiddenCol = cards[1]?.closest('.col-12');
    if (hiddenCol) {
        hiddenCol.classList.add('d-none');

        /* reveal button */
        const btnReveal = document.createElement('button');
        btnReveal.textContent = 'Reveal Hidden Card';
        btnReveal.className = 'btn btn-success m-2';
        document.querySelector('section').appendChild(btnReveal);

        btnReveal.addEventListener('click', () => {
            hiddenCol.classList.remove('d-none');
            btnReveal.remove();

            /* success message */
            const successMsg = document.createElement('div');
            successMsg.textContent = 'Card revealed successfully!';
            successMsg.className = 'alert alert-success mt-2';
            document.querySelector('section').appendChild(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 3000); // message disappears
        });
    }

    /* mobile menu toggle */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    /* API test */
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => console.log("✅ API работает:", data))
        .catch(err => console.error("❌ Ошибка API", err));
});
