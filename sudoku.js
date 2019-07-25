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

var display = function(){
	var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
	var containerSize = (colSize +2) * 9;
	var leftPos = (document.documentElement.clientWidth - containerSize) / 2;

	dom.$("board").assignValue("innerHTML","")
		.assignValue("style","width:"+containerSize+"px;height:"+containerSize+"px;left:"+leftPos+"px;");

	for(var i =0; i <81; i++){
		var col = dom.newEl('div').assignValue('className','col')
			.assignValue("style","width:"+colSize+"px;height:"+colSize+"px")
			.assignValue("innerHTML",i);
		dom.append(dom.$("board"),col);
	}	
};

var checkPuzzle = function(){
	var column = function(row,grid,key){
		return filterMatch(0,key,grid[row]);
	};

	var row = function(column,grid,key){
		return filterMatch(0,key,flatten(0,8,grid,column,[]));
	};

	var grid = function(row,column,grid){
		var rowStart = row - (row%3);
		var colStart = col - (col%3);

		var colEnd = colStart + 2;
		var rowEnd = rowStart + 2;
	};

	var inRange = function(colStart,colEnd,rowStart,rowEnd,grid){
		if(rowStart > rowEnd){
			return -1;
		}
	};

	return{
		column:column,
		row:row,
		grid:grid
	};

}();

var filterMatch = function(pos,key,array){
	if(pos < array.length){
		if(array[pos]=== key){
			return key;
		}
		pos++;
		return filterMatch(pos,key,array);
	}
	return -1;
};

var flatten = function(pos,end,array,col,total){
	if(pos <= end){
		stackPush(total,array[pos][col]);
		pos++;
		flatten(pos,end,array,col,total);
	}
	return total;
};

var accumulator = function(pos,end,indexFn,total,totalFn){
	if (pos <= end){
		totalFn(total,indexFn());
		pos++;
		accumulator(pos,end,indexFn,total,totalFn);
	}
	return total;
};
var stackPush = function(a,b){
	a.push(b);
	return a;
};
var randomValue = function(max,min){
	return parseInt(Math.floor(Math.random() * max - min) + min);
};

display();




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