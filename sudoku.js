var dom = (function(){
	var $ = function(id){
		return document.getElementById(id);
	};

	var createElement = function(domType){
		return document.createElement(domType);
	};

	var append = function(parent,child){
		parent.appendChild(child);
	};

	Element.prototype.cssVal = function (cssClass){
		this.className = cssClass;
		return this;
	};

	Element.prototype.addProperty = function(propertyName,propertyValue){
		this.setAttribute(propertyName,propertyValue);
		return this;
	};

	Element.prototype.addStyle = function(propertyName,propertyValue){
		this.style[propertyName] = propertyValue;
		return this;
	};
	
	Element.prototype.setInnerHtml = function(inner){
		this.innerHTML = inner;
		return this;
	};

	return {
		$:$,
		createElement:createElement,
		append:append
	};
}());

var gamePieces = function(){
	var contents = {
		'containerSize':'',
		'left':'',
		'squareSize':''
	};

	var getSquare = function(){
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		var square = width > height ? width * 0.3 : width * 0.9;
		return square;
	};

	var getLeft = function(square){
		return (document.documentElement.clientWidth - square) / 2;
	};

	var set = function(key,value){
		contents[key] = value;
	}; 

	var setDimensions = function(){
		var square = getSquare();
		var leftPos = getLeft(square);
		set('containerSize',square+"px");
		set('left',leftPos+"px");
		set('squareSize',((square/ 9) - 1) +'px');
		return contents;
	};

	return {
		setDimensions:setDimensions
	};
}();
var initial = function(){

	var board;

	var column = function(){
		var col = dom.createElement('div');
		col.cssVal('col').
			addStyle('height',board.squareSize).
			addStyle('width',board.squareSize);
		return col;
	};

	var row = function(){
		var row = dom.createElement('div');
		row.cssVal("row").
			addStyle("height",board.squareSize);	
		
		accumulator(1,9,column,row,dom.append);

		return row;
	};

	var setDisplay = function(){
		board = gamePieces.setDimensions();
		
		dom.$("board").setInnerHtml('').
			addStyle("left",board.left).
			addStyle("width",board.containerSize).
			addStyle("height",board.containerSize);

		accumulator(1,9,row,dom.$('board'),dom.append);
	};

	return{
		setDisplay:setDisplay
	};
}();

var accumulator = function(pos,end,indexFn,total,totalFn){
	if (pos <= end){
		totalFn(total,indexFn());
		pos++;
		accumulator(pos,end,indexFn,total,totalFn);
	}
};

window.onload = function(){
	initial.setDisplay();
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
	
	var randSudokuVal = function(){ return parseInt(Math.random() * 8);};
	var row = function() { return Array.from({length:9},(v,i)=>0);};

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

	var inRow = function(ref,grid,row){
		for(var i = 0; i< 9; i++){
			if(grid[row][i] === ref){
				return true;
			}
		}
		return false;
	};

	var inCol = function(ref,grid,col){
		for(var i = 0; i< 9; i++){
			if(grid[i][col] === ref){
				return true;
			}
		}
		return false;
	};

	var init = function(){	
		var grid = Array.from({length:9},(v,i)=>row());
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
};
var solvesPiece = function(val,el){
	var col = Array.from(el.parentElement.children).indexOf(el);

	var row = Array.from(el.parentElement.parentElement.children).indexOf(el.parentElement);

	if(puzzle[row][col]=== val){
		el.parentElement.children[col + 1].innerHTML = val;
		el.parentElement.children[col + 1].className = "col";
		el.parentElement.children[col + 1].removeAttribute("onclick");
		el.parentElement.children[col + 1].style.background = "#fff";
		el.parentElement.removeChild(el);
		return;
	}


	for(var i = 0; i < 9; i++){
		if(puzzle[row][i]===val){
			console.log("match row" + i);
		}
	}
	for(var j = 0; j < 9; j++){
		if(puzzle[j][col]===val){
			console.log("match column" + j);
		}
	}

	var rowStart = row - (row%3);
	var colStart = col - (col%3);

	var colEnd = colStart + 2;
	var rowEnd = rowStart + 2;

	for(i=rowStart;i<=rowEnd; i++){
		for(var k = colStart; k <= colEnd;k++){
			if(puzzle[i][k]===val){
				console.log("match grid" + i + " " + k);
			}
		}
	}
};
var setPieces = function(seeder,min){
	var totalPieces = parseInt(Math.floor(Math.random() * seeder - min) + min);
	return totalPieces;
};
var setGame = function(row,col){	
	if(row > 8 || col > 8){
		return;
	}
	var container = document.getElementById("board");
	container.children[row].children[col].onclick = function(){ rotateInput(this); };	
	container.children[row].children[col].innerHTML = "&nbsp";
	container.children[row].children[col].style.background = "#000";
};
var getBlanks = function(grid,min){
	var arr = [];
	for(var i = 0; i < 4; i++){
		arr.push(setPieces(grid,min));
	}

	var midpt = (arr[0] + arr[1]) / 2;
	var midpt2 = (arr[2] + arr[3]) / 2;
	var midpt3 = (arr[0] + arr[1] + arr[2] + arr[3]) / 4;
	var avg = (midpt3 + midpt2 + midpt) / 3;
	avg = avg > 2 ? 2 : avg;

	return avg;
};
var setBlanks = function(start,end,grid,offsetRow,offsetCol){
	for(var i = start; i < end; i++){
		setGame(parseInt(getBlanks(grid,start)) + offsetRow, parseInt(getBlanks(grid,start))+ offsetCol);
	}
};
var difficulty = function(endPt,row,col){
	if(row > 6){
		return;
	}
	col = col === "" ? 0:col + 3;
	row = col > 6 ? row + 3:row;
	col = col > 6 ? 0 : col;
	setBlanks(1,endPt,4,row,col);
	difficulty(endPt,row,col);
};
var puzzle = fillBoard();
var easy = 3;
var medium = 5;
var hard = 9;
difficulty(easy,0,"");
difficulty(medium,0,"");
difficulty(hard,0,"");*/