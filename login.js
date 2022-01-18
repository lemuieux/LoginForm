// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     // if(value === "") {
//     //     alert("Please write your name");
//     // } else if(username.length > 15) {
//     //     alert("Your name is too long.");
//     // }
//     console.log(username);
// }

function OnLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(event);

    paintGreetings(username);
}

function paintGreetings(usersname) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${usersname}`;
}

// function handleLinkClick(object){
//     alert("clicked !");
//     console.log(object);
//     object.preventDefault();
// }

//loginForm.addEventListener("submit", OnLoginSubmit);
//loginButton.addEventListener("click", onLoginBtnClick);
//link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginSubmit);
} else {
    // show the h1
    
    paintGreetings(savedUsername);
}