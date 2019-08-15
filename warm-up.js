console.clear();

console.log('Exercise 1:');
const apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`);


console.log('\nExercise 2:');
const materials = ['wood', 'metal', 'stone'];
const words = {
    'elephant': "The world's largest land mammal.",
    'school': 'A place of learning.',
    'ice cream': 'A delicious milk-based dessert.'
}


console.log('\nExercise 3:');
let num = 16;
if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10.`);
}


console.log('\nExercise 4:');
for (let x = 0; x < 10; x++) {
    console.log('Doing the same thing over and over.');
}


console.log('\nExercise 5:');
const base = 5;
for (let num = 0; num < 20; num++) {
    console.log(num + base);
}


console.log('\nExercise 6:');
let total = 0;

for (let num = 0; num < 100; num++) {
    total += num;
}

console.log(total);


console.log('\nExercise 7:');
for (let height = 3; height < 15; height++) {
    if (height > 9) {
        console.log('You can get on the rollercoaster!');
    } else {
        console.log('You are too short to ride this rollercoaster.');
    }
}


console.log('\nExercise 8:');
const containers = ['purse', 'wallet', 'backback'];
for (container of containers) {
    console.log(container)
}


console.log('\nExercise 9:');
function hello_world() {
    return 'Hello world!';
}

hello_world();


console.log('\nExercise 10:');
function add(first_num, second_num) {
    return first_num + second_num;
}

const amount = add(5, 7);
console.log(amount);
