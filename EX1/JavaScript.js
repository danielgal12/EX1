//Targil 1
var div = document.getElementById("aelement");
var ael = document.createElement("a");
ael.setAttribute("href", "https://www.google.com");
ael.innerHTML = "GOOGLE";
//div.appendChild(ael);
//Targil 2

var link1 = document.createElement("a");
link1.setAttribute("href", "HtmlPage1.html");
link1.innerHTML = "HtmlPage1";

var link2 = document.createElement("a");
link2.setAttribute("href", "HtmlPage2.html");
link2.innerHTML = "HtmlPage2";

var link3 = document.createElement("a");
link3.setAttribute("href", "HtmlPage3.html");
link3.innerHTML = "HtmlPage3";

var link4 = document.createElement("a");
link4.setAttribute("href", "HtmlPage4.html");
link4.innerHTML = "HtmlPage4";

var link5 = document.createElement("a");
link5.setAttribute("href", "HtmlPage5.html");
link5.innerHTML = "HtmlPage5";


var image1= document.createElement("img");
image1.setAttribute("src", "img/1.JPG")
image1.setAttribute("height", "100");
image1.setAttribute("width", "200");

var image2 = document.createElement("img");
image2.setAttribute("src", "img/2.JPG")
image2.setAttribute("height", "100");
image2.setAttribute("width", "200");

var image3 = document.createElement("img");
image3.setAttribute("src", "img/3.JPG")
image3.setAttribute("height", "100");
image3.setAttribute("width", "200");

var image4 = document.createElement("img");
image4.setAttribute("src", "img/4.JPG")
image4.setAttribute("height", "100");
image4.setAttribute("width", "200");

var image5 = document.createElement("img");
image5.setAttribute("src", "img/5.JPG")
image5.setAttribute("height", "100");
image5.setAttribute("width", "200");



var image1link = document.createElement("a");
image1link.setAttribute("href", "img/1.JPG");
image1link.innerHTML = "image1";

var image2link =document.createElement("a");
image2link.setAttribute("href", "img/2.JPG");
image2link.innerHTML = "image2";

var image3link =document.createElement("a");
image3link.setAttribute("href", "img/3.JPG");
image3link.innerHTML = "image3";

var image4link =document.createElement("a");
image4link.setAttribute("href", "img/4.JPG");
image4link.innerHTML = "image4";

var image5link= document.createElement("a");
image5link.setAttribute("href", "img/5.JPG");
image5link.innerHTML = "image5";

//div.appendChild(image);
//Targil 3
//var table = document.createElement("table")
//var td1 = document.createElement("td")
//var td2 = document.createElement("td")
//var tr = document.createElement("tr")
//td1.appendChild(ael)
//td2.appendChild(image)
//tr.appendChild(td1)
//tr.appendChild(td2);
//table.appendChild(tr);
//div.appendChild(table);
//targil 4
//var table2 = document.createElement("table")
//for (var i = 1; i <= 5; i++)
//{
//    var td3 = document.createElement("td")
 //   var tr1 = document.createElement("tr")
//    tr1.appendChild(td3)
 //   table2.appendChild(tr1)
 //   if (i == 1)
 //  {
 //       td3.appendChild(image1link)
 //   }
 //   if (i == 2) {
  //      td3.appendChild(image2link)
 //   }
 //   if (i == 3) {
//        td3.appendChild(image3link)
//    }
//    if (i == 4) {
//        td3.appendChild(image4link)
//    }
 //   if (i == 5) {
//        td3.appendChild(image5link)
//    }
//}
//div.appendChild(table2);


//targil 5
var table = document.createElement("table");

var rows = parseInt(prompt("הכנס מספר שורות לטבלה:"));

var tr, td, td2;
for (var i = 1; i <= rows; i++) 
{
     tr = document.createElement("tr");
     td = document.createElement("td");
     td2 = document.createElement("td");
    
    if (i == 1) {
        td.appendChild(image1);
        td2.appendChild(link1);
    }
       
    if (i == 2) {
        td.appendChild(image2);
        td2.appendChild(link2);
    }
    if (i == 3) {
        td.appendChild(image3);
        td2.appendChild(link3);
    }
    if (i == 4) {
        td.appendChild(image4);
        td2.appendChild(link4);
    }
    if (i == 5) {
        td.appendChild(image5);
        td2.appendChild(link5);
    }
    if (i > 5) {
        td.innerHTML = "אין תמונה";
        td2.innerHTML = "אין קישור";
    }

    if (i % 2 == 0) {
        tr.style.backgroundColor = "green";
    }
    if (i % 2 != 0) {
        tr.style.backgroundColor = "red";
    }

        


    tr.appendChild(td)   
    tr.appendChild(td2)
    table.appendChild(tr);
}


div.appendChild(table);