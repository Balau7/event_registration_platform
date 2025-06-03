document.addEventListener("DOMContentLoaded", function() {
    const promoInput = document.getElementById("promoInput");
    const applyPromoButton = document.getElementById("applyPromoButton");
    const promoTimerText = document.getElementById("promoTimer");
    const numberOfTickets = document.getElementById("numberOfTickets");
    const totalPriceInput = document.getElementById("totalPrice");
    const paymentMethods = ["Visa", "Mastercard", "PayPal"];
    const paymentSelect = document.getElementById("paymentMethod");

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        link.setAttribute('href', originalHref.replace('.html', '-new.html'));
    });

    const firstImage = document.querySelector('.card img');
    if (firstImage) {
        firstImage.src = firstImage.src.replace('dimash.jpg', 'updated-event.jpg');
    }


    let promoActive = false;
    let discountPercent = 10;
    let minutesLeft = 5;
    let secondsLeft = 0;
    let promoTimerInterval;

    function updatePromoTimer() {
        let formattedMinutes = minutesLeft.toString();
        let formattedSeconds = secondsLeft.toString().padStart(2, '0');
        promoTimerText.innerText = `Promo code valid: ${formattedMinutes}:${formattedSeconds}`;
    }

    function startPromoTimer() {
        updatePromoTimer();

        promoTimerInterval = setInterval(() => {
            if (secondsLeft === 0) {
                if (minutesLeft === 0) {
                    clearInterval(promoTimerInterval);
                    promoTimerText.innerText = "❌ Promo code expired!";
                    promoTimerText.style.color = "red";
                    promoInput.disabled = true;
                    applyPromoButton.disabled = true;
                    promoActive = false;
                    recalculateTotal();
                    return;
                } else {
                    minutesLeft--;
                    secondsLeft = 59;
                }
            } else {
                secondsLeft--;
            }
            updatePromoTimer();
        }, 1000);
    }

    function recalculateTotal() {
        let ticketCount = parseInt(numberOfTickets.value);
        if (isNaN(ticketCount) || ticketCount <= 0) {
            ticketCount = 1;
        }

        let pricePerTicket = 25;
        let total = pricePerTicket * ticketCount;

        if (promoActive) {
            total = total * (1 - discountPercent / 100);
        }

        totalPriceInput.value = `$${total.toFixed(2)}`;
    }

    applyPromoButton.addEventListener("click", () => {
        const enteredCode = promoInput.value.trim().toUpperCase();
        if (enteredCode === "EVENT10") {
            promoActive = true;
            alert("Promo code applied! 10% discount activated.");
            recalculateTotal();
        } else {
            alert("Invalid promo code!");
        }
    });

    numberOfTickets.addEventListener("input", recalculateTotal);

    for (let i = 0; i < paymentMethods.length; i++) {
        const option = document.createElement("option");
        option.value = paymentMethods[i];
        option.innerText = paymentMethods[i];
        paymentSelect.appendChild(option);
    }
    paymentSelect.addEventListener("change", function() {
        const paymentDetails = document.getElementById("paymentDetails");
        if (paymentSelect.value === "Visa" || paymentSelect.value === "Mastercard") {
            paymentDetails.style.display = "block";
        } else {
            paymentDetails.style.display = "none";
        }
    });

    const ticketModal = document.getElementById("ticketModal");
    ticketModal.addEventListener('show.bs.modal', () => {

        promoActive = false;
        minutesLeft = 5;
        secondsLeft = 0;
        clearInterval(promoTimerInterval);

        promoInput.disabled = false;
        applyPromoButton.disabled = false;
        promoTimerText.style.color = "black";
        promoTimerText.innerText = "";

        promoInput.value = "";
        recalculateTotal();

        startPromoTimer();
    });

    const payButton = document.querySelector('#ticketModal form button[type="submit"]');

    payButton.addEventListener("click", function(event) {
        event.preventDefault();

        let isLoggedIn = false;

        if (!isLoggedIn) {
            alert("❗ You must be logged in to complete the purchase.");
            window.location.href = "login.html";
        } else {

            const toast = new bootstrap.Toast(purchaseToastEl);
            toast.show();
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').split('-')[0];
            switch(page) {
                case 'homepage':
                    console.log('Navigating to Homepage');
                    break;
                case 'tickets':
                    console.log('Already on Tickets page');
                    break;
                default:
                    console.log('Unknown page');
            }
        });
    });

    function simulateAsync(callback) {
        setTimeout(() => {
            callback('Async action complete');
        }, 1000);
    }
    simulateAsync(message => console.log(message));


    // 4th task: adding interactivity with loops

    const allCards = document.querySelectorAll('.card');

    for (let i = 0; i < allCards.length; i++) {
        if (i % 2 === 0) {
            allCards[i].style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        } else {
            allCards[i].style.backgroundColor = 'rgba(72, 209, 204, 0.15)';
        }
    }

    //copyright
    const languageDropdown = document.getElementById("language-btn");
    const faqListItems = document.querySelectorAll("#faq-list li");

    languageDropdown.addEventListener("click", () => {
        document.getElementById("language-dropdown").classList.toggle("show");
    });

    faqListItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("show");
        });
    });
});



