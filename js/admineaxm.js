// ================= RESULTS DATA =================
const results = [
    { subject: "Mathematics", marks: 85, total: 100 },
    { subject: "Science", marks: 78, total: 100 },
    { subject: "English", marks: 92, total: 100 },
    { subject: "Social Studies", marks: 88, total: 100 },
    { subject: "Computer Science", marks: 95, total: 100 }
];

const tableBody = document.getElementById("resultTableBody");

// ================= GRADE FUNCTION =================
function calculateGrade(marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B+";
    if (marks >= 60) return "B";
    return "C";
}

// ================= RENDER RESULTS =================
function renderResults() {
    if (!tableBody) return;

    tableBody.innerHTML = "";
    let totalObtained = 0;
    let totalMax = 0;

    results.forEach(result => {
        totalObtained += result.marks;
        totalMax += result.total;

        const row = `
            <tr>
                <td>${result.subject}</td>
                <td>${result.marks}</td>
                <td>${result.total}</td>
                <td>${calculateGrade(result.marks)}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    const totalMarksEl = document.getElementById("totalMarks");
    const finalGradeEl = document.getElementById("finalGrade");

    if (totalMarksEl)
        totalMarksEl.textContent = `${totalObtained} / ${totalMax}`;

    if (finalGradeEl)
        finalGradeEl.textContent = calculateGrade(totalObtained / results.length);
}

// ================= TAB SWITCHING =================
function showTab(tabName) {
    // Hide all sections
    document.querySelectorAll(".tab-content").forEach(section => {
        section.classList.add("hidden");
    });

    // Remove active from tabs
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    // Show selected section
    document.getElementById(tabName + "Section").classList.remove("hidden");

    // Activate correct tab
    if (tabName === "upcoming")
        document.querySelectorAll(".tab")[0].classList.add("active");

    if (tabName === "past")
        document.querySelectorAll(".tab")[1].classList.add("active");

    if (tabName === "results")
        document.querySelectorAll(".tab")[2].classList.add("active");
}

// ================= CREATE EXAM BUTTON =================
const createBtn = document.getElementById("createExamBtn");

if (createBtn) {
    createBtn.addEventListener("click", function () {
        const subject = prompt("Enter Subject Name:");
        if (!subject) return;

        const marks = parseInt(prompt("Enter Marks Obtained:"));
        if (isNaN(marks)) return;

        results.push({ subject, marks, total: 100 });
        renderResults();
        showTab("results");
    });
}

// ================= INITIAL LOAD =================
renderResults();