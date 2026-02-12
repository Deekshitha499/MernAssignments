/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

       
          
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                     
                      
                  
*/

 // 1. Validate task title (not empty, min 3 chars)
                    
                      
export function validateTitle(title) {
    if(title.length<3){
        return "title should be at least 3 characters long";
    }
    if(title.length===0){
       return "title cannot be empty";
    return true;
}
}
// 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
    const validPriorities=["low","medium","high"];
    if(!validPriorities.includes(priority.toLowerCase())){
        return "Priority must be one of: low, medium, high";
      }                  
                      }


      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    const dueDate=new Date(date);
    const currentDate=new Date();
    if(dueDate<=currentDate){
        return "Due date must be a future date";
    }
}
                     