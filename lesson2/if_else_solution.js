function greaterNum(num1, num2) {
	if (num1 >= num2){
		return num1;
	}else{
		return num2;
	}
}

function helloWorld(lang) {
		switch (lang){
		case "en":
			return ("Hello");
		case "es":
			return ("Hola");
		default:
			return ("Привет");
	}
}
helloWorld("en");
helloWorld("es");
helloWorld();

