document.addEventListener("DOMContentLoaded", () => {
    // character count
    const messageInput = document.getElementById("i5vyy-7");
    const charCounter = document.createElement("p");
    charCounter.id = "charCount";
    charCounter.style.fontSize = "0.9rem";
    charCounter.style.color = "#aaa";
    charCounter.style.marginTop = "-10px";
    charCounter.style.marginBottom = "10px";
    messageInput.parentNode.insertBefore(charCounter, messageInput.nextSibling);

    const maxMessageLength = 500;

    messageInput.addEventListener("input", () => {
        const length = messageInput.value.length;
        charCounter.textContent = `${length} / ${maxMessageLength}`;
        if (length > maxMessageLength) {
            messageInput.value = messageInput.value.slice(0, maxMessageLength);
            charCounter.textContent = `${maxMessageLength} / ${maxMessageLength}`;
        }
    });

    // validation on submit
    document.querySelector(".submit-btn").addEventListener("click", (e) => {
        e.preventDefault();

        const firstName = document.getElementById("ijowk-7");
        const lastName = document.getElementById("indfi-5");
        const email = document.getElementById("ipmgh-7");
        const phone = document.getElementById("imgis-6");
        const message = document.getElementById("i5vyy-7");

        const fields = [firstName, lastName, email, phone, message];
        const maxLengths = [40, 40, 100, 20, 100];
        let isValid = true;

        // field validation
        fields.forEach((input, index) => {
            const value = input.value.trim();
            const max = maxLengths[index];

            if (!value || value.length > max) {
                input.style.border = "2px solid red";
                isValid = false;
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        // email format check
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.style.border = "2px solid red";
            isValid = false;
            alert("❗ Please enter a valid email address.");
            return;
        }

        if (isValid) {
            alert("✅ Message sent successfully!");
            document.querySelector("form").reset();
            charCounter.textContent = `0 / ${maxMessageLength}`;
        } else {
            alert("❗ Please fill all fields correctly and stay within limits.");
        }
    });

    // fade-in form animation
    const formBox = document.querySelector(".form-box");
    formBox.style.opacity = 0;
    formBox.style.transform = "translateY(50px)";
    formBox.style.transition = "all 0.6s ease";

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                formBox.style.opacity = 1;
                formBox.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    observer.observe(formBox);
});
const attachmentInput = document.getElementById("attachment");
const preview = document.getElementById("preview");

attachmentInput.addEventListener("change", () => {
    preview.innerHTML = "";

    const file = attachmentInput.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "video/mp4", "video/quicktime", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
        alert("❗ Only images, videos or PDFs are allowed.");
        attachmentInput.value = "";
        return;
    }

    if (file.size > maxSize) {
        alert("❗ File size must be under 5MB.");
        attachmentInput.value = "";
        return;
    }

    if (file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = "150px";
        img.style.marginTop = "10px";
        preview.appendChild(img);
    } else {
        const text = document.createElement("p");
        text.textContent = `✅ File "${file.name}" selected`;
        text.style.color = "#48D1CC";
        preview.appendChild(text);
    }
});
<script async
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
