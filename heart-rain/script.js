function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");

  emoji.style.left = Math.random() * 100 + "vw"
  emoji.style.animationDuration = Math.random() * 2 + 2 + "s"

  emoji.innerText = '❤️'

  document.body.appendChild(emoji);

  setTimeout(() => {
      emoji.remove();

  }, 5000)

}

setInterval(createEmoji, 300);
