window.onLoad = hello;   // does not work in example 5. window.onload has gone already. 
document.getElementById('b1').onclick = add ; // does not work in example 4. document does not exist yet
document.getElementById('b2').onclick = reset ;
document.getElementById('h1').onmouseover = log ;


function hello() {
	alert('hello');
}

function log() {
	console.log('mouse over!');
}

function add() {
	var n = parseInt(document.getElementById('s1').innerHTML); 
	document.getElementById('s1').innerHTML = n+1;
}

function reset() {
	document.getElementById('s1').innerHTML = 0;			
}
