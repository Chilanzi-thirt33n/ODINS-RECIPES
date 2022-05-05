//**var for date that will be used by functions
var myDate = new Date();
let year = myDate.getFullYear();
let today = myDate.getHours();

//* MyMethod this is the function for changing html href 
var RandomLink = function() {
    var myLink;
    if (today >= 6) {
        myLink = 'Recipes/Pancakes.html';
    } else if (today >= 12) {
        myLink = 'Recipes/Nshima.html';
    } else if (today >= 18) {
        myLink = 'Recipes/Chicken.html'
    } else {
        myLink = 'Recipes/Chicken.html';
    }
    return myLink;
};
//* MyMethod for welcome
var welcomeMsg = function() {
    var message;
    if (today >= 6) {
        message = 'welcome and good morning its tea time';
    } else if (today >= 12) {
        message = "hello its lunch time grab something heavy";
    } else if (today >= 18) {
        message = 'evening we recommend something light at night';
    } else {
        message = 'welcome to food central';
    }
    return message;
};
//* MyMethod footer
var myFooter = function() {
    let message = '<p id="copyright">copyright &copy; arbit-tech  ' + year + ' Chilaaanzi ';
    message += 'last modified : ' + document.lastModified + '</p>';
    return message;
};
//* this is document section
document.getElementById("welcome-message").innerHTML = welcomeMsg();
document.getElementById("changeme").href = RandomLink();
document.getElementById("copyright").innerHTML = myFooter();