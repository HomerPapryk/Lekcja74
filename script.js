class Fruit {
  constructor(name = "Unknown fruit", color = "Unknown color", sweetness = 5) {
    this.name = name;
    this.color = color;

    if (sweetness > 10) {
      this.sweetness = 10;
    } else if (sweetness < 0) {
      this.sweetness = 0;
    } else {
      this.sweetness = sweetness;
    }
  }
}

class Apple extends Fruit {
  constructor(
    goodForCider = false,
    goodForJuice = false,
    name,
    color,
    sweetness
  ) {
    super(name, color, sweetness);

    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }

  describeApple() {
    let description = `Fruit name is ${this.name} and it’s color is ${this.color}. It’s sweetness is about ${this.sweetness} in scale from 0 to 10.`;

    if (this.goodForCider) {
      description += " It’s good for cider production.";
    }

    if (this.goodForJuice) {
      description += " It’s good for juice production.";
    }

    return description;
  }
}

// Przykład 1: Jabłko, które nadaje się na cydr
const apple1 = new Apple(true, false, "Gala", "light red", 6);
console.log(apple1.describeApple());
// "Fruit name is Gala and it’s color is light red. It’s sweetness is about 6 in scale from 0 to 10. It’s good for cider production."

// Przykład 2: Jabłko, które nadaje się na sok i cydr
const apple2 = new Apple(true, true, "Antonowka", "yellow", 7);
console.log(apple2.describeApple());
// "Fruit name is Antonowka and it’s color is yellow. It’s sweetness is about 7 in scale from 0 to 10. It’s good for cider production. It’s good for juice production."

// Przykład 3: Jabłko, które nie nadaje się ani na sok, ani na cydr
const apple3 = new Apple(false, false, "Reneta", "green", 4);
console.log(apple3.describeApple());
// "Fruit name is Reneta and it’s color is green. It’s sweetness is about 4 in scale from 0 to 10."
