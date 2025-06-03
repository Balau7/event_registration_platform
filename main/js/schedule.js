document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("ul li");
    const modal = document.getElementById("modal");
    const modalDate = document.getElementById("modal-date");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");
    const bookBtn = document.getElementById("book-now");

    let event = {
        title: "",
        date: "",
        dateFormatted: function () {
            const options = { month: "long", day: "numeric" };
            return new Date(this.date).toLocaleDateString("en-US", options);
        }
    };

    listItems.forEach((li) => {
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
            event.title = li.textContent.trim();
            const time = li.querySelector("time");
            event.date = time.getAttribute("datetime");

            modalDate.textContent = event.dateFormatted();
            modalDescription.textContent = event.title;
            modal.style.display = "block";

        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        currentAudio.volume = volumeControl.value;
    });

    bookBtn.addEventListener("click", () => {
        alert(`You booked for ${event.title} on ${event.dateFormatted()}`);
        modal.style.display = "none";
        currentAudio.volume = volumeControl.value;
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            currentAudio.volume = volumeControl.value;
        }
    });
});
