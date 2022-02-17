let t1=Date.now();
console.log("Starting time "+t1%10000);
console.log("Checking time")
let t2=Date.now();
console.log("Ending time "+ t2%10000);
console.log("Time gap "+(t2-t1));