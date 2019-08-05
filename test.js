var h = board.init();
display(h);

	var set = function(x,y,value,grid){
		var startX = x - (x % 3) + 1;
		var startY = y - (y % 3) + 1;
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