const changeTheme = document.querySelector("body");
const toggle = document.querySelectorAll('input[name = "toggle-theme"]');
const theme1 = document.getElementById("theme-one");
const theme2 = document.getElementById("theme-two");
const theme3 = document.getElementById("theme-three");
const theme4 = document.getElementById("theme-four");

/********** Theme Toggle **********/
theme1.addEventListener("click", function() {
    changeTheme.setAttribute("id", "theme1");
})

theme2.addEventListener("click", function() {
    changeTheme.setAttribute("id", "theme2");
});

theme3.addEventListener("click", function() {
    changeTheme.setAttribute("id", "theme3");
});

theme4.addEventListener("click", function() {
    changeTheme.setAttribute("id", "theme4");
}); 

/********** Calculator Functions **********/
const calc = document.querySelector("#calculator");

//Function that display the number
function displayNumber(val) {
    calc.value += val;
}

//Functin that reset the screen
function resetScreen() {
    calc.value = "";
}

//Function that delete a number if a mistake is done
function deleteNum() {
    calc.value = calc.value.slice(0, -1);
}

//Function that will make the operation work
function calculate() {
    try {
        calc.value = eval(calc.value);
    } catch(error) {
        alert("Invalid");
    }    
}