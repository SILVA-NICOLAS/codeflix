function last(str = '', len = 1) {
  let result = ''

  for (let i = str.length; i >= str.length - len; i--) {
    if (str[i] === undefined) {
      continue
    }

    result = str[i] + result
  }

  return result
}

console.log(last('chopper'))
console.log(last('chopper', 2))
console.log(last('tony', 5))