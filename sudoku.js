Element.prototype.assignObjValue = function(obj){
	for(key in obj){
		this[key] = obj[key];
	}
	return this;
};

var dom = function(){
	var $ = function(id){
		return document.getElementById(id);
	};
	var newEl = function(type){
		return document.createElement(type);
	};
	return{
		$:$,
		newEl:newEl
	};
}();

var display = function(blanks,grid){
	var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
	var containerSize = (colSize + 2) * 9;
	var leftPos = (document.documentElement.clientWidth - containerSize) / 2;

	dom.$("board").assignObjValue({
		"style": "width:"+containerSize+"px;height:"+containerSize+"px;left:"+leftPos+"px;"
	});
	
	blanks.map(function(x,i){
		return dom.$("board").appendChild(dom.newEl('div').assignObjValue({
					"style":"width:"+colSize+"px;height:"+colSize+"px;background:"+puzzlePieces.assignBackground(i,blanks)+";",
					"innerHTML":puzzlePieces.assignBlank(i,grid,blanks),
					"onclick":cell,
					"className":"col"
				}));
	});
};

var board = function(){
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

	return {
		grid:grid
	};
}();

var puzzlePieces = function(){
	var assignBlank = function(index,grid,blanks){
		var blank = !blanks[index]? '&nbsp;' : grid[index];
		return blank;
	};
	var assignBackground = function(index,blanks){
		var blank = !blanks[index]? "#000" : "#fff";
		return blank;
	};

	var setBlanks = function(blanks){
		for(var i = 0; i < 8; i++){
			var index = Math.floor((randomValue(i*8,i/8) + randomValue(i*8,i/8)) / 2);
			blanks[index] = false;
		}
	};

	return{
		init:init,
		assignBackground:assignBackground,
		assignBlank:assignBlank,
		setBlanks:setBlanks
	};
}();

var randomValue = function(max,min){
	return parseInt(Math.floor(Math.random() * max - min) + min);
};

var cell = function(){
	!isNaN(this.innerHTML)? true:showInput();
};

var showInput = function(){
	var input = dom.newEl('input')
		.assignObjValue({
			'type':'text',
		    'className':'input'
		});
	this.event.target.assignObjValue({
		'innerHTML':''		
	});
	this.event.target.appendChild(input);
};

/*
var solvedPuzzle = function(){
	var makeGrid = function(grid,row,col){
		var point = unassignedSection(grid);
		var row = point[0];
		var col = point[1];
			
		if(row === -1){
			return true;
		}

		for(var ref = 1; ref <= 9; ref++){
			if(usable(ref,col,row,grid)){
				grid[row][col] = ref;
					
				if(makeGrid(grid,row,col)){
					return true;
				}
				grid[row][col] = 0;
			}
		}
		return false;
	};
	
	var unassignedSection = function(grid){
		var section = [];
		section[0] = -1;
		section[1] = -1;

		for(var i = 0; i<9;i++){
			for(var j = 0; j<9;j++){
				if(grid[i][j]===0){
					section[0] = i;
					section[1] = j;
				}
			}
		}
			return section;
	};

	var usable = function(ref,col,row,grid){
		return !inGrid(ref,grid,col,row) * !inRow(ref,grid,row) * !inCol(ref,grid,col);
	};

	var inGrid = function(ref,grid,col,row){
		var rowStart = row - (row%3);
		var colStart = col - (col%3);

		var colEnd = colStart + 2;
		var rowEnd = rowStart + 2;

		for(i=rowStart;i<=rowEnd; i++){
			for(var k = colStart; k <= colEnd;k++){
				if(grid[i][k]===ref){
					return true;
				}
			}
		}
			
		return false;
	};

	var init = function(){	
		grid[randSudokuVal()][randSudokuVal()] = randSudokuVal();
		makeGrid(grid,0,0);
		return grid;
	}
	return{
		init:init
	}
}();*/