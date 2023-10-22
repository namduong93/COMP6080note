let form = document.forms.user_form;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    br = document.createElement("br");
    document.body.appendChild(br);
    div = document.createElement("div");
    div.innerText = "Hello " + form.elements.firstname.value;
    document.body.appendChild(div);
    //Local Storage
    localStorage.setItem("firstname", form.elements.firstname.value);
    localStorage.setItem("lastname", form.elements.lastname.value);
    console.log(localStorage.getItem("firstname"));
    localStorage.removeItem("firstname");
});

document.getElementById("clear").addEventListener('click', (event) => {
    console.log("cc");
    localStorage.clear();
});
