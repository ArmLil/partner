import React, { Component } from 'react'  // eslint-disable-line no-unused-vars

export default class Progress extends Component {
  constructor() {
    super()

    this.count = 0
    this.runningTimerId = null
    this.hidingTimerId = null

    this.state = {
      state: 'hidden',
    }
  }

  randomText() {
    const items = [
      'Why shouldn\'t you tell a secret on '
       + 'a farm? Because the potatoes have eyes and the corn has ears!',
      'Why did the scarecrow win the Nobel Prize? Because he was out standing in his field!',
      'What do you get when you cross a robot and a tractor? A transfarmer.',
      'What day do potatoes hate the most? Fry-day!',
      'Did you hear about the magic tractor? It turned into a field!',
      'What do farmers use to make crop circles? A Protractor',
      'What is a scarecrow\'s favorite fruit? Straw-berries!',
      'If a cow laughed really hard.... would milk come out of her nose?',
      'What kind of pigs know karate? Pork chops!',
      'What new crop did the farmer plant? Beets me!',
      'What grows under your nose? Tulips!',
      'What did the baby corn say to the mama corn? Where\'s popcorn?',
      'Why did the lamb call the police? He had been fleeced.',
      'Why was the cucumber mad? Because it was in a pickle!',
    ]

    return items[Math.floor(Math.random() * items.length)]
  }

  static show() {
    if (++this.count > 1) return
    clearTimeout(this.hidingTimerId)

    const el = document.getElementById('loader-60devs')
    el.dataset.state = 'hidden'
    el.offsetHeight // eslint-disable-line no-unused-expressions
    el.dataset.state = ''
    el.offsetHeight // eslint-disable-line no-unused-expressions
    el.dataset.state = 'running'
  }

  static hide() {
    if (--this.count > 0) return

    document.getElementById('loader-60devs').dataset.state = 'finishing'
    this.hidingTimerId = setTimeout(this.toHiddenState, 500)
  }

  static hideAll() {
    this.count = 1
    this.hide()
  }

  toHiddenState() { document.getElementById('loader-60devs').dataset.state = 'hidden' }
  static isVisible() { return document.getElementById('loader-60devs').dataset.state !== 'hidden' }

  render() {
    return (
      <div
        className='loader-60devs'
        id='loader-60devs'
        data-state={this.state.state}
      >
        <div className='loader-60devs-progress'></div>
        <div className='loader-progress-text'>
          {this.randomText()}
        </div>
      </div>
    )
  }
}
