function solveCross(cube) {
	let check = []
	for (let i = 0; i < edges.length; i++) {
		for (let each of edges[i]) {
			if (cube[each] == 5) {
				//check.append(edges[i]);
				console.log(edges[i]);
			}
		}
	}

	console.log(check);
}