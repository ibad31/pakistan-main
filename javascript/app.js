window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  const video = document.getElementById("bgVideo");
  const volUp = document.getElementById("volUp");
  const volDown = document.getElementById("volDown");
  const muteToggle = document.getElementById("muteToggle");



  muteToggle.addEventListener("click", () => {
    video.muted = !video.muted;
    muteToggle.textContent = video.muted ? "🔇" : "🔈";
  });



  const textElement = document.getElementById('typingText');
  const messages = ["Pakistan Unity Day", "Pakistan Zindabad"];
  let messageIndex = 0;
  let charIndex = 0;

  function typeText() {
    if (charIndex < messages[messageIndex].length) {
      textElement.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100); // typing speed
    } else {
      setTimeout(eraseText, 1500); // wait after full text is typed
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      textElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50); // deleting speed
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeText, 500); // delay before next typing
    }
  }

  // Start animation
  textElement.classList.add('blink');
  typeText();

  window.addEventListener("load", function () {
    setTimeout(function () {
      const loader = document.getElementById("loader");
      loader.classList.add("fade-out"); // if you use fade animation
      setTimeout(() => loader.style.display = "none", 200); // after fade
    }, 2000); // 2 seconds
  });
  
  