todo = [];
let action = prompt("What would you like to do?");
while (action != 'quit') {

    switch (action) {
        case 'new':
            console.log("you chose new");
            break;
        case 'list':
            console.log("you chose list");
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