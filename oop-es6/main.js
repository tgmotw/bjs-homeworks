//Задача №1

console.log(`Задача №1`);

class Weapon {
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.currentDurability = durability;
    }
    takeDamage(damage){
        this.currentDurability - damage >= 0 ? this.currentDurability = this.currentDurability - damage : this.currentDurability = 0;
        console.log(`Остаток прочности Вашего оружия (${this.name}) составляет ${this.currentDurability}`);
        return this.currentDurability;
    }

    getDamage(){
        if (this.currentDurability === 0){
                console.log(`Ваш ${this.name} сломан и не может быть использован! Смените оружие!`);
                return 0;
            }
        let currentAttack = 0;
        this.currentDurability / this.durability < 0.30 ? currentAttack = this.attack / 2 : currentAttack = this.attack;
        console.log(`Ваш ${this.name} наносит ${currentAttack} единиц урона`);
        return currentAttack;
    }
}

const arm = new Weapon(`Рука`, 1, Infinity,1);
const bow = new Weapon(`Лук`,10,200, 3);
const sword = new Weapon(`Меч`,25,500, 1);
const knife = new Weapon(`Нож`,5,300, 1);
const staff = new Weapon(`Посох`,8,300, 2);
const longBow = new Weapon(`Длинный лук`,15, bow.durability, 4);
const axe = new Weapon(`Секира`,27, 800, sword.range);
const stormStaff = new Weapon(`Посох бури`,10, staff.durability, 3);

arm.takeDamage(10000);
arm.getDamage();

longBow.takeDamage(800);
longBow.getDamage();

axe.takeDamage(800);
axe.getDamage();

stormStaff.takeDamage(100);
stormStaff.getDamage();
stormStaff.takeDamage(150);
stormStaff.getDamage();
stormStaff.takeDamage(100);
stormStaff.getDamage();

console.log(``);
console.log(`/////////////////////////////////////////////////////////`);
console.log(`Задача №2`);
console.log(``);

//Задача №2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Weapons {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
};
class Bows extends Weapons {
    constructor (name, attack, durability, range){
        super(name, attack, durability, range);
    }
};
class LongBows extends Bows {
    constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};

class Arms extends Weapons {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};
class Swords extends Weapons {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};
class Axes extends Swords {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};
class Knifes extends Weapons {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};
class Staffs extends Weapons {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};
class StormStaffs extends Staffs {
	 constructor (name, attack, durability, range, subname){
        super(name, attack, durability, range);
    }
};

const newbow = new Bows(`Лук`,10,200, 3);
const newlongbow = new LongBows(`Длинный лук`,15,newbow.durability, 3);
const newarm = new Arms(`Рука`, 1, Infinity,1);
const newsword = new Swords(`Меч`,25,500, 1);
const newaxe = new Axes(`Секира`,27, 800, newsword.range);
const newknife = new Knifes(`Нож`,5,300, 1);
const newstaff = new Staffs(`Посох`,8,300, 2);
const newstormstaff = new StormStaffs(`Посох бури`,10, newstaff.durability, 3);


console.log(newlongbow instanceof Weapons ? `${newlongbow.name} относится к классу Оружие` : `${newlongbow.name} не относится к классу Оружие`);
console.log(newlongbow instanceof Bows ? `${newlongbow.name} относится к классу Луки` : `${newlongbow.name} не относится к классу Луки`);
console.log(newbow instanceof Weapons ? `${newbow.name} относится к классу Оружие` : `${newbow.name} не относится к классу Оружие`);
console.log(newbow instanceof Bows ? `${newbow.name} относится к классу Луки` : `${newbow.name} не относится к классу Луки`);
console.log(``);
console.log(`Наименование оружия: ${newstormstaff.name}`);
console.log(`атака: ${newstormstaff.attack}`);
console.log(`прочность: ${newstormstaff.durability}`);
console.log(`радиус действия: ${newstormstaff.range}`);

console.log(``);
console.log(`/////////////////////////////////////////////////////////`);
console.log(`Задача №2`);
console.log(``);

//Задача №3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class StudentLog{
	constructor (name){
		this.name = name;
		this.grades = [];
	}
	
	getName(name){
		return this.name;
	}
	
	addGrade(mark, subject){
		let flag = false
		
		if (mark !== 1 && mark !== 2 && mark !== 3 && mark !== 4 && mark !== 5){flag = true};
		
		for (let grade of this.grades){
			if (grade.subject === subject){
				if (flag === false){
				grade.marks.push(mark);
				console.log(`Количество оценок внесённых в журнал по предмету ${subject} составляет: ${grade.marks.length}`);
				return grade.marks.length;
				}else{
					console.log(`Вы пытались поставить оценку "${mark}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
					console.log(`Оценка "${mark}" в журнал не внесена!`);
					console.log(`Количество оценок внесённых в журнал по предмету ${subject} составляет: ${grade.marks.length}`);
					return grade.marks.length;
				};
			};	
		};
		
		if (flag === false){ 
			this.grades.push({subject: subject, marks: [mark]});
			console.log(`По предмету ${subject} в журнал внесена первая оценка!`);
			return this.grades[0].marks.length;
		}else{
			console.log(`Вы пытались поставить оценку "${mark}" по предмету "${subject}". Допускаются только числа от 1 до 5. По предмету "${subject}" оценки в журнале отсутствуют`);
			return 0;
		};			
	}
	
	getTotalAverage(){
		let totalSum = 0;
		let totalMarks =0;
		if (this.grades.length === 0){
			console.log(`Журнал оценок пуст`);
			return 0;
		}
		for (let grade of this.grades){
			for (let mark of grade.marks){
				totalSum += mark;
			}
			totalMarks += grade.marks.length;
		}
		console.log(`Общий средний бал составляет ${(totalSum / totalMarks).toFixed(2)}`);
		return totalSum / totalMarks;
	}
}

const log = new StudentLog(`Олег Никифороgв`);

console.log(log.getName());

log.getTotalAverage();

log.addGrade(`kjhdfg`, `алгебра`);
log.addGrade(3, `алгебра`);
log.addGrade(`dsfss`, `физика`)
log.addGrade(4, `алгебра`);
log.addGrade(3, `физика`);
log.addGrade(5, `алгебра`);
log.addGrade(5, `физика`);
log.addGrade(`dsfss`, `физика`);
log.addGrade(1, `алгебра`);
log.addGrade(2, `физика`);

log.getTotalAverage();


