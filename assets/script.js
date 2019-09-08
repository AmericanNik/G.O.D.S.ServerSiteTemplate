$(document).ready(function(){
  console.log('ready');
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();

  let texts = ['Teachers','Students','Creators','Friends', 'Rivals', 'Allies', 'A Community', 'Support', 'Gamers', 'Writers', 'Programmers', 'FX-Makeup Artists', 'Honest', 'Bold', 'Open', 'You', 'Growing', 'Striving'];
  let lastTextIndex = 0;

  function fadeOutElement(element) {
      return new Promise((res) => element.fadeOut(1400, res));
  }

  function fadeInElement(element) {
      return new Promise((res) => element.fadeIn(1400, res));
  }

  function randomText() {
      let index = Math.floor(Math.random() * texts.length);
      if (index == lastTextIndex) return randomText();

      lastTextIndex = index;
      return texts[index];
  }

  async function animateText() {
      let textEl = $('#text');
      let text = await randomText();

      await fadeOutElement(textEl);
      textEl.text(text);
      await fadeInElement(textEl);
      animateText();
  }

     animateText();

});
