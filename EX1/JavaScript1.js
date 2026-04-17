var grades = [90, 80, 70, 60, 50];

function avg(grades) {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    alert(sum / grades.length)


}  
function createButton() {
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "click me");
    button.setAttribute("onclick", "avg(grades)");
    var div = document.getElementById("123");
    div.appendChild(button);
}
createButton();