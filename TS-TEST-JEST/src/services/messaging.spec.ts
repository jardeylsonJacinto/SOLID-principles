import { Messaging } from './messaging'

const creatSut = () => {
  return new Messaging()
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks())
  const msg = 'test'

  it('should return undefined', () => {
    const sut = creatSut()
    expect(sut.sendMessage(msg)).toBeUndefined()
  })
  it('should call console.log once', () => {
    const sut = creatSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage(msg)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = creatSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage(msg)
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', msg)
  })
})
