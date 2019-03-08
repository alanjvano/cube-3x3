class Cube {
	constructor() {
		// Define solved cube as single row matrix
		// white:0, orange:1, green:2, red:3, blue:4, yellow:5
		this.cube = new Array(54);
		this.state = true;
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 9; j++) {
				this.cube[i*9+j]=i;
			}
		}
	}
	
	
	checkState() { //check value of cube 
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 9; j++) {
				if (this.cube[i*9+j] != i) {
					this.state = false;
				}
			}
		}
		return this.state;
	}

	perm(p_str) {
		
		// split permuation str into individual chars and push them to array	
		let p = [];
		for (var i = 0; i < p_str.length; i++) {
			
			if (p_str.charAt((i+1)%p_str.length) != '2') {
				//check upper case
				var tmp = (p_str.charAt(i) == p_str.charAt(i).toUpperCase());
				
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

		//implement turn sequence in order	
		for (let each of p) {
			console.log(each);
			this.turn(each);
		}

	}

	turn(dir) {
		let buffer = this.cube;  //define temp cube to adjust
		let cycle = perms[dir[0]];  //choose permutation cycle
		console.log(cycle);

		console.log(this.cube);
		//for clockwise direction reverse permutation cycles
		if (dir[1]) {
			for (var k = 0; k < cycle.length; k++) {
				cycle[k] = cycle[k].reverse();
			}
		}
		console.log(cycle);
		
		//rotate layer twice if double specified
		for (var i = 0; i < cycle.length; i++) {
			for (var j = 0; j < cycle[i].length; j++) {
				let target = (j+1+dir[2])%4; //(j == 3) ? 4 : (j+1)%4;
				console.log('cube pos', cycle[i][j], 'target pos', cycle[i][target]);
				console.log('j+1',j+1);
				//console.log(target);
				//console.log(cycle[i][target]);
				console.log('before',this.cube);
				console.log(this.cube[cycle[i][target]]);
				buffer[cycle[i][j]] = this.cube[cycle[i][target]];
				console.log('after', this.cube);
			}
		}
		
		console.log('final before', this.cube);
		this.cube = buffer; //match current cube to buffer
		console.log('final', this.cube);
	}
	
	matchGrid() {
		grid = new makeGrid(cols, rows);
		for (var i = 0; i < this.cube.length; i++) {
			
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
	}

	show() {
		// console.log('show');
		grid = this.matchGrid()
		for (var i = 0; i < 12; i++) {
			for (var j = 0; j < 9; j++) {
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
	}

}
