const initData = data => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const cardId = urlParams.get('id')

  const cardInfo = data.find(card => card.id == cardId)
  if (cardInfo) {
    const cardImg = `<img class="" src="${cardInfo.image_url}" alt="card image" />`
    document.querySelector('.card-img').insertAdjacentHTML('beforeend', cardImg)

    let cardName = ''
    if (cardInfo.card_id != null) cardName = `${cardInfo.card_id}. ${cardInfo.name}`
    else cardName = `${cardInfo.name}`

    document.getElementById('card-name').innerText = cardName
    document.getElementById('forward-meaning').innerText = `${cardInfo.forward}.`
    document.getElementById('reverse-meaning').innerText = `${cardInfo.reverse}.`
  }
}

document.getElementById('back-btn').addEventListener('click', () => {
  console.log('back')
  window.location = './index.html'
})

initData(majorArcana)
initData(wands)
initData(pentacles)
initData(swords)
initData(cups)
