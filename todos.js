let todo = [];
let action = prompt("What would you like to do?");
while (action != 'quit') {

    switch (action) {
        case 'new':
            console.log("you chose new");
            todo = prompt("Enter new todo")
            console.log(todo);
            break;
        case 'list':
            console.log("you chose list");
            console.log(todo);
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