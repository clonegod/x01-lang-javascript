console.info("Program start...");

var counter = 1;
console.log("counter=%d", counter);

console.time("Get data from db");

console.log("Do some complicate job...");
for (let i = 0; i < 100; i++) {
  ;
}

console.timeEnd("Get data from db");

console.log("Over");