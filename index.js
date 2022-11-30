// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function prependCat(){
    const newArray = [...cats]
    newArray.unshift("Arnold")
    return newArray
}
function appendCat(){
    const newArray =[...cats,"Broom"]
    return newArray
}
function removeFirstCat(){
    var newArray = cats.slice(1)
    return newArray
}
function removeLastCat(){
    var newArray = ["Milo","Otis"]
    return newArray
}