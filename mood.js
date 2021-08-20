const Header1 = document.getElementById('header1');
const Div1 = document.getElementById('div1');
const Button1 = document.getElementById('button1');

function getRandomMood() {
    const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}
Button1.addEventListener('click', () => {
  // do something when '//event_here' occurs
  Div1.innerHTML = getRadnomMood();
});


