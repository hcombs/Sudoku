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
	}

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

display();