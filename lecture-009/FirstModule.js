let parser=require("minimist")
let args=parser(process.argv);
console.log(args)
console.log(args.x)
console.log(args.y);
console.log(args.age)
if(args.age>20){
 console.log("Enjoy the party")
}