function greaterNum(num1, num2) {
	if( num1 >= num2 ){
		return num1;
	}else{
		return num2
	}
}

function helloWorld(lang) {
	switch (lang){
		case "en":
			console.log ("Hello");
			break;
		case "es":
			console.log ("Hola");
			break;
		default:
			console.log ("Привет");
	}
}
