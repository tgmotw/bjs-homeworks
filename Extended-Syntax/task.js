

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let d;
    let x = [];

    d = Math.pow(b, 2) - 4 * a * c;

    if (d < 0){
        x[0] = "корней нет";
    }else if (d > 0){
        x[0] = (-b + Math.pow(d, 0.5)) / (2 * a);
        x[1] = (-b - Math.pow(d, 0.5)) / (2 * a);
    }else if (d === 0){
        x[0] = -b / ( 2 * a);
    };
    return x;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
    console.log(`Средний балл = ${averageMark}`);
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let marksSum = 0;

    if(marks.length > 4){
        console.log("Количество введённых оценок превышает допустимую величину 5! Результат будет посчитан по первым пяти оценкам!");
        marks = marks.slice(0, 5);
    };
    for (mark of marks){
        marksSum = marksSum + mark;
    };

    averageMark = marksSum / marks.length;

    return averageMark;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = 0;
    let today = new Date();
    let result = 0;

    age = today.getFullYear() - dateOfBirthday.getFullYear();

    if (age < 18){
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }else{
        result = `Не желаете ли олд-фэшн, ${name}?`
    };

    console.log(result);

    return result;
}
