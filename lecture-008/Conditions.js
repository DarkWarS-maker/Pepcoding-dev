let args=process.argv;
//let n=parseInt(args[2],10); We can also pass respective base
let n=parseInt(args[2]);

if(n%2==0){
    console.log(n+" even");
}
else{
    console.log(n+" odd");
}