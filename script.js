const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Show Registration form
showRegister.addEventListener("click", function () {
    loginBox.classList.add("hidden");
    registerBox.classList.remove("hidden");
});

// Show Login form
showLogin.addEventListener("click", function () {
    registerBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
});



//Employee registration
const registerForm = document.querySelector("#registerForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const dob = document.querySelector("#dob");
const gender = document.querySelector("#gender");
const password = document.querySelector("#password");
const registerMessage = document.querySelector("#registerMessage");

registerForm.addEventListener("submit", async (event) =>{
    event.preventDefault();

    let employeeDetails = {
        name : name.value,
        email: email.value,
        phone: phone.value,
        dob: dob.value,
        gender: gender.value,
        password: password.value
    };
    console.log(employeeDetails);

    const response = await fetch("http://localhost:3500/register", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(employeeDetails),
    });

    const data = await response.json();
    console.log(data);
    if(data.success === true){
        registerMessage.innerText = "Registration Successful.";
    }else{
        registerMessage.innerText = "";
    }
    registerForm.reset();
});

//login for the employee

const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginMessage = document.querySelector("#loginMessage");


loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let loginData = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    const response = await fetch("http://localhost:3500/login", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });

    const data = await response.json();
    console.log(data);
    if(data.success === true){
        loginMessage.innerText = "Login Successful.";
    }else{
        loginMessage.innerText = "";
    }
    loginForm.reset();
});