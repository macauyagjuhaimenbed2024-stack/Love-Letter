const text1 = `It's strange, because anyone who knows me also knows
how silence has always consumed me.
I've always been the one who listens more than speaks.
There's a certain peace in the quiet,
a comfort in letting the world speak while I stay hidden.

Until I found myself speaking,
and every time I did, your name slipped into it.
It started softly, like a whisper I didn't even notice.
I'd bring you up in passing, tell a story
that you were somehow part of.

And before I knew it,
your name was everywhere.`;

const text2 = `It wasn't something that happened all at once.
It crept in slowly, like the way sunlight spills across a room in the morning.
One moment, you were just someone I knew.
And then, suddenly, you were everywhere—in my thoughts, in my words, in the playlist I listened to nonstop.
...
It's meant to be seen, shared with the world,
yet it remains hidden from the person who unknowingly carries all its meaning.`;

const text3 = `我爱你 (Wǒ ài nǐ), Te quiero mucho, Je t’aime tellement, Ti amo tantissimo, Ich liebe dich so sehr, Mahal na mahal kita, 사랑해 (Saranghae), Я тебя очень люблю (Ya tebya ochen lyublyu), 愛してる (Aishiteru), أحبك كثيرا (Uhibbuka kathiran), Obicham te, Kocham cię bardzo, Ik hou zoveel van je, Eu te amo tanto, Seni çok seviyorum, Σ’ αγαπώ πολύ (S’agapó polý), Jeg elsker dig så meget, Jag älskar dig så mycket, Volim te puno, Ljubim te močno, Rwy'n dy garu di gymaint, Táim i ngrá leat go mór, Ik hâld safolle fan dy, Ninakupenda sana, Ke a go rata kudu, Mi amas vin tiom, Jeg elsker deg så mye, Minä rakastan sinua niin paljon, Ég elska þig svo mikið, Aku cinta kamu banget, Gua sayang banget sama lo, Mi tre amas vin, Aroha nui au ki a koe, Ndimakukonda kwambiri, Inhobokte shudhu tomay, Mwen renmen ou anpil, Mwen renmen w anpil, Hum tumse bahut pyaar karte hain, Main tumse bohot mohabbat karta hoon, Mo ni fe re pupo, Ndagukunda cane, Migòz'ihà, Phom rak khun mak mak, Chan rak khun mak, S'agapo, Kocham cię ogromnie, Jag älskar dig massor, Te iubesc mult, Volim te mnogo, Lab sangat sayang awak, Gua cinta kamu banget, Mahal na mahal kita talaga, Gihigugma tika kaayo, Ayayaten ka unay, Agtaraki kenka unay, Pagkamahal na mahal kita, Gusto kita sobra, Ibig na ibig kita, Mas na mas kita mahal, Minahal kita sobra sobra, Mahal na mahal talaga kita, Napakahalaga mo sa akin, Sobran sobra kitang mahal, Te dua shumë, Te dua fort, Dashurim e madhe për ty, Ljubim te veliko, Volim te beskrajno, Es tevi ļoti mīlu, Tave labai myliu, Rakkastan sinua todella paljon, Ég elska þig af öllu hjarta, Eg elski deg så mykje, Mi amas vin trege, Jeg elsker deg virkelig, Ana behibek awi, Hab dich so lieb, Jag älskar dig verkligen, Eu amo-te tanto, I love you endlessly, I love you forever, I love you deeply, I love you truly, I love you completely, I love you with all my heart, I love you unconditionally, I love you endlessly, I love you madly, I love you passionately, I love you more than words, I love you more than life, I love you infinitely, I love you immensely, I love you more every day, I love you with every breath, I love you without end, I love you to the moon and back, I love you more than anything, I love you so much.`;

function typeWriter(text, elementId, speed, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

const paper = document.getElementById('paper');
const content = document.getElementById('content');
const continueBtn = document.getElementById('continueBtn');
const extended = document.getElementById('extended');

paper.addEventListener('click', () => {
  if (paper.classList.contains('folded')) {
    paper.classList.remove('folded');
    paper.classList.add('unfolded');
    content.classList.remove('hidden');
    typeWriter(text1, "text1", 40, () => {
      continueBtn.classList.remove('hidden');
    });
  }
});

continueBtn.addEventListener('click', () => {
  extended.classList.remove('hidden');
  typeWriter(text2, "text2", 40, () => {
    typeWriter(text3, "text3", 40);
  });
});