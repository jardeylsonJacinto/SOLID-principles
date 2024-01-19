import { Persistency } from './persistency'

const creatSut = () => {
  return new Persistency()
}

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    const sut = creatSut()
    expect(sut.saveOrder()).toBeUndefined()
  })
  it('should call console.log once', () => {
    const sut = creatSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
  it('should call console.log with "pedido salvo com sucesso..."', () => {
    const sut = creatSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...')
  })
})
