function mensaje(element) {
    console.log("elemento clickeado", element);
    alert('luxianocallate')
}
function hide(element) {
    element.remove();
}
function turnOff(element) {
    if (element.innerText == "Login") {
        console.log; 
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login" 
        console.log;
    }
} 


  
