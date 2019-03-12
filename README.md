# cube-3x3

The purpose of this project is to develop an algorithm to manipulate and solve a 3x3 Rubiks cube as quickly and efficiently as possible.
To easily represent the cube, p5 is being used.

## Basic Framework:

At least for the inital implementation of this case, each cube is an object so multiple variations can be followed in future steps.
Each cube is simply represented as a one-dimensional 54 element array in the format: 
> **[ U1, U2, U3... U8, L1,... F1,... R1,... B1, ..., D1,...]**
Here, the faces are represented by
*U = upper face
*L = left face
*F = front face
*R = riht face
*B = back face
*D = lower face (down)

The Cube.js prototype class is used to define a cube as an object.  This class handle basic cube manipulations including:
	- perm() - this method accepts an input permutation sequence from the user and performs the permutations on the cube in order
	- checkState() - this method tests to see if the cube is in a solved state
	- show() - displays cube in 2d format on canvas

