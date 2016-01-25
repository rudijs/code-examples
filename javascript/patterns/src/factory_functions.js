'use strict';

// https://www.youtube.com/watch?v=ImwrezYhw4w&feature=cards&annotation_id=eab57fc0-790e-4e8e-89fd-5ab7fd16344e&src_vid=wfMtDGfHWpA

// non factory example
class Dog {
  constructor() {
    this.sound = 'woof';
  }
  talk() {
    console.log(this.sound);
  }
}

let sniffles = new Dog;
sniffles.talk(); // woof

// example use
// $('button.myButton').click(sniffles.talk.bind(sniffles));
// or
// $('button.myButton').click(_ => sniffles.talk());

// factory function example

const dog = () => {
  const sound = 'woof';
  return {
    talk: () => console.log(sound)
  }
}

sniffles = dog();
sniffles.talk(); // woof

// example use
// $('button.myButton').click(sniffles.talk());
