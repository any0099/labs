function validateLogin(login, password) {
  if (login === "" || password === "") {
    return "Заполните оба поля";
  }

  if (login === "ivanov" && password === "student123") {
    return "Добро пожаловать!";
  }

  return "Неверный логин или пароль";
}

const grades = [
  { subject: "Проектирование интерфейсов", semester: 3, grade: 5 },
  { subject: "Базы данных", semester: 3, grade: 4 },
  { subject: "Математика", semester: 3, grade: 4 }
];

function getGradesBySemester(grades, semester) {
  return grades.filter(item => item.semester === semester);
}

function getAverageGrade(grades) {
  if (grades.length === 0) {
    return 0;
  }

  return grades.reduce((sum, item) => sum + item.grade, 0) / grades.length;
}

const form = document.querySelector(".login-form");
const message = document.querySelector("#login-message");

if (form && message) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const login = document.querySelector("#login").value;
    const password = document.querySelector("#pwd").value;
    const isSuccess = login === "ivanov" && password === "student123";

    message.textContent = validateLogin(login, password);
    message.classList.toggle("message--success", isSuccess);
    message.classList.toggle("message--error", !isSuccess);
  });
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(item => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    tabPanels.forEach(panel => panel.classList.add("is-hidden"));

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    document.querySelector(button.dataset.target).classList.remove("is-hidden");
  });
});

const list = document.querySelector("#grades-list");

if (list) {
  grades.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.subject} — ${item.grade}`;
    list.appendChild(listItem);
  });
}
