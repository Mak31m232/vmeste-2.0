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
        let input = document.getElementById("form")
        input.style.marginLeft = "11%"
        input.style.opacity  = "1"
        form = 1;
    }
    else if (form==1){
        let input = document.getElementById("form")
        input.style.marginLeft = "45%"
        input.style.opacity  = "0"
        form = 0;
    }
}