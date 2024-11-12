const numberArray2:number[]=[1, 2, 2, 3, 4, 4, 5];
const newArray2:number[]=[];
numberArray2.forEach((num:number)=>{
if(!newArray2.includes(num)){
    newArray2.push(num);
}
})
console.log(newArray2);
