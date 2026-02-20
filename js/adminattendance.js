const students = [
    { name: "Liam Harper", roll: 101 },
    { name: "Olivia Bennett", roll: 102 },
    { name: "Noah Carter", roll: 103 },
    { name: "Emma Hayes", roll: 104 },
    { name: "Jackson Reed", roll: 105 },
    { name: "Ava Morgan", roll: 106 },
    { name: "Aiden Foster", roll: 107 },
    { name: "Chloe Parker", roll: 108 },
    { name: "Lucas Wright", roll: 109 },
    { name: "Sophia Evans", roll: 110 }
];

const tableBody = document.getElementById("studentTableBody");

function renderTable() {
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>
                    <input type="checkbox" id="attendance-${index}">
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

document.getElementById("saveBtn").addEventListener("click", function () {

    const selectedClass = document.getElementById("classSelect").value;
    const selectedDate = document.getElementById("dateInput").value;

    if (!selectedClass || !selectedDate) {
        alert("Please select class and date.");
        return;
    }

    let attendanceData = [];

    students.forEach((student, index) => {
        const isPresent = document.getElementById(`attendance-${index}`).checked;

        attendanceData.push({
            name: student.name,
            roll: student.roll,
            present: isPresent
        });
    });

    console.log("Saved Attendance:", {
        class: selectedClass,
        date: selectedDate,
        records: attendanceData
    });

    alert("Attendance saved successfully!");
});

renderTable();
