function isUpperCase(code) {
    return (code >= 65 && code <= 90)
}

function isLowerCase(code) {
    return (code >= 97 && code <= 122)
}

function swapCase(str = '') {
    let result = ''

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (isUpperCase(code)) {
            result += String.fromCharCode(code + 32)
        } else if (isLowerCase(code)) {
            result += String.fromCharCode(code - 32)
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))