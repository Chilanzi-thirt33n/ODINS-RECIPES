//*footer copyright function
var myFooter = function() {
    let mytime = new Date();
    let year = mytime.getFullYear();
    let message = '<p id="copyright"> copyright &copy; arbit-tech  ' + year + ' Chilaaanzi';
    message += ' last modified : ' + document.lastModified + 'window width ' + window.screen.width + '</p>';
    return message;
};
document.getElementById('copyright').innerHTML = myFooter();
//* message for top-level function
var Welcome = function() {
    var Today = new Date();
    var hourNow = Today.getHours();
    var greeting;
    const dinnerTime = 18;
    const lunchTime = 12;
    const breakFastTime = 6;
    const midNight = 00;

    if (hourNow >= dinnerTime) {
        greeting = "good evening welcome to food central";
    } else if (hourNow >= lunchTime) {
        greeting = "afternoon welcome to food central";
    } else if (hourNow >= breakFastTime) {
        greeting = "Good morning,welcome to food central";
    } else if (hourNow >= midNight) {
        greeting = "you should be asleep ";
    } else {
        greeting = "Welcome to food central";
    }
    return greeting;
}
document.getElementById("welcome-message").innerHTML = Welcome();
//* function for changing link accoutin to time
var randomLink = function() {
    var Today = new Date();
    var hourNow = Today.getHours();
    var link;
    const dinnerTime = 18;
    const lunchTime = 12;
    const breakFastTime = 6;
    const midNight = 00;

    if (hourNow >= dinnerTime) {
        link = "Recipes/Nshima.html";
    } else if (hourNow >= lunchTime) {
        link = "Recipes/Chicken.html";
    } else if (hourNow >= breakFastTime) {
        link = "Recipes/Pancakes.html";
    } else if (hourNow >= midNight) {
        link = "Recipes/Pancakes.html";
    } else {
        link = "Recipes/Chicken.html";
    }
    return link;
}
document.getElementById("changeme").href = randomLink();