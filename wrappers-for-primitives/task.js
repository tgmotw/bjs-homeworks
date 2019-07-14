///////////////////////////////////////////////////////////////////////////////////////////////////
//Задача №1
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date){
    let inboxPercent = percent;
    let inboxContribution = contribution;
    let inboxAmount = amount;
    let inboxDate = new Date(date);
    let currentDate = new Date();
    let totalAmount;

    percent = percent.replace(/\s+/g, '');
    percent = parseFloat(percent.replace(",", "."));
    contribution = contribution.replace(/\s+/g, '');
    contribution = parseFloat(contribution.replace(",", "."));
    amount = amount.replace(/\s+/g, '');
    amount = parseFloat(amount.replace(",", "."));

    if (isNaN(percent*1) || isNaN(contribution*1) || isNaN(amount*1) || contribution >= amount || isNaN(date.getFullYear()) || currentDate >= date){
        console.log(`Рассчёт платежа невозможен!`);
        if (isNaN(percent*1)){console.log(`Введено недопустимое значение процентной ставки: ${inboxPercent}`)};
        if (isNaN(contribution*1)){console.log(`Введено недопустимое значение суммы первоначального взноса: ${inboxContribution}`)};
        if (isNaN(amount*1)){console.log(`Введено недопустимое значение размера кредита: ${inboxAmount}`)};
        if (isNaN(date.getFullYear())){console.log(`Введено недопустимое значение даты окончания кредита: ${inboxDate}`)};
        if (currentDate >= date){console.log(`Введённая дата окончания кредита меньше текущей даты`)};
        if (contribution >= amount){console.log(`Введённая сумма первоначального взноса равна или превышает сумму кредита`)};
        return
    };

    let n = (date.getFullYear() - currentDate.getFullYear()) * 12 + Math.abs(date.getMonth() - currentDate.getMonth());
    percent = percent / 100 / 12;
    totalAmount = (amount - contribution) * (percent + percent / (Math.pow(1 + percent, n) - 1)) * n;
    console.log(`Ежемесячный платёж составляет: ${Math.round(totalAmount)} руб.`);
    console.log(`Общая сумма выплат: ${Math.round(totalAmount  / n)} руб.`);
    return totalAmount;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Задача №2
function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
};

function getGreeting(name){
    let greeting;
    console.log(name);
    if (name === ""){
        greeting = `Привет, мир! Меня зовут Аноним!`;
    return greeting;
    };
    greeting = `Привет, мир! Меня зовут ${name}!`;
    return greeting;
}
