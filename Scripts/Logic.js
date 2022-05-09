//*footer copyright logic
var myFooter = function() {
    let mytime = new Date();
    let year = mytime.getFullYear();
    let message = '<p id="copyright"> copyright &copy; arbit-tech  ' + year + ' Chilaaanzi';
    message += ' last modified : ' + document.lastModified + 'window width ' + window.screen.width + '</p>';
    return message;
};
document.getElementById('copyright').innerHTML = myFooter();
//*TODO randome click button