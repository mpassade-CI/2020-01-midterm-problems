/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(num){
  if (num%3!==0 && num%5!==0){
    return num
  }
  else if (num%3===0 && num%5!==0){
    return 'Fizz'
  }
  else if (num%3!==0 && num%5===0){
    return 'Buzz'
  }
  else {
    return 'FizzBuzz'
  }
}

function getMiddleLetters(str){
  if (str.length%2===0){
    return str.slice((str.length/2)-1, (str.length/2)+1)
  }
  else {
    return str.slice((str.length/2)-1, (str.length/2)+2)
  }
}

function getNextLetter(str){
  let x = 'abcdefghijklmnopqrstuvwxyz'
  if (str===x[x.length-1]){
    return x[0]
  }
  else {
    return x[(x.indexOf(str))+1]
  }
}

function getAverage(arr){
  let x = 0
  for (const num of arr){
    x += num
  }
  return x/arr.length
}

function triStateAreaOnly(arr){
  const x = []
  for (const str of arr){
    if (str.endsWith('NY') || str.endsWith('NJ') || str.endsWith('CT')){
      x.push(str)
    }
  }
  return x
}

function removeTrolls(arr){
  let x = 'abcdefghijklmnopqrstuvwxyz'
  const y = []
  for (let i=0; i<arr.length; i++){
    let z = arr[i]
    for (let i2=0; i2<z.length && !y.includes(z); i2++){
      if (x.includes(z[i2])){
        y.push(z)
      }
    }
  }
  return y
}

function cipher(str){
  let x = ''
  for (const letter of str){
    x += getNextLetter(letter)
  }
  return x
}

function addToMultiDigitNumbers(num, arr){
  const x = []
  let y = 0
  for (const number of arr){
    if ((number.toString()).length===1){
      x.push(number)
    }
    else {
    y = num + number
    x.push(y)
    }
  }
  return x
}

function hyphenateNames(arr){
  const x = []
  for (const names of arr){
    let y = names
    const z = y.split(' ')
    y = ''
    for (let i=0; i<z.length; i++){
      if (i===z.length-2){
        y += z[i] + '-'
      }
      else if (i===z.length-1){
        y += z[i]
      }
      else {
        y += z[i] + ' '
      }
    }
    y
    x.push(y)
  }
  return x
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
