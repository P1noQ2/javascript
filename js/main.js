function ageInDay() {
    var birthDate = prompt("what year were you born in?");
    let days = (2020 - birthDate) * 365;

    var h1 = document.createElement("h1");
    var textNode = document.createTextNode("You are " + days + " days");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textNode);
    // removeDay();
    document.getElementById("result").appendChild(h1);
}

function removeDay() {
    var result = document.getElementById("result");
    if (result.hasChildNodes)
        result.removeChild(result.childNodes[0]);
}

function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.setAttribute("src", "https://cdn2.thecatapi.com/images/MTc0NTYwMA.gif");
    div.appendChild(image);
}