const data = {
  "Unit Test": {
    Math: 90,
    Science: 85,
    English: 92
  },
  "Mid Term": {
    Math: 75,
    Science: 80,
    English: 78
  },
  "Final": {
    Math: 88,
    Science: 90,
    English: 85
  }
};

function getExamFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("exam");
}

function loadResult() {
  const exam = getExamFromURL();
  document.getElementById("examName").textContent = exam;

  const marks = data[exam];
  const table = document.getElementById("marksTable");

  let total = 0;

  for (let subject in marks) {
    const row = `<tr>
                   <td>${subject}</td>
                   <td>${marks[subject]}</td>
                 </tr>`;
    table.innerHTML += row;
    total += marks[subject];
  }

  document.getElementById("totalMarks").textContent = total;
}

function goBack() {
  window.location.href = "studentresult.html";
}

loadResult();
