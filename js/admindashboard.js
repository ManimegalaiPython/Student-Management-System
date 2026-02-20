function logout() {
    alert("Logged out successfully");
    window.location.href = "index.html"; // change if needed
}

function actionClick(action) {
    alert(action + " button clicked");

    // Example navigation (you can create pages later)
    if (action === "Add Student") {
        window.location.href = "adminstudents.html";
    }
    if (action === "Mark Attendance") {
        window.location.href = "adminattendance.html";
    }
      if (action === "Add Teacher") {
        window.location.href = "adminteacher.html";
    }
    if (action === "View Reports") {
        window.location.href = "teacherreport.html";
    }
}

