function getRandomEmojis() {
    const emojis = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}
const Div1 = document.getElementById('div1');

const Button1 = document.getElementById('button1');

Button1.addEventListener('click', () => {
  Div1.innerHTML = getRandomEmojis();
});


