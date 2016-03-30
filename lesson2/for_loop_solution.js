function numberGenerator() {
		for(var i = 0; i<5; i++){
		var min = 1, max = 20, rand;
		rand = Math.floor(min + Math.random() * (max +1 -min));
		if (rand % 2 == 0){
			console.log (rand + " четное");
		}
		else console.log (rand + " нечетное");
	}
}

function multiplicationTable() {
	for (var multiplier = 1; multiplier <= 10; multiplier ++){
		for (var multiplier2 = 1; multiplier2 <= 10; multiplier2 ++){
			result = multiplier * multiplier2;
			console.log (multiplier + " * " + multiplier2 + " = " + result);
		}
	}
}

function assignGrade(score){
	if (score >= 81) return 5;
	else if (score >= 61) return 4;
	else if (score >= 41) return 3;
	else if (score >= 21) return 2;
	else return 1;
}
function checkAssignGrade() {
		for (var i = 80; i <= 100; i ++){
		console.log("Для i="+ i + " оценка " + assignGrade(i));
	}
}
