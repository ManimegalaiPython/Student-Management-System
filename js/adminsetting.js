function editProfile() {
    const name = prompt("Enter your new name:");
    if (name) {
        alert("Profile updated successfully!");
    }
}

function changePassword() {
    const newPassword = prompt("Enter new password:");
    if (newPassword) {
        alert("Password changed successfully!");
    }
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        alert("Logged out successfully!");
        // Example redirect:
        window.location.href = "index.html";
    }
}
