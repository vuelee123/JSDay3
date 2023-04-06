// Simple Task Manager Assignment

(function taskManager() {
    let tasks = [];
    
    function addTask(task) {
    tasks.push(task);
    }
    
    function displayTasks() {
    tasks.forEach(tasks, index)
    }
   
    addTask('clean the bathroom');
    addTask('wash the dishes');
    addTask('mop the floor');
    console.log (tasks);

    return  addTask + displayTasks;
})() ;

    