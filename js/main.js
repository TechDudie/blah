var text = `<html>
<head>
<title>TechnoDot</title>
</head>
<body>
<h1>TechnoDot - Coder</h1>
<p>Hello World!</p>
<code>
class TechnoDot:
  def __init__(self):
    self.food = "Pizza"
    self.school_subjects = ["Algebra 1", "SEEK"]
    self.activity = "Write Code and Play Minecraft"
</code>
</body>
</html>`
text = Object.assign([], text);
var i = 0
function print() {
  if (text[i] != undefined) { document.getElementById("terminal").value += text[i]; i += 1; };
}
var textInterval = setInterval(print, 25);
document.addEventListener("keydown",  e => { e.preventDefault(); });
