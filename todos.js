let todo = [];
let action = prompt("What would you like to do?");
let todolist = [];
let deleteindex = '';

while (action !== 'quit' && action !== 'q') {

    switch (action) {
        case 'new':
            console.log("you chose new");
            todo = prompt("Enter new todo")
            todolist.push(todo);
            console.log(`${todo} added to the list!`);
            break;
        case 'list':
            // console.log("you chose list");
            // console.log(todo);
            console.log("**********")
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i}: ${todolist[i]}`)
            }
            console.log("**********")
            break;
        case 'delete':
            console.log("you chose delete")
            deleteindex = prompt("Enter the index of the item you want to delete.")
            parseInt(deleteindex);
            const deleted = todolist.splice(deleteindex, 1);
            console.log(`OK, deleted ${deleted[0]}`);
            break;
        default: 
            console.log('sorry, that is not a vquitalid choice, please try again');
    }
    action = prompt("What would you like to do?");
    
}

console.log("you just quit.  goodbye.")