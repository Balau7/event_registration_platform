// ========== LANGUAGE SWITCHER ==========
const languageBtn = document.getElementById("language-btn");
const languageDropdown = document.getElementById("language-dropdown");
const currentLang = document.getElementById("current-lang");

languageBtn.addEventListener("click", () => {
    languageDropdown.classList.toggle("show");
});

languageDropdown.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
        const selectedLang = item.textContent.trim();
        if (currentLang) {
            currentLang.textContent = selectedLang;
        }
        languageDropdown.classList.remove("show");

        const langCode = selectedLang === "Қазақ" ? "kz" : "en";
        switchLanguage(langCode);
    });
});

document.addEventListener("click", function (e) {
    if (!languageBtn.contains(e.target)) {
        languageDropdown.classList.remove("show");
    }
});

// ========== FAQ TOGGLE ==========
const faqListItems = document.querySelectorAll("#faq-list li");

faqListItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("show");
    });
});

// ========== TRANSLATION ==========
const translations = {
    en: {
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is Events.com?",
        faq_a1: "Events.com is an easy-to-use platform where you can discover, register for, and manage your participation in events from workshops and webinars to large conferences and community gatherings.",
        faq_q2: "How much does it cost to use Events.com?",
        faq_a2: "Creating an account is free! Some events are free to attend, while others may have a registration fee set by the organizers. You’ll always see the price upfront before registering.",
        faq_q3: "Where can I register and join events?",
        faq_a3: "You can register from anywhere using your phone, tablet, or computer. Once registered, you’ll receive all event details, including online access links or venue directions.",
        faq_q4: "How do I cancel or change my registration?",
        faq_a4: "You can manage your registrations through your account dashboard. Just click “Cancel” or “Edit” on the event page. Note: Cancellation policies may vary depending on the event organizer.",
        faq_q5: "What types of events can I find on Events.com?",
        faq_a5: "We feature a wide range of events: tech talks, creative workshops, professional conferences, fitness classes, cultural experiences, and more—both online and in-person."
    },
    kz: {
        faq_title: "Жиі қойылатын сұрақтар",
        faq_q1: "Events.com деген не?",
        faq_a1: "Events.com — бұл семинарлардан бастап үлкен конференцияларға дейін іс-шараларды табуға, тіркелуге және қатысуға арналған ыңғайлы платформа.",
        faq_q2: "Events.com-ды пайдалану қанша тұрады?",
        faq_a2: "Тіркелу тегін! Кейбір іс-шаралар тегін, басқалары ұйымдастырушылар белгілеген тіркеу жарнасын талап етеді. Баға әрқашан алдын ала көрсетіледі.",
        faq_q3: "Қайдан тіркеліп, қатыса аламын?",
        faq_a3: "Сіз кез келген құрылғыдан: телефон, планшет, компьютер арқылы тіркеле аласыз. Тіркелгеннен кейін барлық ақпаратты аласыз.",
        faq_q4: "Тіркеуді қалай өзгертуге немесе жоюға болады?",
        faq_a4: "Тіркеулерді аккаунттағы басқару панелінен өзгертуге болады. Әрбір іс-шара бетінде “Бас тарту” немесе “Өзгерту” батырмасы бар.",
        faq_q5: "Events.com сайтында қандай іс-шаралар бар?",
        faq_a5: "Технологиялық кездесулер, шеберлік сабақтары, конференциялар, фитнес, мәдени іс-шаралар және т.б. — онлайн да, офлайн да."
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const translated = translations[lang] && translations[lang][key];

        if (!translated) return;

        const span = el.querySelector("span");
        if (span) {
            span.textContent = translated;
        } else {
            el.textContent = translated;
        }
    });
}