//jQuery
$(document).ready(function () {

    $('.card-title').each(function () {
        $(this).text($(this).text() + ' (Updated)');
    });

    $('.card-price').css('font-weight', 'bold');
    $('.card img').attr('alt', 'Event image');

    $('.row').hide().fadeIn(800);

    $('#toggleSeats').click(function () {
        $('#seatList').slideToggle(400);
    });

    let savedCards = JSON.parse(localStorage.getItem('eventCards')) || [];

    function renderCard(event) {
        const card = `
            <div class="col-12 col-sm-6 col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.desc}</p>
                        <p class="card-price">$${event.price}${event.note}</p>
                        <button class="btn btn-primary ticket-btn">Get Tickets</button>
                        <a href="#" class="favorite-icon"><i class="fas fa-heart"></i></a>
                    </div>
                </div>
            </div>
        `;
        $('#eventCardsContainer').append(card);
    }

    // local storage
    savedCards.forEach(renderCard);

    $('.addTicketCard').click(function () {
        const eventNames = [
            "Music Festival",
            "Tech Conference",
            "Food Fair",
            "Art Exhibition",
            "Sports Game"
        ];
        const descriptions = [
            "Join us for an exciting experience filled with fun.",
            "A gathering of minds and innovation. Don't miss out!",
            "A delicious journey for your taste buds!",
            "A showcase of creative talents and masterpieces.",
            "Cheer for your favorite team and enjoy the game!"
        ];
        const priceValues = [30, 55, 40, 25, 60];

        const randomEventName = eventNames[Math.floor(Math.random() * eventNames.length)];
        const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
        const basePrice = priceValues[Math.floor(Math.random() * priceValues.length)];

        let finalPrice = basePrice;
        let discountNote = "";
        if (basePrice > 50) {
            finalPrice = (basePrice * 0.95).toFixed(2);
            discountNote = " (5% off for first purchase)";
        }
        const eventData = {
            name: randomEventName,
            desc: randomDescription,
            price: finalPrice,
            note: discountNote
        };
        savedCards.push(eventData);
        localStorage.setItem('eventCards', JSON.stringify(savedCards));
        renderCard(eventData);
    });

    // double click for deleting
    $('.row').on('dblclick', '.card', function () {
        const cardElement = $(this).closest('.col-12');
        const title = $(this).find('.card-title').text().replace(' (Updated)', '').replace(' (Live)', '').trim();

        const indexToRemove = savedCards.findIndex(event => event.name === title);00

        if (indexToRemove !== -1) {
            savedCards.splice(indexToRemove, 1);
            localStorage.setItem('eventCards', JSON.stringify(savedCards));
        }
        cardElement.fadeOut(300, function () {
            $(this).remove();
        });
    });
});


let favoriteEvents = JSON.parse(localStorage.getItem('favoriteEvents')) || [];

function renderFavorites() {
    const container = $('#favoritesList');
    container.empty();

    if (favoriteEvents.length === 0) {
        container.html('<p>No favorite events yet.</p>');
        return;
    }

    favoriteEvents.forEach(event => {
        const favCard = `
            <div class="mb-3 p-3 border rounded bg-light text-dark">
                <h5>${event.name}</h5>
                <p>${event.desc}</p>
                <strong>$${event.price}${event.note}</strong>
            </div>
        `;
        container.append(favCard);
    });
}

//fav
$(document).on('click', '.favorite-icon', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    const card = $(this).closest('.card-body');
    const event = {
        name: card.find('.card-title').text(),
        desc: card.find('.card-text').text(),
        price: card.find('.card-price').text().replace('$', ''),
        note: ""
    };
    const exists = favoriteEvents.some(f => f.name === event.name && f.desc === event.desc);

    if (!exists) {
        favoriteEvents.push(event);
    } else {
        favoriteEvents = favoriteEvents.filter(f => f.name !== event.name || f.desc !== event.desc);
    }
    localStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
    renderFavorites();
});
$('#favoritesModal').on('show.bs.modal', renderFavorites);

// profile
document.getElementById("openAccountEditor").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("accountModal"));
    document.getElementById("userName").value = localStorage.getItem("userName") || "";
    document.getElementById("userEmail").value = localStorage.getItem("userEmail") || "";
    modal.show();
});

document.getElementById("accountForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();

    if (name && email) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        alert("✅ Changes saved.");
        bootstrap.Modal.getInstance(document.getElementById("accountModal")).hide();
    } else {
        alert("❗ Please fill out both fields.");
    }
});

document.getElementById("openPasswordModal").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("passwordModal"));
    modal.show();
});

document.getElementById("sendResetLink").addEventListener("click", () => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        alert(`Reset link sent to ${userEmail}`);
    } else {
        alert("Email not found. Please update your profile first.");
    }
});

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const oldPass = document.getElementById("oldPassword").value.trim();
    const newPass = document.getElementById("newPassword").value.trim();
    const confirmPass = document.getElementById("confirmPassword").value.trim();

    const savedPass = localStorage.getItem("userPassword");

    if (savedPass && oldPass !== savedPass) {
        alert("Current password is incorrect.");
        return;
    }

    else if (newPass !== confirmPass) {
        alert("New passwords do not match.");
        return;
    }

    else if (newPass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    localStorage.setItem("userPassword", newPass);
    alert("New password saved.");
    bootstrap.Modal.getInstance(document.getElementById("passwordModal")).hide();
});
localStorage.setItem("userPassword", password);
