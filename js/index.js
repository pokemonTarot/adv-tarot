const initData = cardData => {
  const container = document.getElementById('card-list')

  cardData.map(item => {
    const cardItem = document.createElement('div')

    cardItem.className = 'card-item'
    cardItem.dataset.id = item.id

    let itemContent = ''

    if (item.card_id == null) {
      itemContent = `
        <div class="card">
          <div class="front">
            <img class="card-img" src="${item.image_url}" alt="card image" />
          </div>
          <div class="back">
            <h3>${item.name}</h3>
          </div>
        </div>
      `
    } else {
      itemContent = `
        <div class="card">
          <div class="front">
            <img class="card-img" src="${item.image_url}" alt="card image" />
          </div>
          <div class="back">
            <h3>${item.card_id} </br> ${item.name}</h3>
          </div>
        </div>
      `
    }

    cardItem.addEventListener('click', () => {
      window.location = `./detail.html?id=${item.id}`
    })

    cardItem.insertAdjacentHTML('beforeend', itemContent)

    if (cardItem) container.appendChild(cardItem)
  })
}

document.getElementById('search').addEventListener('keyup', e => {
  if (e.target.value.length < 1) {
    document.getElementById('card-list').innerHTML = ''
    initData(majorArcana)
    initData(wands)
    initData(pentacles)
    initData(swords)
    initData(cups)
  } else {
    const searchMajor = majorArcana.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    const searchWands = wands.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    const searchPentacles = pentacles.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    const searchSwords = swords.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    const searchCups = cups.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    document.getElementById('card-list').innerHTML = ''
    if (
      searchMajor.length < 1 &&
      searchWands.length < 1 &&
      searchPentacles.length < 1 &&
      searchSwords.length < 1 &&
      searchCups.length < 1
    ) {
      document.getElementById('card-list').innerHTML = '<h3 class="no-result">No result found</h3>'
    } else {
      initData(searchMajor)
      initData(searchWands)
      initData(searchPentacles)
      initData(searchSwords)
      initData(searchCups)
    }
  }
})

document.getElementById('card-list').innerHTML = ''
initData(majorArcana)
initData(wands)
initData(pentacles)
initData(swords)
initData(cups)

document.getElementById('all').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('all').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(majorArcana)
  initData(wands)
  initData(pentacles)
  initData(swords)
  initData(cups)
})

document.getElementById('major').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('major').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(majorArcana)
})

document.getElementById('wands').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('wands').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(wands)
})

document.getElementById('pentacles').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('pentacles').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(pentacles)
})

document.getElementById('swords').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('swords').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(swords)
})

document.getElementById('cups').addEventListener('click', () => {
  document.querySelector('.menu-active').classList.remove('menu-active')
  document.getElementById('cups').classList.add('menu-active')
  document.getElementById('card-list').innerHTML = ''
  initData(cups)
})
