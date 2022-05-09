//* MyMethod footer
var myFooter = function() {
    let message = '<p id="copyright">copyright &copy; arbit-tech  ' + year + ' Chilaaanzi ';
    message += 'last modified : ' + document.lastModified + 'window width ' + window.screen.width + '</p>';
    return message;
};
//* this is document section
document.getElementById("copyright").innerHTML = myFooter();