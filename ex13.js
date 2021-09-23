function slice(str = '', start, endopt = str.length) {
    let result = ''

    let i = start
    if (start < 0) {
        i = str.length + start
    }


    for (i; i < endopt; i++) {
        result += str[i]
    }

    return result
}

console.log(slice('chOpper', 1))
console.log(slice('chOpper', -4))
console.log(slice('chOpper', 1, 4))