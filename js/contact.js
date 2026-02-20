document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Phone validation
    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } else if (phone.length < 10) {
        phoneError.textContent = "Enter valid phone number";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        successMsg.textContent = "Enquiry submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});
