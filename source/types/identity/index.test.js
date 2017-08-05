import Identity from './'

test('Identity.is(): should create an identity instance', () => {
  expect(Identity.is(Identity.unit(1))).toBe(true)
  expect(Identity.is(Identity.unit('a'))).toBe(true)
  expect(Identity.is(Identity.unit([]))).toBe(true)
  expect(Identity.is(Identity.unit({}))).toBe(true)
})

test('Identity.bind(): should create an identity instance', () => {
  expect(Identity.unit(1).bind(x => x + 1)).toEqual(2)
  expect(Identity.unit('a').bind(x => x.concat('b'))).toEqual('ab')
  expect(Identity.unit([1]).bind(([x]) => [x + 1])).toEqual([2])
})

test('Identity.toString(): should create an identity instance', () => {
  expect(Identity.unit(1).toString()).toBe(`Identity(${(1).toString()})`)
  expect(Identity.unit('a').toString()).toBe(`Identity(${'a'.toString()})`)
  expect(Identity.unit([1, 2]).toString()).toBe(`Identity(${[1, 2].toString()})`)
  expect(Identity.unit({}).toString()).toBe(`Identity(${{}.toString()})`)
})

test('Identity.toJSON(): should create an identity instance', () => {
  expect(Identity.unit(1).toJSON()).toBe(1)
  expect(Identity.unit('a').toJSON()).toBe('a')
  expect(Identity.unit([1, 2]).toJSON()).toEqual([1, 2])
  expect(Identity.unit({}).toJSON()).toEqual({})
})
