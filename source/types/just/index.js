/**
 * @flow
 *
 * maybe monad is useful for when a value is not known
 * to exist at runtime.
 *
 */
export default class Just<T> {
  static of = <A>(v: A): Just<A> =>
    new Just(v)

  m: T

  constructor(just: T) {
    this.m = just
  }

  bind = <A>(fn: T => Just<A>): Just<A> =>
    fn(this.m)

  map = <A>(fn: T => A): Just<A> =>
    Just.of(fn(this.m))

  orElse = <A>(just: Just<A>): Just<A> | Just<T> =>
    this.m == null ? just : this

  orSome = <B>(value: B): B | T =>
    this.m == null ? value : this.m

  takeLeft = <A>(just: Just<A>): Just<T> =>
    this

  takeRight = <A>(just: Just<A>): Just<A> =>
    just

  toJSON = (): T =>
    this.m

  toString = (): string =>
    this.m == null
      ? `Just(${String(this.m)})`
      : 'Nothing'

}
