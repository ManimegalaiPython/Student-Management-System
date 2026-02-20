function editMarks() {
    let inputs = document.querySelectorAll("#marksTable input");
    inputs.forEach(input => input.disabled = false);
    alert("You can now edit marks.");
}

function saveMarks() {

    let rows = document.querySelectorAll("#marksTable tr");

    rows.forEach(row => {

        let markInput = row.querySelector("input");
        let gradeCell = row.querySelector(".grade");

        let marks = parseInt(markInput.value);

        if (marks >= 90) gradeCell.textContent = "A+";
        else if (marks >= 80) gradeCell.textContent = "A";
        else if (marks >= 70) gradeCell.textContent = "B";
        else if (marks >= 60) gradeCell.textContent = "C";
        else gradeCell.textContent = "D";

        markInput.disabled = true;
    });

    alert("Marks Saved Successfully!");
}

function submitApproval() {

    const exam = document.getElementById("examSelect").value;
    const classSubject = document.getElementById("classSubjectSelect").value;

    if (!exam || !classSubject) {
        alert("Please select Exam and Class & Subject.");
        return;
    }

    alert("Marks Submitted for Approval!");
}
