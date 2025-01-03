Element.prototype.assignObjValue = function(obj){
	for(var key in obj){
		this[key] = obj[key];
	}
	return this;
};

var difficulty ={
	"Easy":40,
	"Medium":60,
	"Hard":80
};

var selectedPos = {
	"Easy":"0",
	"Medium":"33.33%",
	"Hard":"66.66%"
};

var square = function (piece){ 
	var number = piece.isBlank ? "&nbsp;" : piece.value;
	return component({
			type:piece.type,
			elementProperties:{
				className:piece.class,
				onclick:showInput,
				innerHTML:number,
				style:piece.styleVals
		}
	});
};

var component = function(elObj){
	return dom.newEl(elObj.type).assignObjValue(elObj.elementProperties);
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

var display = function(grid){
	var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
	var containerSize = (colSize + 2) * 9;
	var leftPos = (document.documentElement.clientWidth - containerSize) / 2;

	dom.$("difficulty").assignObjValue({
		"style":"width:" + containerSize + "px;" + "left:" + leftPos + "px;"
	});

	var diffLevels = dom.$("difficulty").children;
	[].forEach.call(diffLevels ,function(x){
		x.onclick = setDifficulty;
	});

	dom.$("board").assignObjValue({
		"style": "width:"+containerSize+"px;height:"+containerSize+"px;left:"+leftPos+"px;"
	});
	
	grid.map(function(x,i){	return dom.$("board").appendChild(square(grid[i]));	});
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
    	var k = 0;
    	for(var i = 0; i < as.length; i++) {
        	for(var j = 0; j < bs.length; j++) {
            	result.push(f(as[i], bs[j], k));
            	k++;
	     	}
   		}
   		return result;
	};

	var grid = cross(range(10),range(10), function(x,y,i) {
		var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
		var style = "width:"+colSize+"px;height:"+colSize+"px;"
    	return { 
    				x: x, 
    			 	y: y, 
    			 	index:i, 
    			 	value: 0, 
    			 	isBlank:false, 
    			 	styleVals:style,
    			 	type:"div",
    			 	class:"col"
    			};
	});

	var randomValue = function(max,min){
		return parseInt(Math.floor(Math.random() * max - min) + min);
	};

	var notInSet = function(x,y,value){
		var startX = x - (x % 3) + 1 <= x? x - (x % 3) + 1: x - 2;
		var startY = y - (y % 3) + 1 <= y? y - (y % 3) + 1: y - 2;

		var endX = startX + 2;
		var endY = startY + 2;

		return grid.filter(function(w){
				var row = w.x === x && w.value === value;
				var col = w.y === y && w.value === value;
				var section = (w.x >= startX && w.x <= endX) && (w.y >= startY && w.y <= endY) && w.value === value;
				if(row || col || section){
					return w;
				}
		});
	};

	var fillValues = function (grid){
		var c = grid.filter(function(w){ return w.value === 0;});

		if(c.length === 0){
			return true;
		}

		var currentPiece = c[0];

		for(var i = 1; i < 10; i++){

			if (notInSet(currentPiece.x, currentPiece.y, i).length === 0){
				grid[currentPiece.index].value = i;
		
				if (fillValues(grid)){
					return true;
				}

				grid[currentPiece.index].value = 0;
			}
		}
		return false;
	};

	var assignBlanks = function(difficulty){
		var x = parseInt(Math.ceil(randomValue(9,1) + randomValue(9,1)  / 4));
		var y = parseInt(Math.ceil(randomValue(9,1) + randomValue(9,1)  / 4));

		var pos = grid.filter(function(key){
			if (key.x === x && key.y === y){
				return key;
			}
		});

		pos = pos.length > 0 ? pos[0].index : 0;

		grid[pos].isBlank = true;

		difficulty--;
		difficulty > 0 ? assignBlanks(difficulty):true;
	};

	var clearGrid = function(){
		grid = grid.map(function(z){
			z.isBlank = false;
			z.value = 0;
			return z;
		});
	}

	var init = function(difficulty){
		clearGrid();
		grid[randomValue(81,1)].value = randomValue(9,1);
		fillValues(grid);
		assignBlanks(difficulty);
		return grid;
	};

	return {
		grid:grid,
		notInSet:notInSet,
		init:init
	};
}();

var showInput = function(e){
	e.target.assignObjValue({
		'innerHTML':''		
		}).appendChild(dom.newEl('input')
			.assignObjValue({
				'type':'text',
		    	'className':'input'
			})
		);
};

var setDifficulty = function(){
	dom.$("board").innerHTML = "";
	var key = this.innerHTML.trim();
	dom.$("selected").style.left = selectedPos[key];
	dom.$("selected").innerHTML = key;
	solution = board.init(difficulty[key]);
	console.log(`Blank count ${solution.filter(e=>e.isBlank == true).length - 1}`); 
	display(solution);
};

var solution = board.init(70);
display(solution);

console.log(`Blank count ${solution.filter(e=>e.isBlank == true).length - 1}`); 
