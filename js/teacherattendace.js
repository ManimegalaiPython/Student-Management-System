function markAttendance() {

    const classValue = document.getElementById("classSelect").value;
    const sectionValue = document.getElementById("sectionSelect").value;
    const dateValue = document.getElementById("attendanceDate").value;

    if (!classValue || !sectionValue || !dateValue) {
        alert("Please select Class, Section and Date");
        return;
    }

    let checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    let presentCount = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) presentCount++;
    });

    alert("Attendance Marked!\nPresent Students: " + presentCount);
}

function updateAttendance() {
    alert("Attendance Updated Successfully!");
}
