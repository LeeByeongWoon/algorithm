type Duration = Date[] | number[];
const isConflict = (duration1: Duration, duration2: Duration) => {
  if (duration1[0] < duration2[1] && duration1[1] > duration2[0]) {
    return "conflict";
  } else {
    return "not conflict";
  }
};

console.log(
  isConflict([Date.now() - 21, Date.now()], [Date.now() - 21, Date.now()])
);
console.log("");
console.log(
  isConflict([Date.now() - 21, Date.now()], [Date.now() - 21, Date.now()])
);
