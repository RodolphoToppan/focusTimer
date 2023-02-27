export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const forestAudio = new Audio('../sounds/forest.wav')
  const rainAudio = new Audio('../sounds/rain.wav')
  const fireAudio = new Audio('../sounds/fire.wav')
  const coffeeHouseAudio = new Audio('../sounds/coffeeHouse.wav')

  forestAudio.loop = true
  rainAudio.loop = true
  fireAudio.loop = true
  coffeeHouseAudio.loop = true

  function buttonPress() {
    buttonPressAudio.play()
  }

  function timesUp() {
    kitchenTimer.play()
  }

  return {
    buttonPress,
    timesUp,
    coffeeHouseAudio,
    forestAudio,
    rainAudio,
    fireAudio
  }
}
