function toggleEdit() {
  const editForm = document.getElementById("editForm");
  const passForm = document.getElementById("passwordForm");

  editForm.classList.toggle("hidden");
  passForm.classList.add("hidden");

  // Pre-fill values
  document.getElementById("editName").value =
    document.getElementById("nameText").innerText;
  document.getElementById("editEmail").value =
    document.getElementById("emailText").innerText;
  document.getElementById("editPhone").value =
    document.getElementById("phoneText").innerText;
}

function togglePassword() {
  const editForm = document.getElementById("editForm");
  const passForm = document.getElementById("passwordForm");

  passForm.classList.toggle("hidden");
  editForm.classList.add("hidden");
}

function saveProfile() {
  document.getElementById("nameText").innerText =
    document.getElementById("editName").value;
  document.getElementById("emailText").innerText =
    document.getElementById("editEmail").value;
  document.getElementById("phoneText").innerText =
    document.getElementById("editPhone").value;

  alert("Profile Updated Successfully!");
  document.getElementById("editForm").classList.add("hidden");
}

function updatePassword() {
  const newPass = document.getElementById("newPass").value;
  const confirmPass = document.getElementById("confirmPass").value;

  if (newPass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  alert("Password Changed Successfully!");
  document.getElementById("passwordForm").classList.add("hidden");
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    alert("Logged out successfully!");
    window.location.href = "index.html";   // Redirect to index.html
  }
}

