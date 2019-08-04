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

var display = function(grid){
	var colSize = ((document.documentElement.clientWidth * 0.3) / 9) - 4;
	var containerSize = (colSize + 2) * 9;
	var leftPos = (document.documentElement.clientWidth - containerSize) / 2;

	dom.$("board").assignObjValue({
		"style": "width:"+containerSize+"px;height:"+containerSize+"px;left:"+leftPos+"px;"
	});
	
	blanks.map(function(x,i){
		return dom.$("board").appendChild(dom.newEl('div').assignObjValue({
					"style":"width:"+colSize+
					"px;height:"+colSize+
					"px;background:"+(grid[i].isBlank ? "#000": "#fff") +";",
					"innerHTML":grid[i].isBlank ? "&nbsp;":grid[i].value,
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
    	return { x: x, y: y, index:i, value: 0, isBlank:false};
	});

	var findMatch = function(array, key,val){
		return array.filter(function(x){ return x[key] === val;});
	};

	var notInSet = function(x,y,value,grid){
		var fullSet = grid.filter(function(w){
						return w.x === x && w.value === value;
				   })
					.concat(grid.filter(function(v){
						return v.y === y && v.value === value;
				   })
		);

		var startX = x - (x % 3) + 1;
		var startY = y - (y % 3) + 1;
		
		var endX = startX + 2;
		var endY = startY + 2;

		grid.forEach(function(v,i){
			if(v.x >= startX && v.x <= endX && v.y >= startY && v.y <= endY && v.value === value){
				fullSet.push(v);
			}
		});			

		if (x===1 && y > 3){
			console.log(fullSet+ " " + value);
		}

		return fullSet.length === 0;
	};

	var fillValues = function (grid){

		var z = findMatch(grid,"value",0);

		if(z.length === 0){
			return true;
		}

		var x = z[0].x;
		var y = z[0].y;

		for(var i = 1; i < 10; i++){
			if (notInSet(x, y, i, grid)){
				grid[z[0].index].value = i;
		
				if (fillValues(grid)){
					return true;
				}
		
				grid[z[0].index].value = 0;
			}
		}

		return false;
	};

	var init = function(){
		grid[0].value = randomValue(9,1);
		fillValues(grid);
		return grid;
	}

	return {
		grid:grid,
		findMatch:findMatch, 
		notInSet:notInSet,
		init:init
	};
}();

var puzzlePieces = function(){
	var setBlanks = function(blanks){
		for(var i = 0; i < 8; i++){
			var index = Math.floor((randomValue(i*8,i/8) + randomValue(i*8,i/8)) / 2);
			blanks[index] = false;
		}
	};

	return{
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