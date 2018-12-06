// callback function by parameter
// Example-1
function one(name){
    return 'hello ' + name;
}
console.log('1. Normal function : ' + one('masud'));

function two(name, callback){
    return callback(name);
}
console.log('2. callback function by parameter in example-1 : ' + two('alex', one))

// Example-2

let arr = [4, 5, 3, 23, 21];
var add = 0;
arr.forEach(element=>{
    add += element; 
})

console.log('3. callback function by parameter in example-2 : ' + add);

// callback function by return a function
// Example-1
function base(n){
    return function power(p){
        var result = 1;
        for(var i=0; i<n; i++){
            result *= p;
        }
        return result;
    };
}
var result = base(2)(4);
console.log('4. callback function by return a function is result : ' + result);

// Example-2

function another(name, copyOne){
    return copyOne(name);
}
let call = another('David', one);  //[one is a normal function which i declare up]
console.log(call);

another('Jonsson', function(name){
    console.log('Hi, ' + name);
    
})

// example-3

var me = {
    name  : 'masud',
    age   : 24,
    email : "masudul@pingpong.se"
}

// Call back with ES6

// var callback = (person, func)=> {
//     func(person.email);
//     if(person.age>=24){
//         console.log('Age: ', person.age);
//         }
// }

// callback(me, (email)=>{
// console.log(email);

// })

//Same thing with ES5

function cal(person, func){
     func(person.email);
}

cal(me, function(email){
console.log('person Email: ', email);

})

// With more parameter


















