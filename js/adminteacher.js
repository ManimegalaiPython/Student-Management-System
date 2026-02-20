let teachers = [
    { name: "Ms. Emily Carter", subject: "Mathematics", grade: "Grade 10" },
    { name: "Mr. David Lee", subject: "Science", grade: "Grade 11" },
    { name: "Dr. Sarah Jones", subject: "English", grade: "Grade 12" },
    { name: "Prof. Michael Brown", subject: "History", grade: "Grade 9" },
    { name: "Mrs. Olivia Green", subject: "Physics", grade: "Grade 11" }
];

let editIndex = null;

function renderTable() {
    const table = document.getElementById("teacherTable");
    table.innerHTML = "";

    teachers.forEach((teacher, index) => {
        table.innerHTML += `
            <tr>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>${teacher.grade}</td>
                <td><span class="edit-btn" onclick="editTeacher(${index})">Edit</span></td>
            </tr>
        `;
    });
}

function openAddModal() {
    editIndex = null;
    document.getElementById("modalTitle").innerText = "Add Teacher";
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("teacherModal").style.display = "flex";
}

function editTeacher(index) {
    editIndex = index;
    document.getElementById("modalTitle").innerText = "Edit Teacher";
    document.getElementById("name").value = teachers[index].name;
    document.getElementById("subject").value = teachers[index].subject;
    document.getElementById("grade").value = teachers[index].grade;
    document.getElementById("teacherModal").style.display = "flex";
}

function saveTeacher() {
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const grade = document.getElementById("grade").value;

    if (!name || !subject || !grade) {
        alert("Please fill all fields");
        return;
    }

    if (editIndex === null) {
        teachers.push({ name, subject, grade });
    } else {
        teachers[editIndex] = { name, subject, grade };
    }

    closeModal();
    renderTable();
}

function closeModal() {
    document.getElementById("teacherModal").style.display = "none";
}

renderTable();
