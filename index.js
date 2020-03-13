// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has ${this.complete ? " ": " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }

  }
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(task1); // not completed
completeTask(task1);
logTaskState(task1); // completed

console.log(tasks);
