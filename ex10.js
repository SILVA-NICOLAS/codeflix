function first(str = '', len = 1) {
  let result = ''

  if (len > str.length) {
    return str
  }

  for (let i = 0; i < len; i++) {
    result += str[i]
  }

  return result
}

console.log(first('chopper'))
console.log(first('chopper', 2))
console.log(first('tony', 5))