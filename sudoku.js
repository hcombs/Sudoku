Element.prototype.assignValue = function(key,value){
	this[key] = value;
	return this;
};

var dom = function(){
	var $ = function(id){
		return document.getElementById(id);
	};
	var newEl = function(type){
		return document.createElement(type);
	};
	var append = function(parent,child){
		parent.appendChild(child);
	};
	return{
		$:$,
		newEl:newEl,
		append:append
	}
}();

var display = function(blanks,grid){
	var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
	var containerSize = (colSize +2) * 9;
	var leftPos = (document.documentElement.clientWidth - containerSize) / 2;

	dom.$("board").assignValue("innerHTML","")
		.assignValue("style","width:"+containerSize+"px;height:"+containerSize+"px;left:"+leftPos+"px;");

	for(var i =0; i <81; i++){
		var col = dom.newEl('div').assignValue('className','col')
			.assignValue("style","width:"+colSize+"px;height:"+colSize+"px;background:"+puzzlePieces.assignBackground(i,blanks)+";")
			.assignValue("innerHTML",puzzlePieces.assignBlank(i,grid,blanks));
		dom.append(dom.$("board"),col);
	}	
};

var puzzlePieces = function(){
	var assignBlank = function(index,grid,blanks){
		var blank = !blanks[index]? blanks[index] : grid[index];
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
	var init = function(){
		var blanks = [];
		for(var i =0; i < 81; i++){
			blanks.push(true);
		}
		return blanks;
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

var blanks = puzzlePieces.init();
puzzlePieces.setBlanks(blanks);
puzzlePieces.setBlanks(blanks);
puzzlePieces.setBlanks(blanks);
var grid = [];
for(var i = 0; i< 81; i++){
	grid.push(0);
}

display(blanks,grid);

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
}();
var fillBoard = function(){
	var puzzle = solvedPuzzle.init();
	grid.init();
	var container = document.getElementById("board");
	for(var j = 0; j < 9; j++){
		var cel = parseInt(Math.random() * 8);
		for(var k = 0; k < 9; k++){
			container.children[j].children[k].innerHTML = puzzle[j][k];				
		}
	}

	return puzzle;
};
/*
var rotateInput = function(el){
	var pos = Array.from(el.parentElement.children).indexOf(el) + 1;
	var viewportOffset = el.getBoundingClientRect();
	var left = viewportOffset.left;
	var dimension = el.clientWidth;
	var parent = el.parentElement;
	var input = grid.puzzlePiece("input","puzzleSquare", dimension, dimension);
	left = left - lfp;
	input.setAttribute("type","text");
	input.style.left = (left+ "px");
	parent.insertBefore(input,el);
	el.className += " rotate"; 
	input.className += " flatten";
	input.onkeyup = function(){
		checkValue(this);
	}
};
var checkValue = function(el){
	var value = parseInt(el.value);
	solvesPiece(value,el);
};*/