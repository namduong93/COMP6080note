let form = document.forms.user_form;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    br = document.createElement("br");
    document.body.appendChild(br);
    div = document.createElement("div");
    div.innerText = "Hello " + form.elements.firstname.value;
    document.body.appendChild(div);
});