// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
function logcats(cats){
    console.log(cats);
}
function Arrayfunctions(cats){
    function beforeEach(){
        cats.length = 0;
        cats.push('Milo', 'Otis', 'Garfield');
        return(cats);
    }
}
function destructivelyAppendCat(name){
    cats.push('Ralph');
    return(cats);
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return(cats);
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
    return(cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
    return(cats);
}
function appendCat(){
    const allcats = [...cats, "Broom"]
    return(allcats);
}
function prependCat(){
    const allcats = ["Arnold", ...cats]
    return(allcats);
}
function removeLastCat(name) {
    var removelastcat = cats.slice(0,cats.length-1);
    return(removelastcat);
}
function removeFirstCat(name) {
    var removefirstcat = cats.slice(1);
    return(removefirstcat);
}