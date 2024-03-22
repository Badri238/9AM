console.log("hello")

//Variables
//let const
let a = 15;
a = 20.1254;
console.log(a)

const b = 5;
// b = 30
console.log(b)

//number,float,character,string,boolean
let c = 'kddfsf'
let d=true
console.log(c)
console.log(d)

let a1 = [15, 20, 14]
a1[12] = 24
console.log(a1)
console.log(c[0])

let objOne = {
    name: "frontend",
    class: "9am",
    b:"react"
}

console.log(objOne.name);
console.log(objOne["class"]);

objOne["name"] = "React"
objOne["name"] = "Angular"

console.log(objOne)

// Object.freeze(objOne)
// Object.seal(objOne)
objOne["name"] = "Java"
objOne["name12"] = "Java"
console.log(objOne)


console.log(Object.entries(objOne))

//Operators


