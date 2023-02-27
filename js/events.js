import {
  cards,
  cardTree,
  cardRain,
  cardHouse,
  cardFire,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus
} from './elements.js'

import {
  addFiveMinutes,
  countdown,
  resetTimer,
  subtractFiveMinutes
} from './timer.js'

import {
  resetCards,
  selectCardTree,
  selectCardRain,
  selectCardHouse,
  selectCardFire,
  cardTreePlaySound,
  cardRainPlaySound,
  cardHousePlaySound,
  cardFirePlaySound,
  pauseAllSounds
} from './cards.js'

export default function ({ sound }) {
  buttonPlay.addEventListener('click', function () {
    sound.buttonPress()
    countdown()
  })

  buttonStop.addEventListener('click', function () {
    sound.buttonPress()
    resetTimer()
    resetCards()
    pauseAllSounds()
  })

  buttonPlus.addEventListener('click', function () {
    sound.buttonPress()
    addFiveMinutes()
  })

  buttonMinus.addEventListener('click', function () {
    sound.buttonPress()
    subtractFiveMinutes()
  })

  for (let card of cards) {
    card.addEventListener('click', function () {
      let selectedCard = document.querySelector('.selected')

      if (card === cardTree) {
        selectCardTree()
        cardTreePlaySound()
      }

      if (card === cardRain) {
        selectCardRain()
        cardRainPlaySound()
      }

      if (card === cardHouse) {
        selectCardHouse()
        cardHousePlaySound()
      }

      if (card === cardFire) {
        selectCardFire()
        cardFirePlaySound()
      }

      if (selectedCard) {
        pauseAllSounds()
      }
    })
  }
}
