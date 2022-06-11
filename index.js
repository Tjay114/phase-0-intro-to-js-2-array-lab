// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop('Ralph')
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}
const appendCat = () => {
    let cats1 = [...cats];
    cats1.push('Broom')
    return cats1;
}

const prependCat = () => {
    let cats2 = [...cats];
        cats2.unshift('Arnold');
        return cats2;
}

const removeLastCat = () => {
    let cats1 = [...cats];
    cats1.splice(cats.length-1);
    return cats1;
}
const removeFirstCat = () => {
    let cats1 = [...cats];
    cats1.splice(0,1);
    return cats1;
}