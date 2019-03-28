// Import stylesheets
import './style.css'

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app')
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`

const button: HTMLButtonElement = document.getElementById('scan') as HTMLButtonElement

button.addEventListener('pointerup', function(event) {
  // Call navigator.bluetooth.requestDevice
});
