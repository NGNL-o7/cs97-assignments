function getRandomEmojis() {
    const emojis = ['🙂hi', '😍hi', '😂hi', '😢hi', '😡hi', '🥴hi'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}
function getRandomStrings() {
  const UCLAstrings = ['FOOD', 'CLUBS', 'PROJECTS', 'NEW PEOPLE', 'NEW AREA', 'LA TRAFFIC'];
  const randomIndex = Math.floor(Math.random() * UCLAstrings.length);
  return UCLAstrings[randomIndex];
}
const Div1 = document.getElementById('div1');

const Button1 = document.getElementById('button1');

Button1.addEventListener('click', () => {
  Div1.innerHTML = getRandomEmojis();
});

const Div2 = document.getElementById('div2');

Button2.addEventListener('click', () => {
  Div2.innerHTML = getRandomStrings();
});

