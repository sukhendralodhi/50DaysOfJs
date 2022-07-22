function toWeirdCase(string) {
  return [...string]
    .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
    .join("");
}

console.log(toWeirdCase('This'));
