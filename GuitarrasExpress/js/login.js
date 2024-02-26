 /* ==========================================================================
   Project:     Assignment #3
   Date:        09/3/23 - File created	
   Created by:  Khai Truong
   ========================================================================== */

 /* ==========================================================================
    Easter Egg
   ========================================================================== */
   function easterEgg () {
    // initialize variables
    var hamster_btn = document.getElementById("hamster-egg")
    var hamster_text = document.getElementById("hamster-egg-text")

    //onclick toggle hamster text
    hamster_btn.addEventListener("click", function() {
        hamster_text.classList.toggle("d-none");
    });
}

 /* ==========================================================================
    Login
   ========================================================================== */
   function login() {
    var users = ["hamsterAdmin1", "hamsterAdmin2", "hamsterAdmin3", "hamsterAdmin4"];
    var pass = ["Hampass1", "Hampass2", "Hampass3", "Hampass4"];

    var formUser = document.getElementById("user_name").value;
    var formPass = document.getElementById("password").value;

    var isValid = false; // Flag to track if the login is valid

    for (i = 0; i < users.length; i++) {
        if (users[i] == formUser && pass[i] == formPass) {
            isValid = true; // Set the flag to true if login is valid
            window.location = "product_order.html";
            break; // Exit the loop once a valid login is found
        }
    }

    var output_msg = document.getElementById("output");
    
    if (!isValid) {
        // Display the error message only if the login is not valid
        output_msg.innerHTML = "Incorrect Username / Password";
        output_msg.className = "error";
    } else {
        // Clear the error message if the login is valid
        output_msg.innerHTML = "";
        output_msg.className = "";
    }
}

 /* ==========================================================================
    Login Password Visiblity
   ========================================================================== */
   function showPassword() {
    var icon_box = document.getElementById("icon_box");
    var password_icon = document.getElementById("password_icon");
    var passwordInput = document.getElementById("password");

    // Toggle the class of password_icon between "fa-eye" and "fa-eye-slash" when icon_box is clicked
    icon_box.addEventListener("click", function () {
        if (password_icon.classList.contains("fa-eye")) {
            password_icon.classList.remove("fa-eye");
            password_icon.classList.add("fa-eye-slash");
            passwordInput.type = "password"; // Set input type to "password" (hides text)
        } else {
            password_icon.classList.remove("fa-eye-slash");
            password_icon.classList.add("fa-eye");
            passwordInput.type = "text"; // Set input type to "text" (shows text)
        }
    });
}

function init()
{

    var login_button = document.getElementById("login_button");
    if (login_button !== null) {
        login_button.onclick = login;
    }

    showPassword();
}


window.onload = init;

// TO DO - Enhance Validation.