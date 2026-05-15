// ================= Базовий клас Animals =================
class Animals {
    static maxAge = 200;
    static maxWeight = 5000;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    move() {
        console.log(`${this.name} moves.`);
    }

    say() {
        console.log(`${this.name} makes a sound.`);
    }

    eat() {
        console.log(`${this.name} eats food.`);
    }

    // Перевірка типу
    static isAnimals(obj) {
        return obj instanceof Animals;
    }
}

// ================= Mammals =================
class Mammals extends Animals {
    static maxAge = 120;
    static maxWeight = 10000;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    static isMammals(obj) {
        return obj instanceof Mammals;
    }
}

// ================= Birds =================
class Birds extends Animals {
    static maxAge = 80;
    static maxWeight = 50;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} flies.`);
    }

    say() {
        console.log(`${this.name} chirps.`);
    }

    eat() {
        console.log(`${this.name} pecks seeds.`);
    }

    static isBirds(obj) {
        return obj instanceof Birds;
    }
}

// ================= Fish =================
class Fish extends Animals {
    static maxAge = 100;
    static maxWeight = 2000;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    move() {
        console.log(`${this.name} swims.`);
    }

    say() {
        console.log(`${this.name} cannot speak.`);
    }

    eat() {
        console.log(`${this.name} eats algae.`);
    }

    static isFish(obj) {
        return obj instanceof Fish;
    }
}

// ================= Predators =================
class Predators extends Mammals {
    static maxAge = 50;
    static maxWeight = 400;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    static isPredators(obj) {
        return obj instanceof Predators;
    }
}

// ================= Whales =================
class Whales extends Mammals {
    static maxAge = 150;
    static maxWeight = 30000;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    static isWhales(obj) {
        return obj instanceof Whales;
    }
}

// ================= Primates =================
class Primates extends Mammals {
    static maxAge = 90;
    static maxWeight = 250;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount);
    }

    static isPrimates(obj) {
        return obj instanceof Primates;
    }
}

// ================= Dog =================
class Dog extends Predators {
    static maxAge = 20;
    static maxWeight = 100;

    constructor(age, name, weight) {
        super(age, name, weight, 4);
    }

    move() {
        console.log(`${this.name} runs.`);
    }

    say() {
        console.log(`${this.name} says: Woof!`);
    }

    eat() {
        console.log(`${this.name} eats meat.`);
    }

    static isDog(obj) {
        return obj instanceof Dog;
    }
}

// ================= Dolphin =================
class Dolphin extends Whales {
    static maxAge = 40;
    static maxWeight = 300;

    constructor(age, name, weight) {
        super(age, name, weight, 0);
    }

    move() {
        console.log(`${this.name} swims quickly.`);
    }

    say() {
        console.log(`${this.name} whistles.`);
    }

    eat() {
        console.log(`${this.name} eats fish.`);
    }

    static isDolphin(obj) {
        return obj instanceof Dolphin;
    }
}

// ================= Human =================
class Human extends Primates {
    static maxAge = 120;
    static maxWeight = 250;

    constructor(age, name, weight) {
        super(age, name, weight, 2);
    }

    move() {
        console.log(`${this.name} walks.`);
    }

    say() {
        console.log(`${this.name} says: Hello!`);
    }

    eat() {
        console.log(`${this.name} eats different food.`);
    }

    static isHuman(obj) {
        return obj instanceof Human;
    }
}

// ================= Створення об'єктів =================

// Birds
const bird1 = new Birds(2, "Sparrow", 0.2, 2);
const bird2 = new Birds(5, "Parrot", 1, 2);

// Fish
const fish1 = new Fish(1, "Goldfish", 0.1, 0);
const fish2 = new Fish(3, "Shark", 200, 0);

// Dogs
const dog1 = new Dog(4, "Rex", 25);
const dog2 = new Dog(2, "Buddy", 18);

// Dolphins
const dolphin1 = new Dolphin(6, "Flipper", 150);
const dolphin2 = new Dolphin(8, "Blue", 170);

// Humans
const human1 = new Human(20, "Alex", 70);
const human2 = new Human(30, "Maria", 60);

// ================= Масив тварин =================

const animals = [
    bird1, bird2,
    fish1, fish2,
    dog1, dog2,
    dolphin1, dolphin2,
    human1, human2
];

// ================= Тестування методів =================

animals.forEach(animal => {
    console.log("---------------");
    console.log("Name:", animal.name);
    console.log("Age:", animal.age);
    console.log("Weight:", animal.weight);
    console.log("Limb Amount:", animal.limbAmount);

    animal.move();
    animal.say();
    animal.eat();
});

// ================= Перевірка типів =================

console.log("---------------");
console.log("Type проверки:");

console.log(Dog.isDog(dog1)); // true
console.log(Dog.isDog(fish1)); // false

console.log(Human.isHuman(human1)); // true
console.log(Human.isHuman(dog1)); // false

console.log(Fish.isFish(fish2)); // true
console.log(Fish.isFish(bird1)); // false

console.log(Animals.isAnimals(dolphin1)); // true

// ================= Перевірка instanceof =================

console.log("---------------");
console.log("instanceof:");

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Mammals); // true
console.log(dog1 instanceof Animals); // true

console.log(human1 instanceof Primates); // true
console.log(dolphin1 instanceof Whales); // true

console.log(fish1 instanceof Mammals); // false

// ================= Статичні поля =================

console.log("---------------");
console.log("Static fields:");

console.log("Dog max age:", Dog.maxAge);
console.log("Human max weight:", Human.maxWeight);
console.log("Fish max age:", Fish.maxAge);