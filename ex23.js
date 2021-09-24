function trim(str = '', whitespaceopt = ' ') {
  let result = ''
  let start = 0
  let end = str.length - 1

  for (start; start < str.length; start++) {
    if (str[start] !== whitespaceopt) {
      break
    }
  }

  for (end; end > 0; end--) {
    if (str[end] !== whitespaceopt) {
      break
    }
  }

  for (let i = start; i <= end; i++) {
    result += str[i]
  }

  return result
}

console.log(trim(' Tony Tony Ch0pper '))
console.log(trim('--Tony Tony Ch0pper--', '-'))