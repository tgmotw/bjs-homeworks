//Задача №1
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined){return null};
    let sound = animal.sound;
    return  sound;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Задача №2
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    };
};

function getAverageMark(marks) {
    let average = 0;
    for (mark of marks){
        average = average + mark * 1; // mark * 1 - Приводим к number
    };
	
    return average / marks.length;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Задача №3
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
};

function checkBirthday(birthday) {
    let now = new Date();
    let usesrbirthday = new Date(birthday);
	
	if (now.getFullYear() - usesrbirthday.getFullYear() > 18) {return true};
	if (now.getFullYear() - usesrbirthday.getFullYear() < 18) {return false};
	if (now.getFullYear() - usesrbirthday.getFullYear() === 18 && now.getMonth() - usesrbirthday.getMonth() >= 1) {return true};
	if (now.getFullYear() - usesrbirthday.getFullYear() === 18 && now.getMonth() - usesrbirthday.getMonth() === 0 && now.getDate() - usesrbirthday.getDate() >= 0) {return true};
	
	return false;
}
