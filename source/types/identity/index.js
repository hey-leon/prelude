/**
 * @flow
 *
 * identity monad is the base of all
 * monads, all monads must implement
 * these interfaces to be compatible
 * with the monadic operators.
 */

export default class Identity<T> {

  static of = <A>(value: A): Identity<A> =>
    new Identity(value)

  constructor(identity: T) {
    this.m = identity
  }

  m: T

  bind = <A>(fn: T => Identity<A>): Identity<A> =>
    fn(this.m)

  map = <A>(fn: T => A): Identity<A> =>
    Identity.of(fn(this.m))

  takeLeft = <A>(identity: Identity<A>): Identity<T> =>
    this

  takeRight = <A>(identity: Identity<A>): Identity<A> =>
    identity

  toJSON = (): T =>
    this.m

  toString = (): string =>
    `Identity(${String(this.m)})`

}
