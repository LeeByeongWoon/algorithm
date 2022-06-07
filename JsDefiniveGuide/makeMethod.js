const a = [1,2,3,4,5,6];

a.add=()=>{
    let result = 0;
    a.forEach(num=>{
        result+=num
    })
    return result;
}

console.log(a.add())