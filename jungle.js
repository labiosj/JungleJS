let tigerNumber = 0, monkeyNumber = 0, snakeNumber = 0;

class Animal {
	constructor(){
	
		this.energy = 0;
	}


	makeSound(){
		console.log('Make sound');
		this.energy -= 3;
	}

	eatFood(nomnom){
		console.log('Eating '+nomnom.name);
		this.energy += 5;
	}

	sleep(){
		console.log('Sleep');
		this.energy += 10;
	}
}

class Tiger extends Animal{
	constructor(){
    super();
    tigerNumber++;
	}

	sleep(){
    console.log('tiger');
		this.energy += 5;
	}

	eatFood(nomnom){
    if(nomnom.name == "grain"){
      console.log('barf');
    }else{
      console.log('tiger'); 
      super.eatFood(nomnom);
    }
  }
  totalTigers(){
    return tigerNumber;
  }
}

class Monkey extends Animal{
	constructor(){
    super();
    monkeyNumber++;
	}

	makeSound(){
		console.log('Make sound');
		this.energy -= 4;
	}

	eatFood(nomnom){
		console.log('Eating '+nomnom.name);
		this.energy += 2;
	}

	play(){
		console.log('Play');
		if (this.energy >= 8){
			this.energy -= 8;
			console.log('Oooo Oooo Oooo');
		} else {
			console.log('Monkey is sooooo tired');
		}
	}
  totalMonkey(){
    return monkeyNumber;
  }
	
}

class Snake extends Animal{
  constructor(){
    super();
    snakeNumber++;
  }
  totalSnakes(){
    return snakeNumber;
    
  }
}

class Jungle {
  constructor(animalArray){
    this.animals = animalArray==null?[]:animalArray; //set to empty, else prepopulate
    this.food = [];
}
soundOff(){
    this.animals.forEach(function(animal){
        animal.makeSound();
    });
}
  /*
	constructor(tiger, monkey, snake) {
		this.tiger = tiger;
		this.monkey = monkey;
		this.snake = snake;
	}

	soundOff() {
		this.tiger.makeSound();
		this.monkey.makeSound();
		this.snake.makeSound();
	}

	test() {
		console.log('test; ', this.tiger, this.monkey, this.snake);
  }
  */
}

class Food{
  constructor(name){
     this.name = name;
  }
}


class Meat extends Food{
  constructor(){
      super("meat");
  }
}



class Fish extends Food{
  constructor(){
      super("fish");
  }
}


class Bugs extends Food{
  constructor(){
      super("bugs");
  }
}


class Grain extends Food{
  constructor(){
      super("grain");
  }
}

let tiger = new Tiger();
let battleCat = new Tiger();
let tigger = new Tiger();
tiger.sleep();
let bugs = new Bugs();
let grain = new Grain();
tiger.eatFood(bugs);
tiger.eatFood(grain);
console.log("tiger count "+tigerNumber);
console.log(tiger.energy);
let monkey = new Monkey();
console.log(monkeyNumber);
monkey.sleep();
monkey.play();
monkey.play();
monkey.play();
let snake = new Snake();
let jungle = new Jungle([tiger, battleCat, tigger, monkey, snake]);
jungle.soundOff();
