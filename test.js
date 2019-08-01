var blanks = puzzlePieces.init();
puzzlePieces.setBlanks(blanks);
puzzlePieces.setBlanks(blanks);
puzzlePieces.setBlanks(blanks);

//display(blanks,grid);

var range = function(n) {
    var result = [];
    for(var i = 1; i < n; i++){
        result.push(i);
	}
    return result;
};

var cross = function(as, bs, f) {
    var result = [];
    for(var i = 0; i < as.length; i++) {
        for(var j = 0; j < bs.length; j++) {
            result.push(f(as[i], bs[j]));
	     }
   }
   return result;
};

var grid = cross(range(10),range(10), function(x,y) {
    return { x: x, y: y, value: 0, isBlank:false};
});

console.log(grid);