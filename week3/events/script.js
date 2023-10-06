//DOM Property
let element = document.getElementById("btn");
element.onclick = () => {
    alert("Button was clicked!");
}

//Adding Event Handlers
let element2 = document.getElementById("btn2");
let handler = (event) => {
    alert("Button was clicked!!");
}

element2.addEventListener("click", handler);
setTimeout(() => {
    element2.removeEventListener("click", handler);
}, "10000");

//Mousemove
document.addEventListener("mousemove", (event) => {
    //Event Interface Properties
    console.log("Current element handler is running on: ", event.currentTarget);
    console.log("Time the event was created (in ms): ", event.timeStamp);
    console.log("Name of the event, e.g. 'click': ", event.type);
    //Properties:
    console.log("Coordinator: ", event.clientX, event.clientY);
    console.log("Keycode for keyboard event: ", event.key);
});

// Keyboard event
document.addEventListener("keydown", (event) => {
    console.log("Keyboard pressed: ", event.key);
})

