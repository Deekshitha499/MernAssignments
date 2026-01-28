
function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return "Title must be at least 3 characters long";
  }
  return true;
}
function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority)) {
    return "Priority must be low, medium, or high";
  }
  return true;
}
function validateDueDate(date) {
  const due = new Date(date);
  const today = new Date();

  if (isNaN(due.getTime())) {
    return "Invalid date format";
  }

  if (due <= today) {
    return "Due date must be in the future";
  }

  return true;
}

export { validateTitle, validatePriority, validateDueDate };
