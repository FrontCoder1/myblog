function computePage (num, pageNum, arr) {
  let mid = 5
  let left = mid - num / 2
  let right = mid + num / 2
  left = left < 1 ? 1 : left
  left = right > pageNum ? pageNum - 10 : left
  return arr.slice(left, num)
}
let arr = []
for (let i = 0; i < 20; i++) {
  arr.push(i + 1)
}
console.log(computePage(9, 20, arr))
