type User ={
    name:string;
    age:number;
}

const getProperty= <T,Q extends keyof T> (User:T, key:Q)=>{
    return User[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));