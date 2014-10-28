Textual.includeScriptResourceFile("jquery-2.0.3.min.js");
Textual.includeScriptResourceFile("emoji.js");

Textual.newMessagePostedToView = function(lineNumber) {
  var selector = "#line-" + lineNumber + " .message"
  var $message = $(selector);
  var message = $message.html()
  var output = emoji.replace_colons(message);
  output = output.replace(/`(.*)`/, '<span class="code-block">$1</span>');
  $message.html(output)
}
