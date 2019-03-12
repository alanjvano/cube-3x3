const cols = 12, rows = 9;
const gridSize = 60;
const valid_perm = ["u","l","f","r","b","d"]
let grid;
let cube1;
let perm_in;
let scr_in;

//define permutation cycles for face turns
const perms = {
	u: [[0,2,8,6],[1,5,7,3],[38,29,20,11],[37,28,19,10],[36,27,18,9]],
	l: [[9,11,17,15],[10,14,16,12],[0,18,45,44],[3,21,48,41],[6,24,51,38]],
	f: [[18,20,26,24],[19,23,25,21],[6,27,47,17],[7,30,46,14],[8,33,45,11]],
	r: [[27,29,35,33],[28,32,34,30],[8,36,53,26],[5,39,50,23],[2,42,47,20]],
	b: [[36,38,44,42],[37,41,43,39],[2,9,51,35],[1,12,52,32],[0,15,53,29]],
	d: [[45,47,53,51],[46,50,52,48],[24,33,42,15],[25,34,43,16],[26,35,44,17]]
};

function getVal(e, id) {
	if (e.which == 13 || e.keyCode == 13) {
		if (id == "move") {
			perm_in = document.getElementById("move").value;
		} else if (id == "scramble") {
			scr_in = document.getElementById("scramble").value;
			//alert(scr_in);
		}
	}
}

function makeGrid(cols,rows) {
	let arr = new Array(cols);
	for (let i =0; i < arr.length; i ++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

// perfoms deep clone of object for passing object value into functions
// credit: Paul Varghese
function clone(obj) {
	if (obj == null || typeof(obj) != 'object') {
		return obj;
	}

	var temp = new obj.constructor();
	for (var key in obj) {
		temp[key] = clone(obj[key]);
	}

	return temp;
}


function setup() {
	let canvas = createCanvas(cols*gridSize+10, rows*gridSize+10);
	canvas.parent('canvas-holder');

	perm_in = null;
	
	cube1 = new Cube();	
}

function draw() {
	background(255);
	//console.log(perm_in);

	// check permutation input
	if (perm_in != null && perm_in != "") {
		cube1.perm(perm_in);
		document.getElementById("move").value="";
		perm_in = "";
	}

	// check scramble input
	if (scr_in != null && scr_in != "") {
		cube1.perm(cube1.scramble(scr_in));
		scr_in = null;
	}
	cube1.show();
	//debugger;
}
