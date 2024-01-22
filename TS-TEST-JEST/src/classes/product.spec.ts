import { Product } from './product'

const createSut = (name: string, price: number): Product => {
  return new Product(name, price)
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks())

  it('should have properties name and price', () => {
    const sut = createSut('celular', 4500)
    expect(sut).toHaveProperty('name', 'celular')
    expect(sut.price).toBeCloseTo(4500)
  })
})
