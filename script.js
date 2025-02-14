let shet = 0;

function menuUser() {
    if (shet==0) {
        let menuUser = document.getElementById("user")
        menuUser.style.display="block"
        shet = 1;
    }   
    else if (shet==1){
        let menuUser = document.getElementById("user")
        menuUser.style.display="none"
        shet = 0;
    }
}

let form = 0;

function input() {
    if (form==0){
        let form_input = document.getElementById("form")
        let input = document.getElementById("input")
        input.style.width = "450px"
        form_input.style.marginLeft = "-36%"
        form_input.style.opacity  = "1"
        form_input.style.zIndex  = "6"
        form = 1;
    }
    else if (form==1){
        let form_input = document.getElementById("form")
        let input = document.getElementById("input")
        form_input.style.marginLeft = "35%"
        form_input.style.opacity  = "0"
        form_input.style.zIndex  = "1"
        form = 0;
    }
}

function cross_input() {
    let input = document.getElementById("form")
    input.style.opacity  = "0"
    input.style.zIndex  = "2"
    input.style.transition = ".3s"
    form = 0;
}

const registration = () => {
    let username = document.getElementById("usernameField-username").value
    let password = document.getElementById("usernameField-password").value
    let registration = document.getElementById("registration-main")
    const user = {
        name: username,
        password: password
    }
    if((username.length == 0)||(password.length == 0)){
        let input_username = document.getElementById("usernameField-username")
        let input_password = document.getElementById("usernameField-password")
        input_username.style.borderColor = "red"
        input_password.style.borderColor = "red"
        alert("Вы не заполнили поля(-е)")
    }
    else if ((username.length <= 2)||(password.length <= 5)) {
        let input_username = document.getElementById("usernameField-username")
        let input_password = document.getElementById("usernameField-password")
        input_username.style.borderColor = "red"
        input_password.style.borderColor = "red"
        alert("Пороль должен быть не меньше 5 символов, а имя не меньше 2")
    }
    else {
        alert("Вы успешно зарегестрировались")
        console.log(user)
        registration.style.display = "none"
    }
}

function right_switch() {
    let right_switch = document.getElementById("ul-menu")
    let svg_switch = document.getElementById("bi-bi-chevron-left")
    let svg_switch_right = document.getElementById("bi-bi-chevron-right")
    let input = document.getElementById("input")
    let switch_div = document.getElementById("div-switch")
    switch_div.style.zIndex = "5"
    input.style.width = "400px"
    svg_switch_right.style.display = "none"
    svg_switch.style.display = "block"
    right_switch.style.marginLeft = "34%"
}

function left_switch() {
    let left_switch = document.getElementById("ul-menu") 
    let svg_switch = document.getElementById("bi-bi-chevron-left")
    let svg_switch_right = document.getElementById("bi-bi-chevron-right")
    let input = document.getElementById("input")
    left_switch.style.marginLeft = "40%"
    input.style.width = "450px"
    svg_switch_right.style.display = "block"
    svg_switch.style.display = "none"
}

let shet_menu = 0;

function menu() {
    if(shet_menu==0){
        let menu = document.getElementById("ul-menu")
        menu.style.marginLeft = "-160%"
        shet_menu = 1;
    }
    else if(shet_menu==1){
        let menu = document.getElementById("ul-menu")
        menu.style.marginLeft = "-63%"
        shet_menu = 0;
    }
}