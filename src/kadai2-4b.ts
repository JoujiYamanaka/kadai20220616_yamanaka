function createSequence() {
  let val = 1;
  return val++;
}

const sequence = createSequence;
console.log(sequence());
console.log(sequence());
