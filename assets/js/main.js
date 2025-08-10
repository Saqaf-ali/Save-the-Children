const manueNav = document.getElementById("manueNav");
const navLinks = document.querySelector(".navLinks");
manueNav.addEventListener("click", () => {
  console.log(navLinks);

  navLinks.classList.toggle("visible");
});

// loginForm
const loginButton = document.getElementById("loginButton");
if (loginButton) {
  let email = document.getElementById("email");
  let emailValid = false;
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


  let password = document.getElementById('password');
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

  loginButton.addEventListener("click", function (e) {
    if (emailValid == true && passwordValid == true) {
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      // Redirect to the home page
      e.preventDefault();
      window.location.href = "index.html";

      return;
    } else {
      e.preventDefault();
    }
  });
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === "dark-mode") {
    themeToggle.classList.replace("fa-moon", "fa-sun");
  }
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeToggle.classList.replace("fa-sun", "fa-moon");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
    themeToggle.classList.replace("fa-moon", "fa-sun");
  }
});