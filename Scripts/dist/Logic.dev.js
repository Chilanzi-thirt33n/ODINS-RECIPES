"use strict";

//*footer copyright logic
var myFooter = function myFooter() {
  var mytime = new Date();
  var year = mytime.getFullYear();
  var message = '<p id="copyright"> copyright &copy; arbit-tech  ' + year + ' Chilaaanzi';
  message += ' last modified : ' + document.lastModified + 'window width ' + window.screen.width + '</p>';
  return message;
};

document.getElementById('copyright').innerHTML = myFooter(); //*TODO randome click button