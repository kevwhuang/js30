const dogs = [
    { name: 'Hugo', age: 8 },
    { name: 'Snickers', age: 2 },
];

console.clear();
console.log('Hello.');
console.log('Hello, I am a %s string!', '💩');
console.log('%cI am some great text.', 'font-size: 2rem;');
console.dir(document.body);
console.table(dogs);

console.info('Crocodiles eat 3-4 people per year.');
console.warn('Oh noooooo!');
console.error('Shoot!');
console.assert(1 === 2, 'That is wrong!');

console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`);
});

console.time('Fetch data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json());
console.timeEnd('Fetch data');
