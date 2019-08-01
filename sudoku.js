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

	var findMatch = function(puzzleBoard, key,val){
		return puzzleBoard.filter(function(x){ 
			return x[key] === val;
		});
	};

	var inSet = function(x,y,value){
		findMatch(
			board.findMatch(grid,"x",x).
			concat(board.findMatch(grid,"y",y)),
			"value",
			value);
	}


	var fillValues = function (grid,i){

		var z = findMatch(grid,"value",0);

		if(z.length === 0){
			return true;
		}

		z = 0;

		for(var i = 1; i < 10; i++){
			if (inSet(grid[z].x, grid[z].y, value)){
				grid[z].value = value;
				if (fillValues(grid,i)){
					return true;
				}
				grid[z].value = 0;
			}
		}

		return false;
	};

	var init = function(){
		grid[randomValue(81,0)].value = randomValue(9,1);
		fillValues();
		return grid;
	}

	return {
		grid:grid,
		findMatch:findMatch, 
		init:init
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
	this.event.target.assignObjValue({
		'innerHTML':''		
		}).appendChild(dom.newEl('input')
			.assignObjValue({
				'type':'text',
		    	'className':'input'
		}));
};

/*
var solvedPuzzle = function(){

	var inGrid = function(ref,grid,col,row){
		var rowStart = row - (row%3);
		var colStart = col - (col%3);

		var colEnd = colStart + 2;
		var rowEnd = rowStart + 2;
			
		return false;
	};
}();*/