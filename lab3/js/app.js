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

console.log(validateLogin("", ""));
console.log(validateLogin("ivanov", "wrong"));
console.log(validateLogin("ivanov", "student123"));
console.log("Все оценки:");
console.table(grades);
console.log("Оценки за 3-й семестр:", getGradesBySemester(grades, 3));
console.table(getGradesBySemester(grades, 3));
console.log("Оценки за 2-й семестр:", getGradesBySemester(grades, 2));
console.log("Средний балл:", getAverageGrade(grades));
