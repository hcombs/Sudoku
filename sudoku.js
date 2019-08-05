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
	
	grid.map(function(x,i){
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

	var notInSet = function(x,y,value){
		var startX = x - (x % 3) + 1 <= x? x - (x % 3) + 1: x - 2;
		var startY = y - (y % 3) + 1 <= y? y - (y % 3) + 1: y - 2;

		var endX = startX + 2;
		var endY = startY + 2;



		if(x<4 && y <4){
			console.log ("x: "+x+" y:"+y+"  "+startX+" "+startY);
		}
		var fullSet = grid.filter(function(w){
						var row = w.x === x && w.value === value;
						var col = w.y === y && w.value === value;
						var section = (w.x >= startX && w.x <= endX) && (w.y >= startY && w.y <= endY) && w.value === value;
						if(row || col || section){
							return w;
						}
		});

		return fullSet.length === 0;
	};

	var fillValues = function (grid){

		var c = grid.filter(function(w){ return w.value === 0;});

		if(c.length === 0){
			return true;
		}

		var x = c[0].x;
		var y = c[0].y;
		var pos = c[0].index;

		for(var i = 1; i < 10; i++){

			if (notInSet(x, y, i)){
				grid[pos].value = i;
		
				if (fillValues(grid)){
					return true;
				}
		
				grid[pos].value = 0;
			}
		}

		return false;
	};

	var init = function(){
		grid[randomValue(81,1)].value = randomValue(9,1);
		fillValues(grid,0);
		return grid;
	}

	return {
		grid:grid,
		notInSet:notInSet,
		init:init
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