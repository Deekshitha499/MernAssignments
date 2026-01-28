// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

const userCopy = { ...user };
userCopy.name = "Anitha";                 
userCopy.preferences.theme = "light";    
console.log("Original User:", user);
console.log("Copied User:", userCopy);
