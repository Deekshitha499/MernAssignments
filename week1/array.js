//HandsOn1
const temperatures = [32, 35, 28, 40, 38, 30, 42];
const above35 = temperatures.filter(temp => temp > 35);
const fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
const averageTemp =temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
const firstAbove40 = temperatures.find(temp => temp > 40);
const indexOf28 = temperatures.findIndex(temp => temp === 28);

console.log("Temperatures above 35:", above35);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);
console.log("Average Temperature:", averageTemp.toFixed(2));
console.log("First temperature above 40:", firstAbove40);
console.log("Index of temperature 28:", indexOf28);

//HandsOn2
const courses = ["javascript", "react", "node", "mongodb", "express"];
const longCourses = courses.filter(course => course.length > 5);
const upperCourses = courses.map(course => course.toUpperCase());
const courseString = upperCourses.reduce(
    (result, course) => result + " | " + course
);
const foundCourse = courses.find(course => course === "react");
const nodeIndex = courses.findIndex(course => course === "node");

console.log("Courses with length > 5:", longCourses);
console.log("Uppercase courses:", upperCourses);
console.log("Combined string:", courseString);
console.log("Found course:", foundCourse);
console.log("Index of node:", nodeIndex);

//HandsOn3
const marks = [78, 92, 35, 88, 40, 67];
const passedMarks = marks.filter(mark => mark >= 40);
const graceMarks = marks.map(mark => mark + 5);
const highestMark = marks.reduce(
    (max, mark) => (mark > max ? mark : max),
    marks[0]
);
const firstFail = marks.find(mark => mark < 40);
const indexOf92 = marks.findIndex(mark => mark === 92);

console.log("Passed marks:", passedMarks);
console.log("Marks after grace:", graceMarks);
console.log("Highest mark:", highestMark);
console.log("First failed mark:", firstFail);
console.log("Index of 92:", indexOf92);


