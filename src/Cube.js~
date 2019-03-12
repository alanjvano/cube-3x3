var Cube = function() {
	// Define solved cube as single row matrix
	// white:0, orange:1, green:2, red:3, blue:4, yellow:5
	this.cube = new Array(54);
	this.state = true;
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 9; j++) {
			this.cube[i*9+j]=i;
		}
	}
};
	
	
Cube.prototype.checkState = function() { //check solved state of cube 
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 9; j++) {
			if (this.cube[i*9+j] != i) {
				this.state = false;
			}
		}
	}
	return this.state;
};

Cube.prototype.scramble = function(scr_len) {
	//randomly select face permutation from valid list
	let tmp;
	let index;
	let valid = clone(valid_perm);
	let scr = [];
	let prev;
	for (let i = 0; i < scr_len; i++) {
		
		// if scramble not empty, remove previous permutation from valid list
		if (scr.length != 0) {
			index = valid.indexOf(prev);
			valid.splice(index,1);
		}
		
		// choose random valid permutation and add to permutation list
		tmp = Math.floor(Math.random()*(valid.length));
		scr.push(valid[tmp]);
		prev = valid[tmp];

		// pick random direction: clockwise, counterclockwise, or double
		tmp = Math.floor(Math.random()*3)
		if (tmp == 0) {
			scr[scr.length-1] = scr[scr.length-1].toUpperCase();
		} else if (tmp == 1) {
			scr[scr.length-1] = scr[scr.length-1] += "2";
		} else {
			scr[scr.length-1] = scr[scr.length-1].toLowerCase();
		}

		// reset permutaion list
		valid = clone(valid_perm);			
	}

	scr = scr.join('');
	console.log("scramble", scr);
	return scr;
}

Cube.prototype.perm = function(p_str) {
	
	// split permuation str into individual chars and push them to array	
	let p = [];
	for (let i = 0; i < p_str.length; i++) {
		
		if (p_str.charAt((i+1)%p_str.length) != '2') {
			//check upper case
			let tmp = (p_str.charAt(i) == p_str.charAt(i).toUpperCase());
			
			//output [face, direction (1 = c, 0 = cc), doubleturn (1 yes)]
			p.push([p_str.charAt(i).toLowerCase(), tmp, 0]);
		} else {
			//if double turn, then add the next char as well
			//and increment counter	
			p.push([p_str.charAt(i).toLowerCase(), 1, 1]);
			i++;
		}
	}
	console.log(p);

	//check for invalid input
	for (let i = 0; i < p.length; i++) {
		if (!valid_perm.includes(p[i][0])) {
			console.log("not valid input");
			return false;
		}
	}
		
	//implement turn sequence in order	
	for (let each of p) {
		console.log(each);
		this.cube = this.turn(each, this.cube);
	}

};

Cube.prototype.turn = function(dir, cube) {
	//let args = clone(Array.prototype.slice.call(arguments));
	let current = clone(cube);  //to avoid reassignment issues
	let buffer = clone(current);  //define temp cube to adjust
	let cycle = clone(perms[dir[0]]);  //choose permutation cycle

	console.log(current);
	//for clockwise direction reverse permutation cycles
	if (dir[1]) {
		for (let k = 0; k < cycle.length; k++) {
			cycle[k] = cycle[k].reverse();
		}
	}
	console.log(cycle);
	
	//rotate layer twice if double specified
	for (let i = 0; i < cycle.length; i++) {
		for (let j = 0; j < cycle[i].length; j++) {
			let target = (j+1+dir[2])%4; //(j == 3) ? 4 : (j+1)%4;
			console.log('cube pos', cycle[i][j], 'target pos', cycle[i][target]);
			//console.log('j+1',j+1);
			//console.log(target);
			//console.log(cycle[i][target]);
			//console.log('before',current);
			//console.log(current[cycle[i][target]]);
			let z = clone(current[(cycle[i][target])]);
			buffer[cycle[i][j]] = z;
			//console.log('after',current);
			/*problem with continuous assignment
			let tmp;
			const before = current;
			buffer[cycle[i][j]] = tmp = current[cycle[i][target]];
			current = this.cube;
			console.log('after', current);
			console.log('this.cube',this.cube);
			console.log('buffer',buffer);
			console.log('previous state', before);
			*/
		}
	}
	
	console.log(buffer);
	return buffer;
};

Cube.prototype.matchGrid = function() {
	grid = new makeGrid(cols, rows);
	for (let i = 0; i < this.cube.length; i++) {
		
		//face 0 - up
		if (i < 9) {
			grid[i%3+3][Math.floor(i/3)] = this.cube[i];
		} else if (i < 18) {  //face 1 - left
			grid[i%3][Math.floor(i/3)] = this.cube[i];
		} else if (i < 27) {  //face 2 - front
			grid[i%3+3][Math.floor(i/3)-3] = this.cube[i];
		} else if (i < 36) {  //face 3 - right
			grid[i%3+6][Math.floor(i/3)-6] = this.cube[i];
		} else if (i < 45) {  //face 4 - back
			grid[i%3+9][Math.floor(i/3)-9] = this.cube[i];
		} else if (i < 54) {  //face 5 - down
			grid[i%3+3][Math.floor(i/3)-9] = this.cube[i];
		}
	}
	
	return grid;
};

Cube.prototype.show = function() {
	// console.log('show');
	grid = this.matchGrid()
	for (let i = 0; i < 12; i++) {
		for (let j = 0; j < 9; j++) {
			stroke(0);

			switch (grid[i][j]) {
				case 0: //white
					fill(255);
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;

				case 1: //orange
					fill('orange');
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;

				case 2: //green
					fill('green');
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;

				case 3: //red
					fill('red');
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;

				case 4: //blue
					fill('blue');
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;

				case 5: //yellow
					fill('yellow');
					rect(i*gridSize, j*gridSize, gridSize, gridSize);
					break;
			}
		}
	}
};
