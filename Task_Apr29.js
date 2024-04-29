/*1) Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz." */

for(i=1;i<=100;i++){
    if(i%15==0){
        console.log(`FizzBuzz`);
    }
    
    else if(i%5==0){
        console.log(`Buzz`);
    }
   
    else if(i%3==0){
        console.log(`Fizz`);
    }
    else{
        console.log(i);
    }
}

console.log(`__________________________________________`);
console.log(`__________________________________________`);

/*2) Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]   */

str = `dog`
str1 = []

for(i=0;i<str.length;i++){
    for(j=i+1;j<=str.length;j++){
        str1.push(str.slice(i,j))
        // console.log(str1);
    }
}

console.log(str1);
console.log(`__________________________________________`);
console.log(`__________________________________________`);


// 3) Sample data with nested arrays 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

console.log(`1) Find the sum of all numbers in the nested arrays.`);  
data1 = data.flat()
sum = data1.reduce((n1,n2)=>n1+n2,0)
console.log(sum);


console.log(`__________________________________________`);


console.log(`2) Find the maximum number in the entire nested array.`);
maxno = data1.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxno);

console.log(`__________________________________________`);

console.log(`3) Find the average of all numbers in the nested arrays.`);
avg = sum/data1.length
console.log(avg);

console.log(`__________________________________________`);

console.log(` 4) Find square of each number in the nested arrays.`);
sq = data.map(n1=>n1.map(n2=>n2**2))
console.log(sq);

console.log(`__________________________________________`);

console.log(` 5) Find all even numbers from the nested arrays.`);
even = data1.filter(n1=>n1%2==0)
console.log(even);

console.log(`__________________________________________`);

console.log(`6) Use reduceRight to concatenate all nested arrays in reverse order.`);

concat = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(concat);
console.log(`__________________________________________`);

console.log(`7) create a flattened array from the nested arrays.`);
flatarray = data.flat()
console.log(flatarray);
console.log(`__________________________________________`);

console.log(`8) check if the number 5 is present in any of the nested arrays`);
check = data.some(n1=>n1.includes(5))
console.log(check);
console.log(`__________________________________________`);

console.log(`9) create a single string of all numbers separated by a comma. `);
str = ''
for(i of flatarray){
    str += i +','
}
console.log(str);
console.log(`__________________________________________`);

console.log(` 10) Print each number in the nested arrays.`);
data.map(n1=>n1.map(n2=>n2).forEach(item=>console.log(item)))
console.log(`__________________________________________`);

console.log(`11) Sort the nested arrays based on the sum of their numbers.`);

console.log(`__________________________________________`);

console.log(`12) Use map to get the product of the first and last number in each nested array.`);
console.log(`__________________________________________`);

console.log(`13) Use filter to get all arrays where the sum of numbers is greater than 15.`);
console.log(`__________________________________________`);

console.log(`14) Use reduce to find the product of all numbers in the nested arrays.`);
console.log(`__________________________________________`);

console.log(` 15) create an array of square roots of all numbers in the nested arrays.`);
console.log(`__________________________________________`);

console.log(`16) Use includes to check if the number 20 is present in any of the nested arrays.`);
console.log(`__________________________________________`);

console.log(`17) Use map to convert each number in the nested arrays to its string representation.`);
console.log(`__________________________________________`);

console.log(`18) Use filter to get all arrays where the length is greater than 2`);
console.log(`__________________________________________`);

console.log(`19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.`);
console.log(`__________________________________________`);

console.log(` 20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.`);
console.log(`__________________________________________`);

console.log(`21) Sort the nested arrays based on the length of each array.`);
console.log(`__________________________________________`);

console.log(`22) Use map to convert each number in the nested arrays to its negative.`);
console.log(`__________________________________________`);

console.log(`23) Use filter to get all arrays where the last number is greater than 10.`);
console.log(`__________________________________________`);

console.log(` 24) Use reduceRight to get the difference between consecutive numbers in each nested array.`);
console.log(`__________________________________________`);

console.log(`25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.`);
console.log(`__________________________________________`);

console.log(` 26) Use includes to check if the number 15 is present in any of the nested arrays.`);
console.log(`__________________________________________`);

console.log(`27) Use map to convert each number in the nested arrays to its absolute value.`);
console.log(`__________________________________________`);

console.log(`28) Use filter to get all arrays where the first number is less than 5.`);
console.log(`__________________________________________`);

console.log(`29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.`);
console.log(`__________________________________________`);

console.log(`30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.`);
console.log(`__________________________________________`);
console.log(`__________________________________________`);
