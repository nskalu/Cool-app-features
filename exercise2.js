//exc 1
const address = {
    city:'Kosofe',
    street:'25 Sosanya',
    zipCode : '100242'
}

function showAddress(object){
    for (let key in object)
        console.log(key, object[key]);
}

showAddress(address);

//exc 2 factory and constructor objects
//factory
function createAddress1(city,street,zipcode){
   return{ city,
    street,
    zipcode
   };
}
const obj1 = createAddress1('Ikeja','25 Jobi Fele','100243') 
console.log(obj1)
//constructor
function createAddress(city,street,zipcode){
    this.city = city,
    this.street = street,
    this.zipCode = zipcode
}
const obj = new createAddress('Kosofe','25 Sosanya','100244')
console.log(obj)
//exc 4 blog post
const blogObject = {
    'title':'Intro to html',
    'author':'John Okafor',
    'body':'HTML is a markup language for creating websites',
    'views':50,
    'comments':[{
        'author':'Ngozi Kalu',
        'body': 'Great blog post'
    }],
    'IsLive': true
}

console.log(blogObject);
//exc 5 array from numbers

console.log(arrayFromRange(1,10));
function arrayFromRange(min, max){
    const range =[];
    for (let i = min;  i<=max; i++)
        range.push(i);
        return range;
}
const array = [1,2,3,4]
console.log(Includes(array, 4));
//exc 6 includes
function Includes(array, searchElement){
    return array.includes(searchElement)

}
//exc 6 includes
const array2 = [1,2,3,4]
console.log(Except(array2, [4,3,2]));

function Except(array3, excluded){
    
    const output = [];
    for (let key of array3)
        if (!excluded.includes(key))
            output.push(key);

    return output;

}

//exc 7 moving an element
const numbers = [1,2,3,4]
console.log(move(numbers, 1,3));

function move(array, index, offset){
    const newIndex = index + offset;
    if (numbers.length <= newIndex || newIndex < 0)
        return 'Invalid offset'
    const copy = array.slice()
    const value = copy.splice(index, 1);
    
    copy.splice(newIndex,0,value);
    return copy;
}

//exc 7 count occurencves
const arr = [1,2,3,4,3,3,2]
console.log(countOccurence(arr,2));

function countOccurence(array, searchElement){
  let count = 0
  for (let item of array)
    if (item===searchElement)
        count += 1
    return count;
}
 
//exc 7 count occurencves
const set = [1,2,3,4,1,5]
console.log(getMax(set));

function getMax(array){
//   let max =0;
//   for (let item of array)
//     if (item > max)
//         max = item;
//     return max;

    return array.reduce((accumulator, currentValue) => (currentValue > accumulator) ? currentValue : accumulator
         
    )
}

const movies = [
    {title: 'a', year : 2018, rating: 4.5},
    {title: 'b', year : 2018, rating: 4.7},
    {title: 'c', year : 2018, rating: 3},
    {title: 'd', year : 2017, rating: 4.5}
];
 console.log(sortMovies(movies));
function sortMovies(movies){
    const output = []
    for (let movie of movies)
    {
        if (movie.rating>4 && movie.year===2018)
            output.push(movie)
    }
   return output.sort(item => {
      
        //if (item.rating > 4)
    })
}
console.log(sum(1,2))
function sum(a, b){
   
    console.log(arguments);
    return a + b;
}
//8 sum of arguments
sumUp([1,2,3,4,5])
function sumUp(...args){
    let total = 0;
    if (Array.isArray(args))
        for (let item of args)
            console.log(total += item);
    for (let item of arguments)
        total+=item;
    console.log(total)
}

let v = 1;
 function f1(){ 
     debugger;
     let v = 2; 
     return v;
    };
  const f =  function f2(){ 
      debugger;
      return f1()
    }
    console.log(f)
