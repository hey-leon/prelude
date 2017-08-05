
/**
 * curries a func of any arg length
 *
 * @param {Function} fn to curry
 * @param {any[]} current args of the fn
 */
export const curry = (fn, c=[]) =>
  (...a) => (a.length + c.length) >= fn.length
    ? fn(...c, ...a)
    : curry(fn, a)



/**
 * rtl function composition
 *
 * @param {Function[]} fns to be composed
 */
export const compose = (...fns) =>
  a => fns.reduceRight((acc, f) =>
    f(acc),
    a
  )



/**
 * flips the params of a binary fn
 *
 * @param {Function} function flip params of
 */
export const flip = (fn) => (a, b) =>
  fn(b, a)



/**
 * ltr function composition
 *
 * @param {Function[]} fns to be composed
 */
export const pipe = (...fns) =>
  a => fns.reduce((acc, f) =>
    f(acc),
    a
  )
