var grid = board.grid;

grid[randomValue(81,0)].value = randomValue(9,1);

var x = board.findMatch(board.findMatch(grid,"x",1).concat(board.findMatch(grid,"y",4)),"value",2);