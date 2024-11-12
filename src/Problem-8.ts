{
    //


interface User { name: string, age: number, email: string }

function validateKeys<T extends User>(obj: T, keys: (keyof T)[]){
    let availability:boolean=false;
    keys.forEach((key)=>{
        if (Object.keys(obj).includes(key)){
           availability=true;

        }else{
           availability=false;
        }

    }
    )
    
    return availability;
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));


//
}