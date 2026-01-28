//HandsOn1
let isLoggedIn = true;
let isProfileComplete = false;
let message;

if (!isLoggedIn) {
    message = "Please login";
} else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";
} else {
    message = "Welcome back!";
}

console.log(message);

//HandsOn2
let price = 1299;
let courseTag;

if (price < 500) {
    courseTag = "Budget Course";
} else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
} else {
    courseTag = "Premium Course";
}

console.log(courseTag);

//HandsOn3
let hasPaid = true;
let hasCompletedBasics = false;

let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";
console.log(enrollMessage);




