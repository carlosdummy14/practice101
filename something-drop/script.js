const content = document.getElementById('content');
const widthContent = content.offsetWidth;
const heightContent = content.offsetHeight;

// multiple drops in action
function multipleDrops() {
  for (let i = 0; i < 10; i++) {
    // random number for Delay and Duration of animation
    const randomDelay = Math.floor(Math.random() * 10 + 3);
    const randomDuration = Math.floor(Math.random() * 15 + 3);

    // use an element div with a background color
    const drop = document.createElement('div');
    drop.style.backgroundColor = 'cyan';

    // use a transparent image
    // const drop = new Image();
    // drop.src = './flake.png';

    drop.classList.add('drop');
    drop.style.animationDelay = `${randomDelay}s`;
    drop.style.animationDuration = `${randomDuration}s`;
    drop.style.left = `${Math.random() * widthContent}px`;
    drop.addEventListener('animationend', deleteDrop);
    content.appendChild(drop);
  }
}

function deleteDrop(event) {
  event.target.remove();
}

setInterval(multipleDrops, 1000);
