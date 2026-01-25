//for loop
for(let a=0; a<10; a++){
    console.log(a);
}

//for in 
const numbers = [45, 4, 9, 16, 25];
for(let c in numbers){
    console.log(c);
    console.log(numbers[c]);
}

//for of
const cars= ["BMW", "Volvo", "Mini"];
for (let car of cars){
    console.log(car);
}

const word= "The quick brown fox";
for (let letter of word){
    console.log(letter);
}

//while loop
let b=20;

while (b < 30){
    console.log(b);
    b++;
}

// use for loop to compute the sum of 1-20
let sum=0;

for(let a=1; a<=20; a++){
    console.log(a);
    sum+=a;
}
console.log("The sum is", sum);

//factorial
let num =5;
let product = num;

while (num > 1){
    console.log(num);
    product *= (num-1);
    num--;
}
console.log("The Factorial of 5 is", product)