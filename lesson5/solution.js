// Вывод геометрического объекта с параметрами
function getGeometricObject() {
	var ABC = ["a","b","c","d","e","f","g","h","i"];
	var geometricObject = {
		type : arguments[0]
	}
	for (var i = 1; i < arguments.length; i++){
			geometricObject[ABC[i - 1]] = arguments[i]; 
	}
		switch(arguments[0]){
			case "square":
				geometricObject.getSquare = function(){
					return Math.pow(this["a"],2);
				};
				break;
			case "rectangle":
				geometricObject.getSquare = function(){
					return this["a"] * this["b"];
				};
				break;
			case "triangle":
				var p = (arguments[1] + arguments[2] + arguments[3])/2;
				geometricObject.getSquare = function(){
					if(this["a"] + this["b"] > this["c"] && this["a"] + this["c"] > this["b"]
					&& this["b"] + this["c"] > this["a"]){					
						return Math.sqrt(p * (p - this["a"]) * (p - this["b"]) * (p - this["c"]));
					}else{
						return ("Your triangle is incorrect!");						
					}
				};
				break;
			default:
				geometricObject.getSquare = function(){			
					return this["a"];			
		}
	}
	return (geometricObject);
}


// Прототип животных
function Animal(name, type){
	this.name = name;
	this.type = type;
	this.stepCount = 0;
}

Animal.prototype = {
	makeNoise: function(){
		switch (this.type){
			case "dog":
				return "woof";
			case "cat":
				return "meow";
			case "rat":
				return "squeak";
			default:
				return "This program support three species of animals: dog, cat and rat";
		}
	},	
	walk: function(count){
		return (this.stepCount += count);
	}
}	