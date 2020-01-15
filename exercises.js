//write a function that takes two numbers and returns the 
//maximum of the two

function functionMax(firstNum, secondNum){
    if (firstNum>secondNum)
        return firstNum;
    else if (secondNum>firstNum)
        return secondNum;
}


console.log(functionMax(5,7));

//the function above can be rewritten as 

function functionMax2(firstNum, secondNum){
    return (firstNum>secondNum)?firstNum:secondNum;

}

//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by 3 and 5 => FizzBuzz
//divisible by 3 or 5 => input
//not a number => 'not a number'

function fizzBuzz(input){
    if (typeof(input) !== 'number') return 'Not a number';
    if ((input % 3)=== 0) return 'Fizz';
    if ((input % 5)=== 0) return 'Buzz';
    if ((input % 3=== 0) && (input % 5 === 0)) return 'FizzBuzz';
    if ((input % 3=== 0) || (input % 5 === 0)) return 'input';
    
}

console.log(fizzBuzz(15));

//execise 4 Demerits point
//speed limit = 70
//evry 5km => 1pt
// if points are up to 12 = Licence suspended
//use the js function Math.floor

console.log(checkSpeed(130));

function checkSpeed(speed){
    const speedLimit=70;
    const km =5;

    let points=Math.floor((speed-speedLimit)/km);
    if (points < 1) return 'Ok';
    if ((points >= 1) && (points<12)) return points;
    if (points >=12) return 'Licence suspended';


}

//exc 5 even and odd numbers
showNumbers(10);
function showNumbers(limit){
    for (let i =1; i<=limit; i++)
    {
        if (i % 2 ===0)
            console.log(i, 'Even');
        else
            console.log(i, 'Odd');
    }
}

//exc 6 count truthy
console.log(countTruthy([1,2,0,6,"mo"]))
function countTruthy(Arrayinput){
    let counter=0
    for (let input of Arrayinput)
    {
        if (input)
        {
            counter+=1;
        }
    }
    
    return counter;

}

//exc 7 string properties

const movie = {
    name: 'a',
    rating: 45,
    producer: 'b'
}
stringProperties(movie);
function stringProperties(obj){
    for (let key in obj)
    {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

//exc  8 sum of multiples of 3 and 5
sum(10);
function sum(limit){
    
    let sum = 0;
    for (let i=1; i<=limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum+=i;
        
    console.log(sum);
}

//exc 9 calculate grade
//1 - 59 = F
//60 - 69 = D
//70 - 79 = C
// 80 - 89 = B
// 90 - 100 = A
 let scores = [50, 80, 80]
 console.log(calculateAverage(scores));
function calculateGrade(marks){
    const average = calculateAverage(marks);
        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
            return 'A';
}
function calculateAverage(array){
    let sum = 0;
    
    for (let key of array){
        sum +=key;
    }
    return average = sum/array.length;
    
}
// exc 10 show stars
showStars(5);
function showStars(count){
    for (let row = 1; row<=count; row++){
        let pattern='';
        for (let i=0; i < row; i++){
            pattern+='*';
        }
        console.log(pattern);
    }
}
//exc 11 prime numbers
showPrimes(20);
function showPrimes(limit){
    for (let number=2; number<=limit; number++){
        let isPrime = true;
        for (let factor = 2; factor<number; factor++){
            if (number % factor === 0){
                isPrime = false;
                break;
            }

        }
       if (isPrime) console.log(number);
    }
}

//objects 
//constructor objects and factory function
const Circle = {
    radius : 1,
    draw : function(){}
    
}
Circle.color = 'yellow';
delete Circle.draw;
console.log(Circle);
const another = Function()

const date1 = new Date()