
window.onload = function() {
  console.log("Hello!!");
}

var numParams = 0;
function addParam() {
  $("#params").append("<div id='" + numParams++ + "'><input type='text'><input></div>")
}

function send() {
  let route = $("#route").val();
  let method = $("#method").val();
  var body = {};
  for (var i = 0; i < numParams; i++) {
    //get body

  }
  console.log(route, method, body);
}
