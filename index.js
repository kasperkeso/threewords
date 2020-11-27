document.addEventListener('DOMContentLoaded', async () => {
  const threeWordsElement = document.getElementById('three-words')
  const generateButton = document.getElementById('generate-new-button')
  let threeWords = ''
  const words = await fetch('words.json')
    .then(res => res.json())
    .catch(err => { throw err })

  for (let index = 0; index < 3; index++) {
    word = words[Math.floor(Math.random() * (words.length - 0) + 0)]
    threeWords = `${threeWords}${word.charAt(0).toUpperCase() + word.slice(1)}`
  }

  threeWordsElement.textContent = threeWords

  generateButton.addEventListener('click', () => {
    threeWords = ''
    for (let index = 0; index < 3; index++) {
      word = words[Math.floor(Math.random() * (words.length - 1) + 0)]
      threeWords = `${threeWords}${word.charAt(0).toUpperCase() + word.slice(1)}`
    }
    threeWordsElement.textContent = threeWords
  })
})
