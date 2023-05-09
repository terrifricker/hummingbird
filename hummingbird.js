const html = document.querySelector("html");
const body = document.querySelector("body");
const verticalSpacer = document.querySelector("#vertical-spacer");

let spacerHeight = html.clientHeight - body.clientHeight;
console.log(html.clientHeight);
console.log(body.clientHeight);
console.log(spacerHeight);
verticalSpacer.style.height = `${spacerHeight}px`;