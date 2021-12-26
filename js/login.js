import "styles.css";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const intro = document.querySelector("#helloUser");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    showHello(userName);
}

function showHello(userName){
    intro.innerHTML = `Hello, ${userName}`;
    intro.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    showHello(savedUserName);
}
