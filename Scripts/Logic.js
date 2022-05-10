//*footer copyright logic
var myFooter = function() {
    let mytime = new Date();
    let year = mytime.getFullYear();
    let message = '<p id="copyright"> copyright &copy; arbit-tech  ' + year + ' Chilaaanzi';
    message += ' last modified : ' + document.lastModified + 'window width ' + window.screen.width + '</p>';
    return message;
};
document.getElementById('copyright').innerHTML = myFooter();
//* message for top-level
var Welcome = function() {
    var Today = new Date();
    var hourNow = Today.getHours();
    var greeting;

    if (hourNow >= 18) {
        greeting = "good evening welcome to food central";
    } else if (hourNow >= 12) {
        greeting = "afternoon welcome to food central";
    } else if (hourNow >= 6) {
        greeting = "Good morning,welcome to food central";
    } else if (hourNow >= 00) {
        greeting = "you should be asleep ";
    } else {
        greeting = "Welcome to food central";
    }
    return greeting;
}
document.getElementById("welcome-message").innerHTML = Welcome();