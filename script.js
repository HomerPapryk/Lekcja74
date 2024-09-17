class Apple {
  constructor(name, color, sweetness, goodForCider, goodForJuice) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
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

const galaApple = new Apple("Gala", "light red", 6, true, true);
console.log(galaApple.describeApple());

const greenApple = new Apple("Granny Smith", "green", 4, true, false);
console.log(greenApple.describeApple());
