//Checks to see if cross is solved
//note: color uses numeric value (0-5)
Cube.prototype.findCrossEdges = function(color) {
	let pos = []

	//identify location of edge pieces
	for (let i = 0; i < edges.length; i++) {
		for (let each of edges[i]) {
			if (this.cube[each] == color) {
				//check.append(edges[i]);
				pos.push([each, edges[i]]);
			}
		}
	}

	return pos;

}

Cube.prototype.findCrossTargets = function(edg_loc) {
	// locate the target of each cross edge piece in order	
	let target = [];
	for (let each of edg_loc) {
		for (let index of edges) {

			let tmp_target = [solved[index[0]], solved[index[1]]]; 
			let tmp = [this.cube[each[1][0]], this.cube[each[1][1]]];

			//console.log("tmp_target", tmp_target, "tmp", tmp);

			if (tmp_target.isEqual(tmp) || tmp_target.isEqual(tmp.reverse())) {

				for (let both of index) {
					if (this.cube[each[0]] == solved[both]) {
						target.push(both);
					}
				}
			}
		}
	}

	return target;

}

Cube.prototype.solveCross = function(color) {
	
	//While the cross is unsolved, check each cross edge position
	//If a cross edge is in the incorrect location, solve it, then repeat

	let edg_pos = this.findCrossEdges(color);
	console.log("edg_pos",edg_pos);
	let target = this.findCrossTargets(edg_pos);
	console.log("target",target);
	let edg = [];
	for (let i = 0; i < edg_pos.length; i++) {
		edg.push(edg_pos[i][0])
	}
	console.log("edg", edg);
	console.log(edg.isEqual(target));	

	while (!edg.isEqual(target)) {
		
		for (let i = 0; i < edg_pos.length; i++) {
			if (edg_pos[i][0] != target[i]) {
				//solve edge piece
			}
		}

		//find new current cross edge locations
		edg_pos = this.findCrossEdges(color);
		target = this.findCrossTargets(edg_pos);
		edg = [];
		for (let i = 0; i < edg_pos.length; i++) {
			edg.push(edg_pos[i][0])
		}

	}
	
}
