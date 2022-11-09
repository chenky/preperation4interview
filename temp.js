function testContinue () {
  const a = [1, 2, 3, 4, 5]
  const b = [1, 7, 8, 9, 10]
  OUTER:
  for (var i in a) {
    for (var j in b) {
      if (a[i] === b[j]) {
        continue OUTER
      }
      console.log(a[i], b[j], " in b list")
    }
    console.log(a[i] + " not in the list")
  }
}
// testContinue()

function testBreak () {
  const a = [1, 2, 3, 4, 5]
  const b = [1, 7, 8, 9, 10]
  OUTER:
  for (var i in a) {
    for (var j in b) {
      if (a[i] === b[j]) {
        break OUTER
      }
      console.log(a[i], b[j], " in b list")
    }
    console.log(a[i] + " not in the list")
  }
  console.log('finish')
}
testBreak()