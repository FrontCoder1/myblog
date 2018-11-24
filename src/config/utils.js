
export default {
  throttle (fn, delay = 250) {
    let last
    let timer = null
    return function () {
      let context = this
      let args = arguments
      // console.log(this)
      let now = +new Date()
      if (last && now < last + delay) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  },
  debounce (fn) {
    let timer = null
    return function () {
      let context = this
      let args = arguments
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, 300)
    }
  },
  setStorage (query) {
    const storage = window.localStorage
    for (let key in query) {
      storage[key] = query[key]
    }
  },
  getStorage (key) {
    return window.localStorage.getItem(key)
  },
  removeItem (query) {
    window.localStorage.removeItem(query)
  }
}
