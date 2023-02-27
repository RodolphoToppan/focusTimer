import { cardTree, cardRain, cardHouse, cardFire } from './elements.js'
import Sounds from './sounds.js'

const sound = Sounds()

export function resetCards() {
  cardTree.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardFire.classList.remove('selected')
}

export function selectCardTree() {
  cardTree.classList.toggle('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.remove('selected')
}

export function selectCardRain() {
  cardTree.classList.remove('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.toggle('selected')
}

export function selectCardHouse() {
  cardTree.classList.remove('selected')
  cardFire.classList.remove('selected')
  cardHouse.classList.toggle('selected')
  cardRain.classList.remove('selected')
}

export function selectCardFire() {
  cardTree.classList.remove('selected')
  cardFire.classList.toggle('selected')
  cardHouse.classList.remove('selected')
  cardRain.classList.remove('selected')
}

export function cardTreePlaySound() {
  sound.coffeeHouseAudio.pause()
  sound.rainAudio.pause()
  sound.fireAudio.pause()
  sound.forestAudio.play()
}

export function cardRainPlaySound() {
  sound.coffeeHouseAudio.pause()
  sound.fireAudio.pause()
  sound.forestAudio.pause()
  sound.rainAudio.play()
}

export function cardHousePlaySound() {
  sound.rainAudio.pause()
  sound.fireAudio.pause()
  sound.forestAudio.pause()
  sound.coffeeHouseAudio.play()
}

export function cardFirePlaySound() {
  sound.coffeeHouseAudio.pause()
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.play()
}

export function pauseAllSounds() {
  sound.coffeeHouseAudio.pause()
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
}
