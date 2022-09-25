function main() {

    //Load navigation bar
    $("#navigation_bar").load("navigation.html");

    //RGB
    var num = document.getElementById("slide1");
    var rgb = document.getElementById("slide2");

    var value_text = document.getElementById("value");
    var rgb_text = document.getElementById("rgb");
    
    //Change value
    num.oninput = function() {
        value_text.innerHTML = "Value: " + num.value;
    }
    
    //Change color of text
    rgb.oninput = function() {
        rgb_text.style.color = "hsl("+rgb.value+", 100%, 50%)";
    }
}

document.addEventListener("DOMContentLoaded", main);