Textual.includeScriptResourceFile("jquery-2.0.3.min.js");
Textual.includeScriptResourceFile("emoji.js");

Textual.newMessagePostedToView = function(lineNumber) {
  var selector = "#line-" + lineNumber + " .message"
  var $message = $(selector);
  var message = $message.html()
  var output = emoji.replace_colons(message);
  $message.html(output)
}
