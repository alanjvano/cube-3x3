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

	checkState() {
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 9; j++) {
				if (this.cube[i*9+j] != i) {
					this.state = false;
				}
			}
		}
		return this.state;
	}

	up(clkws) {
		var buffer = this.cube;  //define temp cube to adjust
		var buf_u = perms.u;  //define temp perm cycle to adjust

		//for clockwise direction reverse permutation cycles
		if (clkws) {
			for (var k = 0; k < perms.u.length; k++) {
				buf_u[k] = buf_u[k].reverse();
			}
		}
		console.log(buf_u);
		
		//rotate up layer	
		for (var i = 0; i < perms.u.length; i++) {
			for (var j = 0; j < perms.u[i].length; j++) {
					buffer[buf_u[i][j]] = this.cube[buf_u[i][(j+1)%4]];
			}
		}

		this.cube = buffer; //match current cube to buffer
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
