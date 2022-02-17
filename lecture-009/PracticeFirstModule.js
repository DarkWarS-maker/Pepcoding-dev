let parser=require("minimist")
let args=parser(process.argv)
let fs=require("fs")
let content=fs.readFileSync(args.source,"utf-8")
console.log(content)
let words=content.split(" ");
for(let i=0;i<words.length;i++){
    words[i]=words[i].toUpperCase();
}
let t1=Date.now();
console.log("Starting time "+t1)
let destt=words.join(" ");
fs.writeFileSync(args.dest,destt,"utf-8")
console.log(destt)
let t2=Date.now();
console.log("Ending time "+t2)