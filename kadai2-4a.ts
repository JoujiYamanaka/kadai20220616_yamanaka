function createSequence() {
  let val = 1;
  return function () {
    return val++;
  };
}

const sequence = createSequence();
console.log(sequence());
console.log(sequence());
