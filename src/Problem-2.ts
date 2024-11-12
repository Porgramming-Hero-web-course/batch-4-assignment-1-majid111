const removeDuplicates=(numberArray2:number[]):number[]=>{
const newArray2:number[]=[];
numberArray2.forEach((num:number)=>{
if(!newArray2.includes(num)){
    newArray2.push(num);
}
})
return newArray2;
}

const a= removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(a);
