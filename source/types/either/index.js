/**
 * @flow
 *
 * either monad is useful for exception handling
 */

export default class Either<T> {
  static Right = <R>(val: R): Either<R> =>
    new Either({tag: 'R', val})

  static Left = <L>(val: L): Either<L> =>
    new Either({tag: 'L', val})

  m: Left<T> | Right<T>

  constructor(m: Left<T> | Right<T>) {
    this.m = m
  }

  bind = <A>(fn: T => Either<A>): Either<A> | Either<T> =>
    this.m.tag === 'R' ? fn(this.m.val) : this

  map = <A>(fn: T => A): Either<A> | Either<T> =>
    this.m.tag === 'R'
      ? Either.Right(fn(this.m.val))
      : this

  cata = <A, B>(fn1: T => A, fn2: T => B): A | B =>
    this.m.tag === 'R' ? fn2(this.m.val) : fn1(this.m.val)

  takeLeft = <A>(either: Either<A>): Either<T> =>
    this

  takeRight = <A>(either: Either<A>): Either<A> =>
    either

  toJSON = (): T =>
    this.m.val

  toString = (): string =>
    this.m.tag === 'R'
      ? `Either.Right(${String(this.m.val)})`
      : `Either.Left(${String(this.m.val)})`

}

type Right<T> = {|
  tag: 'R',
  val: T
|}

type Left<T> = {|
  tag: 'L',
  val: T
|}
