//your JS code here. If required.
const container = document.getElementById("browser-info");

const detail = document.createElement("p")
details.innerText = `"You are using " + ${navigator.appName()} + " version " + ${navigator.appVersion()}`

container.appendChild(detail)