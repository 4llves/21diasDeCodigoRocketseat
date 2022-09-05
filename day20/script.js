const emojis = [
  { "emoji": "😀", },
  { "emoji": "😃", },
  { "emoji": "😄", },
  { "emoji": "😁", },
  { "emoji": "😆", },
  { "emoji": "😅", },
  { "emoji": "😂", },
  { "emoji": "🤣", },
  { "emoji": "😊", },
  { "emoji": "😇", },
  { "emoji": "🙂", },
  { "emoji": "🙃", },
  { "emoji": "😉", },
  { "emoji": "😌", },
  { "emoji": "😍", },
  { "emoji": "🥰", },
  { "emoji": "😘", },
  { "emoji": "😗", },
  { "emoji": "😙", },
  { "emoji": "😚", },
  { "emoji": "😋", },
  { "emoji": "😛", },
  { "emoji": "😝", },
  { "emoji": "😜", },
  { "emoji": "🤪", },
  { "emoji": "🤨", },
  { "emoji": "🧐", },
  { "emoji": "🤓", },
  { "emoji": "😎", },
  { "emoji": "🤩", },
  { "emoji": "🥳", },
  { "emoji": "😏", },
  { "emoji": "😒", },
  { "emoji": "😞", },
  { "emoji": "😔", },
  { "emoji": "😟", },
  { "emoji": "😕", },
  { "emoji": "🙁", },
  { "emoji": "☹️", },
  { "emoji": "😣", },
  { "emoji": "😖", },
  { "emoji": "😫", },
  { "emoji": "😩", },
  { "emoji": "🥺", },
  { "emoji": "😢", },
  { "emoji": "😭", },
  { "emoji": "😤", },
  { "emoji": "😠", },
  { "emoji": "😡", },
  { "emoji": "🤬", },
  { "emoji": "🤯", },
  { "emoji": "😳", },
  { "emoji": "🥵", },
  { "emoji": "🥶", },
  { "emoji": "😱", },
  { "emoji": "😨", },
  { "emoji": "😰", },
  { "emoji": "😥", },
  { "emoji": "😓", },
  { "emoji": "🤗", },
  { "emoji": "🤔", },
  { "emoji": "🤭", },
  { "emoji": "🤫", },
  { "emoji": "🤥", },
  { "emoji": "😶", },
  { "emoji": "😐", },
  { "emoji": "😑", },
  { "emoji": "😬", },
  { "emoji": "🙄", },
  { "emoji": "😯", },
  { "emoji": "😦", },
  { "emoji": "😧", },
  { "emoji": "😮", },
  { "emoji": "😲", },
  { "emoji": "🥱", },
  { "emoji": "😴", },
  { "emoji": "🤤", },
  { "emoji": "😪", },
  { "emoji": "😵", },
  { "emoji": "🤐", },
  { "emoji": "🥴", },
  { "emoji": "🤢", },
  { "emoji": "🤮", },
  { "emoji": "🤧", },
  { "emoji": "😷", },
  { "emoji": "🤒", },
  { "emoji": "🤕", },
  { "emoji": "🤑", },
  { "emoji": "🤠", },
  { "emoji": "😈", },
  { "emoji": "👿", },
  { "emoji": "👹", },
  { "emoji": "👺", },
  { "emoji": "🤡", },
  { "emoji": "💩", },
  { "emoji": "👻", },
  { "emoji": "💀", },
  { "emoji": "☠️", },
  { "emoji": "👽", },
  { "emoji": "👾", },
  { "emoji": "🤖", },
  { "emoji": "🎃", },
  { "emoji": "😺", },
  { "emoji": "😸", },
  { "emoji": "😹", },
  { "emoji": "😻", },
  { "emoji": "😼", },
  { "emoji": "😽", },
  { "emoji": "🙀", },
  { "emoji": "😿", },
  { "emoji": "😾", },
  { "emoji": "👋", },
  { "emoji": "🤚", },
  { "emoji": "🖐", },
  { "emoji": "✋", },
  { "emoji": "🖖", },
  { "emoji": "👌", },
  { "emoji": "🤏", },
  { "emoji": "✌️", },
  { "emoji": "🤞", },
  { "emoji": "🤟", },
  { "emoji": "🤘", },
  { "emoji": "🤙", },
  { "emoji": "👈", },
  { "emoji": "👉", },
  { "emoji": "👆", },
  { "emoji": "🖕", },
  { "emoji": "👇", },
  { "emoji": "☝️", },
  { "emoji": "👍", },
  { "emoji": "👎", },
  { "emoji": "✊", },
  { "emoji": "👊", },
  { "emoji": "🤛", },
  { "emoji": "🤜", },
  { "emoji": "👏", },
  { "emoji": "🙌", },
  { "emoji": "👐", },
  { "emoji": "🤲", },
  { "emoji": "🤝", },
  { "emoji": "🙏", },
  { "emoji": "✍️", },
  { "emoji": "💅", },
  { "emoji": "🤳", }
]

function renderEmoji(data) {
  const { emoji } = data

  const div = document.createElement('li')
  div.setAttribute('class', 'emoji')
  div.innerText = emoji

  div.addEventListener('click', (emojiSelected) => {
    navigator.clipboard.writeText(emojiSelected.target.innerText);
  })

  const element = document.querySelector('#emojis')
  element.appendChild(div)
}

function renderEmojis(emojis) {
  for (const emoji of emojis) {
    renderEmoji(emoji)
  }
}

window.addEventListener('load', () => {
  renderEmojis(emojis)
})