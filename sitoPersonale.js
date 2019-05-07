  function mouse(){
  	console.log('Mouse Over!');
  }

function add() {
	var n = parseInt(document.getElementById('s1').innerHTML); 
	document.getElementById('s1').innerHTML = n+1;
	console.log('Hai premuto il cazzo di tasto add');
}

function reset() {
	document.getElementById('s1').innerHTML = 0;	
	console.log('Hai premuto il cazzo di tasto reset');
		
}
function changeColor(){
		document.getElementById('add').style.bacground='red';	

}