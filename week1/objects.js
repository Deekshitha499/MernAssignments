//HandsOn1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log("Name:", user.name);
console.log("Email:", user.email);

user.lastLogin = "2026-01-01";
user.role = "admin";
delete user.isActive;
const remainingFields = Object.keys(user);

console.log("Updated User Object:", user);
console.log("Remaining Fields:", remainingFields);

//HandsOn2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};


const values = Object.values(marks);
const totalMarks = values.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / values.length;
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}

marks.computer = 90;
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));
console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);
console.log("Updated Marks Object:", marks);

//HandsOn3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);

console.log("Final Settings:", settings);


