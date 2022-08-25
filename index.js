const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats

}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats

}

function appendCat(name) {
    var newArray = [...cats,name];
    return newArray
}

function prependCat(name) {
    var newArray = [name, ...cats];
    return newArray

}

function removeLastCat(name) {
    var newArray = cats.slice(0,cats.length-1);
    return newArray

}

function removeFirstCat(name) {
    var newArray = cats.slice(1)
    return newArray
}