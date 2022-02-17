let x=parseInt(process.argv[2],10)

for(let i=2;i<=x;i++){
    let isPrime=IsPrime(i);
    if(isPrime){
        console.log(i);
    }

}

function IsPrime(n){
    let isPrime=true;
    for(let div=2;div*div<=n;div++){
        if(n%div==0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}