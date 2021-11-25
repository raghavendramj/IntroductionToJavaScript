let headerTemplate = () => {
  let headerTemplateString = `
    <img src="assests/images/logo.png" class="logo" id="logo-image" alt="logo"/>
                <button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" 
                                data-backdrop="false" data-target="#login-modal"
                                onclick="headerLogin(event)">LOGIN</button>
            
                <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="login-form">
                                    <div class="login-field">
                                        <label for="username">Username: </label>
                                        <input type="text" id="username" name="username" placeholder="Enter Username" required />
                                    </div>
                                    <div class="login-field">
                                        <label for="password">Password: </label>
                                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" onclick="login(event)">Login</button>
                            </div>
                        </div>
                    </div>
                </div>`;

  document.getElementById("header").innerHTML += headerTemplateString;
};

let footerTemplate = () => {
  let footerTemplateString = `   <footer class="header-footer">
    <div id="contact">
        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact Us</button>
        
        <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <p>
                                Thank you for reaching out!!! <br>
                                Please enter you email and we will get back to you.
                            </p>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="Enter your email id" required>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="copyright-text">
        © 2020 ROOM SEARCH PVT. LTD.
    </div>
    <div id="social-media-images">
        <a href="https://www.facebook.com" target="_blank">
            <img src="assests/images/facebook.png" class="social-media-image">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="assests/images/instagram.png" class="social-media-image">
        </a>
        <a href="https://twitter.com" target="_blank">
            <img src="assests/images/twitter.png" class="social-media-image">
        </a>
    </div>
</footer>`;
  document.getElementById("footer").innerHTML += footerTemplateString;
};

headerTemplate();
footerTemplate();

let login = (event) => {
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "admin");
  localStorage.setItem("isUserLoggedIn", "false");
  event.preventDefault();

  let userElement = document.getElementById("username");
  let passwordElement = document.getElementById("password");

  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  if (  userElement.value === storedUsername && passwordElement.value === storedPassword ) {
    localStorage.setItem("isUserLoggedIn", "true");
    alert("Successfully Logged In!");
    document.getElementById("login").innerText = "LOGOUT";
    location.reload();
  } else {
    alert("Invalid Credentials!, Login Failed!");
  }
  userElement.value = "";
  passwordElement.value = "";
};

let verifyLogin = () => {
  let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  let loginBtn = document.getElementById("login");
  if (!isUserLoggedIn || isUserLoggedIn === "false") {
    localStorage.clear();
    loginBtn.innerText = "LOGIN";
    loginBtn.dataset.target = "#login-modal";
  } else if (isUserLoggedIn === "true") {
    loginBtn.dataset.target = "";
    loginBtn.innerText = "LOGOUT";
  }
};

verifyLogin();

let headerLogin = () => {
  if (localStorage.getItem("isUserLoggedIn") === "true") {
    localStorage.setItem("isUserLoggedIn", "false");
    alert("Logged out successfuly, Please visit again!");
    location.reload();
  }
};


