function validation() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;

    const namePattern = /^[A-Za-z\s]{2,}$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name with at least 2 characters and only letters.");
        return false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(pwd)) {
        alert("Please enter a strong password.It must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.")
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Validation successful!\n\nName: " + name +
         "\nPhone Number: " + phone + "\nEmail: " + email +
         "\nPassword validated");
    return false;
    
}