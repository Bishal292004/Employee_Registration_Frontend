const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");
const dashboardBox = document.getElementById("dashboardBox");
const registrationSuccessBox = document.getElementById("registrationSuccessBox");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

function showView(view) {
  [loginBox, registerBox, dashboardBox, registrationSuccessBox].forEach((box) => {
    box.classList.add("hidden");
  });
  view.classList.remove("hidden");
}

// Show Registration form
showRegister.addEventListener("click", function () {
  showView(registerBox);
});

// Show Login form
showLogin.addEventListener("click", function () {
  showView(loginBox);
});

document.getElementById("returnToLogin").addEventListener("click", function () {
  showView(loginBox);
});

document.getElementById("logoutButton").addEventListener("click", function () {
  showView(loginBox);
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

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let employeeDetails = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    dob: dob.value,
    gender: gender.value,
    password: password.value,
  };

  try {
    const response = await fetch(
      "https://employee-registration-backend-sigma.vercel.app/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeDetails),
      },
    );

    const data = await response.json();
    if (data.success === true) {
      document.getElementById("successName").textContent = employeeDetails.name;
      document.getElementById("successEmail").textContent = employeeDetails.email;
      document.getElementById("successPhone").textContent = employeeDetails.phone;
      document.getElementById("successDob").textContent = employeeDetails.dob;
      document.getElementById("successGender").textContent = employeeDetails.gender;
      registerForm.reset();
      showView(registrationSuccessBox);
    } else {
      registerMessage.innerText = data.message || "Registration failed.";
    }
  } catch (error) {
    console.error("Registration error:", error);
    registerMessage.innerText = "Unable to connect to the server.";
  }
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
    password: loginPassword.value,
  };

  try {
    const response = await fetch(
      "https://employee-registration-backend-sigma.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      },
    );

    const data = await response.json();
    if (data.success === true) {
      document.getElementById("dashboardEmail").textContent = loginData.email;
      loginForm.reset();
      showView(dashboardBox);
    } else {
      loginMessage.innerText = data.message || "Login failed.";
    }
    
  } catch (error) {
    console.error("Login error:", error);
    loginMessage.innerText = "Invalid email or password.";
  }
});
