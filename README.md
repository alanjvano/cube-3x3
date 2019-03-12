# cube-3x3

The purpose of this project is to develop an algorithm to manipulate and solve a 3x3 Rubiks cube as quickly and efficiently as possible.
To easily represent the cube, p5 is being used.

## Basic Framework:

At least for the inital implementation of this case, each cube is an object so multiple variations can be followed in future steps.
Each cube is simply represented as a one-dimensional 54 element array in the format: 

> **[ U1, U2, U3... U8, L1,... F1,... R1,... B1, ..., D1,...]**

Here, the faces are represented by
* U = upper face
* L = left face
* F = front face
* R = riht face
* B = back face
* D = lower face (down)

The cube visualized as follows, where each values represents the cube object's corresponding array indice:

- U - -
L F R B
- D - -

-|-|-|0|1|2|-|-|-|-|-|-
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
-|-|-|3|4|5|-|-|-|-|-|-
-|-|-|6|7|8|-|-|-|-|-|-
9|10|11|18|19|20|27|28|29|36|37|38
12|13|14|21|22|23|30|31|32|39|40|41
15|16|17|24|25|26|33|34|35|42|43|44
-|-|-|45|46|47|-|-|-|-|-|-
-|-|-|48|49|50|-|-|-|-|-|-
-|-|-|51|52|53|-|-|-|-|-|-

A canonical cycle notations is used to define each clockwise permutation.  
To turn a face counter-clockwise, the permutation cycle is simply reversed.

Therefore, each face turn can be described by five four-mode cycle permutations of the cube elements:
* u: [[0,2,8,6],     [1,5,7,3],     [38,29,20,11], [37,28,19,10], [36,27,18,9]]
* l: [[9,11,17,15],  [10,14,16,12], [0,18,45,44],  [3,21,48,41],  [6,24,51,38]]
* f: [[18,20,26,24], [19,23,25,21], [6,27,47,17],  [7,30,46,14],  [8,33,45,11]]
* r: [[27,29,35,33], [28,32,34,30], [8,36,53,26],  [5,39,50,23],  [2,42,47,20]]
* b: [[36,38,44,42], [37,41,43,39], [2,9,51,35],   [1,12,52,32],  [0,15,53,29]]
* d: [[45,47,53,51], [46,50,52,51], [24,33,42,15], [25,34,43,16], [26,35,44,17]]

The Cube.js prototype class is used to define a cube as an object.  This class handle basic cube manipulations including:
* perm() - this method accepts an input permutation sequence from the user and performs the permutations on the cube in order
* checkState() - this method tests to see if the cube is in a solved state
* show() - displays cube in 2d format on canvas

