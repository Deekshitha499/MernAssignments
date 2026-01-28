const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//MODULE 1: USER PROCESSING ENGINE
const getActiveUsers = users => users.filter(u => u.active);
const getActiveUserNames = users => users.filter(u => u.active).map(u => u.name);
const isAdminPresent = users => users.some(u => u.role === "admin");
const findUserById = (users, id) => users.find(u => u.id === id);
const deactivateUser = (users, id) => users.map(u =>u.id === id ? { ...u, active: false } : u);
console.log("Active users:");
console.log(getActiveUsers(users));
console.log("Active user names:");
console.log(getActiveUserNames(users));
console.log("Is admin present?");
console.log(isAdminPresent(users));
console.log("Find user with id=2:");
console.log(findUserById(users, 2));
console.log("Deactivate user id=1:");
console.log(deactivateUser(users, 1));

//MODULE 2: COURSE CATALOG ENGINE
const getPublishedCourses = courses => courses.filter(c => c.published);
const sortCoursesByPriceDesc = courses => [...courses].sort((a, b) => b.price - a.price);
const getCourseSummaries = courses => courses.map(({ title, price }) => ({ title, price }));
const getTotalPublishedValue = courses => courses.filter(c => c.published).reduce((sum, c) => sum + c.price, 0);
const addCourse = (courses, newCourse) =>[...courses, newCourse];
console.log("Published courses:");
console.log(getPublishedCourses(courses));
console.log("Courses sorted by price (high → low):");
console.log(sortCoursesByPriceDesc(courses));
console.log("Course summaries:");
console.log(getCourseSummaries(courses));
console.log("Total value of published courses:");
console.log(getTotalPublishedValue(courses));
console.log("Add new course:");
console.log(addCourse(courses, {
  id: 104,
  title: "Python",
  price: 1999,
  published: true
}));

//MODULE 3: SHOPPING CART ENGINE
const mergeCartWithCourses = (cart, courses) => cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return { ...item, ...course };
  });
const calculateCartTotal = (cart, courses) =>
  cart.reduce((total, item) => {
    const course = courses.find(c => c.id === item.courseId);
    return total + course.price * item.qty;
  }, 0);
const increaseCartQty = (cart, courseId) =>
  cart.map(item =>
    item.courseId === courseId
      ? { ...item, qty: item.qty + 1 }
      : item
  );
const removeFromCart = (cart, courseId) =>cart.filter(item => item.courseId !== courseId);
const isCartPaidOnly = (cart, courses) =>
  cart.every(item => {
    const course = courses.find(c => c.id === item.courseId);
    return course.price > 0;
  });
console.log("Merged cart with courses:");
console.log(mergeCartWithCourses(cart, courses));
console.log("Total cart amount:");
console.log(calculateCartTotal(cart, courses));
console.log("Increase qty of courseId 101:");
console.log(increaseCartQty(cart, 101));
console.log("Remove courseId 103:");
console.log(removeFromCart(cart, 103));
console.log("Is cart paid only?");
console.log(isCartPaidOnly(cart, courses));


// MODULE 4: ROLE & PERMISSION ENGINE
const getRoleNames = roles => Object.keys(roles);
const canStudentDelete = roles => roles.student.includes("delete");
const getAllUniquePermissions = roles => [...new Set(Object.values(roles).flat())];
const addRole = (roles, roleName, permissions) => ({
  ...roles,
  [roleName]: permissions
});
console.log("Role names:");
console.log(getRoleNames(roles));
console.log("Can student delete?");
console.log(canStudentDelete(roles));
console.log("All unique permissions:");
console.log(getAllUniquePermissions(roles));
console.log("Add moderator role:");
console.log(addRole(roles, "moderator", ["view", "update"]));



