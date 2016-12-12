const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharForNumberString = str => 
  Box(str)
  .map(s => s.trim())
  .map(s => new Number(s))
  .map(i => i + 1)
  .map(s => String.fromCharCode(s))
  .fold(c => c.toLowerCase())

const result = nextCharForNumberString(' 64 ')

console.log(result);