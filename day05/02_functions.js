//Callbacks
function displayName(name){
    alert("Hello" +name);
}

function processUserInput(callback){
        let name = prompt("Please enter your name");
        callback(name);
}

//Calling the function
processUserInput(displayName);