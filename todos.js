let todo = [];
let action = prompt("What would you like to do?");
let todolist = []

while (action != 'quit') {

    switch (action) {
        case 'new':
            console.log("you chose new");
            todo = prompt("Enter new todo")
            todolist.push(todo)
            console.log(todo);
            console.log(todolist);
            break;
        case 'list':
            // console.log("you chose list");
            // console.log(todo);
            for (let i = 0; i <= (todo.length - 2); i++) {
                console.log("**********")
                console.log((i+1) + ": " + todolist[i])
                console.log("**********")
            }
            break;
        case 'delete':
            console.log("you chose delete")
            break;
        default: 
            console.log('sorry, that is not a valid choice, please try again');
    }
    action = prompt("What would you like to do?");
    
}

console.log("you just quit.  goodbye.")