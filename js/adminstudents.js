let students = [
    { name: "Sophia Clark", roll: 101, class: "10th", section: "A", status: "Active" },
    { name: "Ethan Walker", roll: 102, class: "10th", section: "B", status: "Active" },
    { name: "Olivia Reed", roll: 103, class: "10th", section: "A", status: "Inactive" },
    { name: "Liam Hayes", roll: 104, class: "10th", section: "B", status: "Active" },
    { name: "Ava Morgan", roll: 105, class: "10th", section: "A", status: "Active" }
];

const tableBody = document.getElementById("studentTableBody");

function renderTable() {
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.class}</td>
                <td>${student.section}</td>
                <td><span class="status-badge">${student.status}</span></td>
                <td class="actions">
                    <a onclick="viewStudent(${index})">View</a> |
                    <a onclick="editStudent(${index})">Edit</a> |
                    <a onclick="deleteStudent(${index})">Delete</a>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function viewStudent(index) {
    const selectedStudent = students[index];

    // Save student data
    localStorage.setItem("selectedStudent", JSON.stringify(selectedStudent));

    // Redirect to adminstudent1.html
    window.location.href = "adminstudent1.html";
}

function editStudent(index) {
    localStorage.setItem("editStudentIndex", index);
    localStorage.setItem("selectedStudent", JSON.stringify(students[index]));
    window.location.href = "adminstudent1.html";
}


function editStudent(index) {
    let newName = prompt("Enter Name:", students[index].name);
    if (newName === null) return;

    let newStatus = prompt("Enter Status (Active/Inactive):", students[index].status);
    if (newStatus === null) return;

    students[index].name = newName;
    students[index].status = newStatus;

    renderTable();
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        renderTable();
    }
}

document.getElementById("addStudentBtn").addEventListener("click", function () {
    let name = prompt("Enter Student Name:");
    if (!name) return;

    let roll = prompt("Enter Roll No:");
    if (!roll) return;

    let studentClass = prompt("Enter Class:");
    if (!studentClass) return;

    let section = prompt("Enter Section:");
    if (!section) return;

    let status = prompt("Enter Status (Active/Inactive):");
    if (!status) return;

    students.push({
        name,
        roll,
        class: studentClass,
        section,
        status
    });

    renderTable();
});

renderTable();
