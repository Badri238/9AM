// if (0 < 1) {
//     console.log("hello greater")
// } else  {
//     console.log("hello else")
// }

let arr = [4, 6, 7, 10]

for (let o of arr) {
    console.log(o)
}
let obj = {
    name: "hello",
    class:"9am",
}


for (let a in obj) {
    if(a=="name")
        console.log(obj[a])
}

let c = "hello javascript"
//type casting
console.log(c.split("a"))


console.log(c.charAt(1))

console.log(c.indexOf("a"))
console.log(c.lastIndexOf("a"))

console.log(c.search(/A/i))

console.log(c.match(/a/i))
let d = c.matchAll("a")

console.log(d)
console.log("--------------")
let l = [[1, 2, 3], [15, 6, 8]]

console.log(Array.from(d)[0])

console.log("--------------")
console.log(c.slice(7,9))
//


