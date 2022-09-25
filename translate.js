//Translate
var translate_opt = document.getElementById("translate_option");
translate_opt.addEventListener("change", translate);

function translate() {
    var langin = document.getElementById("translate_in");
    var langout = document.getElementById("translate_out");

    var translate_opt = document.getElementById("translate_option");

    if (translate_opt.value == "1") {
        langin.value = "en";
        langout.value = "ja";
    }
    else if (translate_opt.value == "2") {
        langin.value = "ja";
        langout.value = "en";
    }
    else if (translate_opt.value == "3") {
        langin.value = "en";
        langout.value = "vi";
    }
    else {
        langin.value = "vi";
        langout.value = "en";
    }
}
