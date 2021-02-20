const ongdev = { name: "Ong Dev", age: 25}
const nyongdev = { name: "NY Ong Dev", age: 25}

// Bad
console.log(ongdev);
console.log(nyongdev);

// Good

console.log({ongdev, nyongdev})
console.log("%c Ahihi", "color: blue;")

console.table([ongdev,nyongdev])

console.time('timer')

for(let i =0; i< 1000000; i++){
    //
}

console.timeEnd('timer')

const test = () => {
    console.trace('test trace')
};

test()