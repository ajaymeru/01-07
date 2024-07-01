function findzeo(arr) {
    let normalnum = arr.filter(num => num !== 0);
    let zero = Array(arr.length - normalnum.length).fill(0);
    return normalnum.concat(zero);
}

let arr = [4, 5, 0, 1, 9, 0, 5, 0];
console.log(findzeo(arr)); 
