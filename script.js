function store(){
    localStorage.clear()


    var name = document.getElementById('name');
    var pass = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pass.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pass.value.length == 0){
        alert('Please fill in email and password');

    }else if(pass.value.length > 10){
        alert('Max of 10');

    }else if(!pass.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pass.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pass.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pass.value);
        alert('Your account has been created');
    }
}

function check() {
    var storedName = localStorage.getItem('name');
    var storedPass = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPass = document.getElementById('userPw');

    if(userName.value == storedName && userPass.value == storedPass){
        alert('You are logged in.');
        window.open("homepage.html")
    }else{
        alert('Error on login');
    }
}

function Logout() {
    localStorage.removeItem('name')
    localStorage.removeItem('pw')
}

function Logoutmodal(){
    var modal = document.getElementById("myModal")
    var btn = document.getElementById("logout")
    var span = document.querySelector('.close')

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}