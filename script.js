console.log('Hello from Nerdbord!')

const box = document.querySelector(".box")

function randomHexColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
  
    return `#${hexR}${hexG}${hexB}`;
  }
  
  // stop the function calls after 10 seconds
  setInterval(() => {
    box.style.borderColor = randomHexColor()
  }, 1000);
  