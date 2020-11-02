fetch("https://rocky-ravine-26879.herokuapp.com/data")
    .then(response => response.json())
    .then(data => showData(data));

function showData(data) {
    const thePage = document.querySelector("body");
    var myContent = document.createElement("div");
    var myHeading = document.createElement("h1");
    var courseName = document.createTextNode(data.course);
    var labName = document.createTextNode("This lab is: " + data.Lab);
    myHeading.append(courseName);
    myContent.appendChild(myHeading);
    myContent.append(labName);
    thePage.appendChild(myContent);
}