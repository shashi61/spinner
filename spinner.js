const array = ['|','/','-','\\','|','/','-','\\','|'];
let delay = 100;
let increment = 200;
for(let i of array){
    setTimeout(() => {
        process.stdout.write(`\r${i}  `);
      }, delay);
      delay += increment;
}
