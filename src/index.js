import './style.css';
import Data from './data.xml';
import printMe from './print.js';

const element = document.createElement("div");
const btn = document.createElement('button');
element.innerHTML = "1234";
btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;
element.appendChild(btn);
element.classList.add('hello');
console.log(Data);
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module');
		printMe();
	})
}