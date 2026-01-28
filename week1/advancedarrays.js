//HandsOn1
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

const inStockProducts = cart.filter(item => item.inStock);
const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
const grandTotal = productTotals.reduce(
  (sum, item) => sum + item.totalPrice,
  0
);
const mouseDetails = cart.find(item => item.name === "Mouse");
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log("In-stock products:", inStockProducts);
console.log("Product totals:", productTotals);
console.log("Grand total:", grandTotal);
console.log("Mouse details:", mouseDetails);
console.log("Keyboard index:", keyboardIndex);

//HandsOn2
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const passedStudents = students.filter(student => student.marks >= 40);
const studentsWithGrade = students.map(student => {
  let grade;
  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return { ...student, grade };
});

const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
const student92 = students.find(student => student.marks === 92);
const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log("Passed students:", passedStudents);
console.log("Students with grades:", studentsWithGrade);
console.log("Average marks:", averageMarks.toFixed(2));
console.log("Student with 92 marks:", student92);
console.log("Index of Kiran:", kiranIndex);

//HandsOn3
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const itEmployees = employees.filter(emp => emp.department === "IT");
const employeesWithNetSalary = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
const totalPayout = employeesWithNetSalary.reduce(
  (sum, emp) => sum + emp.netSalary,
  0
);
const employee30000 = employees.find(emp => emp.salary === 30000);
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");

console.log("IT Employees:", itEmployees);
console.log("Employees with Net Salary:", employeesWithNetSalary);
console.log("Total Salary Payout:", totalPayout);
console.log("Employee with salary 30000:", employee30000);
console.log("Index of Neha:", nehaIndex);

//HandsOn4
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
const movieLabels = sciFiMovies.map(
  movie => `${movie.title} (${movie.rating})`
);
const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
const jokerMovie = movies.find(movie => movie.title === "Joker");
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");

console.log("Sci-Fi Movies:", sciFiMovies);
console.log("Movie Labels:", movieLabels);
console.log("Average Rating:", averageRating.toFixed(2));
console.log("Joker Movie:", jokerMovie);
console.log("Index of Avengers:", avengersIndex);


//HandsOn5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(transaction => transaction.type === "credit");
const transactionAmounts = transactions.map(transaction => transaction.amount);
const finalBalance = transactions.reduce((balance, transaction) => {
  return transaction.type === "credit"
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);

const firstDebit = transactions.find(
  transaction => transaction.type === "debit"
);
const indexOf10000 = transactions.findIndex(
  transaction => transaction.amount === 10000
);

console.log("Credit Transactions:", creditTransactions);
console.log("Transaction Amounts:", transactionAmounts);
console.log("Final Account Balance:", finalBalance);
console.log("First Debit Transaction:", firstDebit);
console.log("Index of transaction with 10000:", indexOf10000);


