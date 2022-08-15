var text = `<h1>TechnoDot - Coder</h1>
<p>Hello World!</p>`
text = Object.assign([], text);
var i = 0
function print() {
  if (text[i] != undefined) { document.getElementById("terminal").value += text[i]; i += 1; };
}
var textInterval = setInterval(print, 25);
document.addEventListener("keydown",  e => { e.preventDefault(); });
