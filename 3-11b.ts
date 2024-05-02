function printMessage(message?: string) {
    if (message) {
        console.log(message);
    }else{
        console.log("No message provided.");
    }
}

printMessage("NYA HELLO");
printMessage();
