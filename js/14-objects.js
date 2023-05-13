const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team1 = players;
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

const person = {
    age: 100,
    name: 'Wes',
    social: {
        facebook: 'wesbos.developer',
        twitter: '@wesbos',
    },
};
const dev1 = Object.assign({}, person);
const dev2 = Object.assign({}, person, { age: 88 });
const dev3 = { ...person };
const dev4 = JSON.parse(JSON.stringify(person));

players[0] = 'Bob';
console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);
console.log(team5);

person.name = 'Bob';
person.social.twitter = '@bob';
console.log(dev1);
console.log(dev2);
console.log(dev3);
console.log(dev4);
