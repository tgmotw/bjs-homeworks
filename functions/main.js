//Задание №1
function getSolutions(a, b, c){
    let D = Math.pow(b ,2) - 4 * a * c;

    if (D < 0){return {D: D}};

    if (D === 0){
        let x1 = -b / (2 * a);
        return {roots: x1, D: D};
    };

    if (D > 0){
        let x1 = (-b + Math.pow(D, 0.5)) / (2 * a);
        let x2 = (-b - Math.pow(D, 0.5)) / (2 * a);
        return {roots: [x1 , x2], D: D};
    };
};

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнение вида (${a})*X^2 + (${b})*X + (${c}) = 0`);
    console.log(`Значение дискриминанта D= ${result.D}`);

    if (result.D < 0){console.log(`Уравнение не имеет вещественных корней`)};
    if (result.D === 0){console.log(`Уравнение имеет один корень Х1= ${result.roots}`)};
    if (result.D > 0){console.log(`Уравнение имеет два корня Х1= ${result.roots[0]}, Х2 =${result.roots[1]}`)};
}

showSolutionsMessage(2, 2, 1);
showSolutionsMessage(1, 2, 1);
showSolutionsMessage(1, 2, -2);

///////////////////////////////////////////////////////////////////
/*
//Задание №2 (свой вариант)
function getAverageScore(dataSet){
    let personAverageScore = [];
    let totalMarksSum = 0;

    for (let i = 0; i < dataSet.length; i++){

        let marksSum = 0;
        for (let k = 0; k < dataSet[i].marks.length; k++){
            marksSum = marksSum + dataSet[i].marks[k];
        };

        personAverageScore[i]={name: dataSet[i].subject, mark: marksSum / dataSet[i].marks.length}
        totalMarksSum = totalMarksSum + personAverageScore[i].mark;
    }
    return {subjectsAverages: personAverageScore, totalAverageScore: totalMarksSum / dataSet.length};
};

let dataSet = [{subject: `algebra`, marks: [2, 4, 5, 2, 3, 4]},
               {subject: `geometry`, marks: [2, 4, 5, 2]},
               {subject: `english`, marks: [3, 4, 5, 5]}];

let myresult = getAverageScore(dataSet);
for (let i=0; i < myresult.subjectsAverages.length; i++){
    console.log(`Предмет: ${myresult.subjectsAverages[i].name}, средний бал: ${myresult.subjectsAverages[i].mark}`);
}
console.log(`Общий средний бал по ${myresult.subjectsAverages.length} предметам: ${myresult.totalAverageScore}`);
*/
///////////////////////////////////////////////////////////////////
//Задание №2 (вариант как по заданию)
function getAverageScore(data){
    let personAverageScore = {};
    let totalMarksSum = 0;
    let k = 0;

    for (let prop in data){
        let value = data[prop];
        let marksSum = 0;

        for (let i = 0; i < value.length; i++){
            marksSum += value[i];
        };

        personAverageScore[prop] = marksSum / value.length;
        totalMarksSum += personAverageScore[prop];
        k++;
    };
    personAverageScore.totalAverage = totalMarksSum / k;
    return personAverageScore;
};

let data = {algebra: [2, 4, 5, 2, 3, 4],
            geometry: [2, 4, 5, 2],
            english: [3, 4, 5, 5]};

let result = getAverageScore(data);
for (let key in result){
    console.log(`Предмет: ${key}, средний бал: ${result[key]}`);
};

///////////////////////////////////////////////////////////////////
//Задание №3
function getPersonData(secretData){
    let firstName, lastName;
    if (secretData.aaa === 0){
        firstName = "Родриго";
    }else{
        firstName = "Эмилио";
    };
    if (secretData.bbb === 0){
        lastName = "Родриго";
    }else{
        lastName = "Эмилио";
    };
    return {firstName: firstName, lastName: lastName};
};

let secretData = {aaa: 1, bbb: 1};
console.log(getPersonData(secretData));

secretData = {aaa: 0, bbb: 0};
console.log(getPersonData(secretData));

secretData = {aaa: 1, bbb: 0};
console.log(getPersonData(secretData));

secretData = {aaa: 0, bbb: 1};
console.log(getPersonData(secretData));

