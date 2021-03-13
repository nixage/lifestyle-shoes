function debounce(fn, time = 300) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout( () => {
      // eslint-disable-next-line no-invalid-this
      fn.apply(this, args)
    }, time)
  }
}