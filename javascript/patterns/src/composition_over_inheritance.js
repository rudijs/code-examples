'use strict';

// https://www.youtube.com/watch?v=wfMtDGfHWpA

const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
});

barker({name: 'Karo'}).bark();

const barkingDriver = (name) => {
  const state = {
    name: name,
    speed: 100,
    position: 0
  }
  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

const pooch = barkingDriver('Snoopy');
pooch.bark();
console.log('pooch.drive()', pooch.drive());
