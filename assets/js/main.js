const manueNav = document.getElementById("manueNav");
const navLinks = document.querySelector(".navLinks");
manueNav.addEventListener("click", () => {
  console.log(navLinks);

  navLinks.classList.toggle("visible");
});

// loginForm

let email = document.getElementById("email");
let emailValid =false;
 email.addEventListener("input", function () {
  // input evnt operation in real time
  if (email.value !== "" && email.value.length > 7 && email.value.length < 14) {
    email.style.outline = `solid 2px green `;
    document.getElementById("emailError").textContent = "";
    emailValid = true;
  } else {
    email.style.outline = "solid 2px red";
    document.getElementById("emailError").textContent =
      "Must be between 7 and 14 characters.";
    // emailValid = false;
  }
});


let password=document.getElementById('password');
let passwordValid = false;
 password.addEventListener("input", function () {
  // input evnt operation in real time
  if (password.value !== "" && password.value.length > 5 && password.value.length < 15) {
    password.style.outline = `solid 2px green `;
    document.getElementById("passwordError").textContent = "";
    passwordValid = true;
  } else {
    password.style.outline = "solid 2px red";
    document.getElementById("passwordError").textContent =
      "Must be between 5 and 14 characters.";
    // return false;
  }
});

console.log(emailValid);
console.log(passwordValid);
// login button
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function (e) {
console.log(emailValid);
    // e.preventDefault();
  if (emailValid==true && passwordValid==true) {
    
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    // Redirect to the home page
    e.preventDefault();
    console.log("Login successful");
    window.location.href = "index.html";

 return;
  } else {
    e.preventDefault();
    console.log("Login failed");
    
  }
});


