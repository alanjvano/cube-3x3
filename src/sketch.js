var cols = 12, rows = 9;
var gridSize = 60;
var grid;

let cube1;

//define permutation cycles for face turns
let perms = {
	u: [[0,2,8,6],[1,5,7,3],[38,29,20,11],[37,28,19,10],[36,27,18,9]],
	l: [[9,11,17,15],[10,14,16,12],[0,18,45,44],[3,11,48,41],[6,24,51,38]],
	f: [[18,20,26,24],[19,23,25,21],[6,27,47,17],[7,30,46,14],[8,33,45,11]],
	r: [[27,29,35,33],[28,32,34,30],[8,36,53,26],[5,39,50,23],[2,44,47,20]],
	b: [[36,38,44,42],[37,41,43,39],[2,9,51,35],[1,12,52,32],[0,15,53,29]],
	d: [[45,47,53,51],[46,50,52,51],[24,33,42,15],[25,34,43,16],[26,35,44,17]]
};


function makeGrid(cols,rows) {
	var arr = new Array(cols);
	for (var i =0; i < arr.length; i ++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function setup() {
	createCanvas(cols*gridSize+10, cols*gridSize+10);
	
	cube1 = new Cube();

	console.log(cube1);
	console.log(cube1.checkState());
	cube1.perm('U');
	cube1.show();
}

function draw() {
  background(255);
	cube1.show();
}