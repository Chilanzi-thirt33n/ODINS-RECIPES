//**var for date that will be used by functions

var myDate = new Date();
var year = myDate.getFullYear();
var today = myDate.getHours();
const afternoonHour = 12;
const morningHour = 6;
const nightHour = 18;


//* MyMethod this is the function for changing html href 
var RandomLink = function() {
    var myLink;
    if (today >= morningHour) {
        myLink = 'Recipes/Pancakes.html';
    } else if (today >= afternoonHour) {
        myLink = 'Recipes/Nshima.html';
    } else if (today >= nightHour) {
        myLink = 'Recipes/Chicken.html'
    } else {
        myLink = 'Recipes/Chicken.html';
    }
    return myLink;
};
//* MyMethod for welcome
var welcomeMsg = function() {
    var message;
    if (today >= morningHour) {
        message = 'welcome and good morning its tea time';
    } else if (today >= afternoonHour) {
        message = "hello its lunch time grab something heavy";
    } else if (today >= nightHour) {
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