document.addEventListener("DOMContentLoaded", function () {

    /* update heading based on time of day */
    const heading = document.querySelector('.products .heading');
    if (heading) {
        const now = new Date();
        const hour = now.getHours();
        let newTitle = "", newColor = "", newBackground = "", newFontSize = "", neonColor = "";

        if (hour >= 6 && hour < 12) {
            newTitle = "Good Morning Events";
            newColor = "#00BFFF";
            newBackground = "#E0FFFF";
            newFontSize = "32px";
            neonColor = "#00FFFF";
        } else if (hour >= 12 && hour < 18) {
            newTitle = "Afternoon Adventures";
            newColor = "#32CD32";
            newBackground = "#F0FFF0";
            newFontSize = "34px";
            neonColor = "#ADFF2F";
        } else if (hour >= 18 && hour < 23) {
            newTitle = "Evening Vibes";
            newColor = "#BA55D3";
            newBackground = "#F5F5FF";
            newFontSize = "36px";
            neonColor = "#8A2BE2";
        } else {
            newTitle = "🌙 Late Night Specials";
            newColor = "#F8F8FF";
            newBackground = "#191970";
            newFontSize = "32px";
            neonColor = "#FFFFFF";
        }

        heading.innerText = newTitle;
        heading.style.color = newColor;
        heading.style.backgroundColor = newBackground;
        heading.style.padding = "20px";
        heading.style.borderRadius = "15px";
        heading.style.fontSize = newFontSize;
        heading.style.textAlign = "center";
        heading.style.transition = "all 0.7s ease";
        heading.style.cursor = "pointer";

        heading.addEventListener('mouseover', function () {
            heading.style.boxShadow = `0 0 30px 10px ${neonColor}`;
            heading.style.transform = "scale(1.05)";
        });

        heading.addEventListener('mouseout', function () {
            heading.style.boxShadow = "none";
            heading.style.transform = "scale(1)";
        });
    }

    /* render event list from array */
    const arrayContainer = document.getElementById('arrayContainer');
    const eventsArray = ['Concert', 'Festival', 'Exhibition', 'Show Performance', 'Cinema Night'];

    if (arrayContainer) {
        eventsArray.forEach((event, index) => {
            const eventItem = document.createElement('div');
            eventItem.classList.add('item');
            eventItem.textContent = `${index + 1}. ${event}`;
            arrayContainer.appendChild(eventItem);
        });
    }

    /* generate random tickets left message */
    const ticketBoxes = document.querySelectorAll('.tickets-left');
    ticketBoxes.forEach((box) => {
        const tickets = Math.floor(Math.random() * 91) + 10;
        let message = "";

        if (tickets <= 15) {
            message = `Only ${tickets} tickets left!`;
        } else if (tickets <= 50) {
            message = `Look! ${tickets} tickets remaining.`;
        } else {
            message = `${tickets} tickets available.`;
        }

        box.innerHTML = `<p style="font-weight: bold; color: #000000; display: flex; margin-top: 10px;">${message}</p>`;
    });

    /* language dropdown */
    const languageDropdown = document.getElementById("language-btn");
    languageDropdown?.addEventListener("click", () => {
        document.getElementById("language-dropdown")?.classList.toggle("show");
    });

    /* toggle FAQ items */
    const faqListItems = document.querySelectorAll("#faq-list li");
    faqListItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("show");
        });
    });

    /* cart alert message */
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🎟️ Event added to cart!');
        });
    });

    /* mobile menu toggle */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        });
    }


    /* API test */
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
        .then(data => console.log("✅ API работает:", data))
        .catch(err => console.error("❌ Ошибка API", err));

});
