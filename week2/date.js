// Assignment 1: Date Creation & Extraction (Beginner)
const now = new Date();
const year = now.getFullYear();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[now.getMonth()];
const date = now.getDate();
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];
const day = dayNames[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", `${hours}:${minutes}:${seconds}`);

const formattedDate =
  String(date).padStart(2, "0") + "-" +
  String(now.getMonth() + 1).padStart(2, "0") + "-" +
  year + " " +
  String(hours).padStart(2, "0") + ":" +
  String(minutes).padStart(2, "0") + ":" +
  String(seconds).padStart(2, "0");

console.log("Formatted Date:", formattedDate);

//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-20");
const today = new Date();
if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}
const inputDate = "2026-02-30";
function isValidDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return false;
  }
  const [year, month, day] = dateString.split("-").map(Number);
  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}

if (isValidDate(inputDate)) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}

//Assignment 3: Age Calculator (Intermediate)
let dob = "2000-05-15";
const birthDate = new Date(dob);
const todayy = new Date();
let age = todayy.getFullYear() - birthDate.getFullYear();
const hasBirthdayPassed =
  todayy.getMonth() > birthDate.getMonth() ||
  (todayy.getMonth() === birthDate.getMonth() &&
   todayy.getDate() >= birthDate.getDate());

if (!hasBirthdayPassed) {
  age--;
}
console.log("Exact Age:", age, "years");


