import {curry} from './reflectives'

/**
 *
 */
// export const ap =


/**
 * binds a monadic function to a monad
 * @param {any => Monad} to apply to the monads value
 * @param {Monad} monad to apply monadic function to
 */
export const bind = curry((fn, m) =>
  m.bind(fn)
)


/**
 * maps a pure function to a monad
 * @param {any => any} to apply to the monads value
 * @param {Monad} monad to apply fn to
 */
export const map = curry((fn, m) =>
  m.map(fn)
)


/**
 * returns the monad or some other monad
 * @param {Monad} monad to accept if the Monad#orElse
 * implementation says so.
 * @param {Monad} monad to call orElse on
 */
export const orElse = curry((m1, m2) =>
  m1.orElse(m2)
)


/**
 * returns the value of a monad or some other value.
 *
 * @param {any} value to accept if the Monad#orSome
 * implementation says so
 * @param {Monad} monad to call orSome on
 */
export const orSome = curry((value, m) =>
  m.orSome(v)
)


