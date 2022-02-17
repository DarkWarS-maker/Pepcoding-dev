let n=parseInt(process.argv[2],10);
let arr=[];

console.log(process.argv);

for(let i=1;i<=n;i++){
    let val=parseInt(process.argv[2+i],10);
    arr.push(val)
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}