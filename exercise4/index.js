import createTask from "./createstask.js";

import readTasks from "./readTasks.js";
import updateTask from "./updateTask.js";
import completeTask from "./completeTask.js";
import deleteTask from "./deleteTask.js";

createTask("Bharat", "Learn fs module");
createTask("Bharat", "Practice Node.js");

readTasks("Bharat");

updateTask("Bharat", 1770396223879, "Learn fs deeply");
completeTask("Bharat", 1770396223879);
deleteTask("Bharat", 1770396593728);