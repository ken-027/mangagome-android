var str = 'who_s_your_daddy/'

console.log(str.indexOf('/'))
str = str.substring(0, str.indexOf('/'))
console.log(str)
str = str.replace(/_/g, ' ')
console.log(str)
str = str
console.log(str.toUpperCase())
