function DrawLink() {
    var link = document.createElement("a");
    link.setAttribute("href",  "2.html");
    link.setAttribute("style", "color: red");
    var div = document.getElementById("ex2");
    div.appendChild(link)
    link.innerHTML = "go to 2.html";
}
//DrawLink();
function DrawImage() {
    var img = document.createElement("img");
    img.setAttribute("src", "img/1.jpg");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    var div = document.getElementById("ex2");
    div.appendChild(img);
}
//DrawImage();
function DrawImage3(imgIndex) {
    var img = document.createElement("img");
    img.setAttribute("src", "img/" + imgIndex + ".jpg");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");    
    var div = document.getElementById("ex2");
    div.appendChild(img);
}
//DrawImage3(2);
function DrawImage4(imgHeight, imgWidth, imgIndex, el) {
    var img = document.createElement("img");
    img.setAttribute("src", "img/" + imgIndex + ".jpg"); 
    img.setAttribute("width", imgWidth);
    img.setAttribute("height", imgHeight);
    el.appendChild(img);   
}
var div = document.getElementById("ex2")
//DrawImage4("100px", "200px", 2, div);
//DrawImage4("200px", "300px", 3, div);
function DrawSomeImages(num) {
    var div = document.getElementById("ex2");
    for (var i = 1; i <= num; i++) {
        var br = document.createElement("br");
        DrawImage3(i);
        div.appendChild(br);
    }
 
}
//DrawSomeImages(5);
function DrawLink6(linkIndex, el) {
    var link = document.createElement("a");
    link.setAttribute("href", linkIndex + ".html");
    link.setAttribute("style", "color: red");
    link.innerHTML = "go to " + linkIndex + ".html";
    el.appendChild(link);
    el.appendChild(document.createElement("br"));
}
function DrawSomeLinks6(num) {
    var div = document.getElementById("ex2");
    for (var i = 1; i <= num; i++) {
        DrawLink6(i, div);
    }
}
//DrawSomeLinks6(5);
function DrawRow(rowIndex, imgHeight, imgWidth,el) {
    
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    row.appendChild(cell1);
    row.appendChild(cell2);
    el.appendChild(row);
    DrawImage4(imgHeight, imgWidth, rowIndex, cell1);
    DrawLink6(rowIndex, cell2);     
}
//DrawRow(1, "100px", "200px", div);
function DrawTable(rows) {
    var table = document.createElement("table");
   for (var i = 1; i <= rows; i++) {
       DrawRow(i, "100", "200", table);
   }
    var div = document.getElementById("ex2");
   div.appendChild(table);
}
DrawTable(4);