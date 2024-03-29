const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice nice nice', id: 542328 },
];

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
const comment = comments.find(comment => comment.id === 823423);
const index = comments.findIndex(comment => comment.id === 823423);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];

document.body.innerText += `${JSON.stringify({ isAdult })}\n\n`;
document.body.innerText += `${JSON.stringify({ allAdults })}\n\n`;
document.body.innerText += `${JSON.stringify(comment)}\n\n`;
document.body.innerText += `${JSON.stringify({ index })}\n\n`;
document.body.innerText += `${JSON.stringify(newComments)}\n\n`;
