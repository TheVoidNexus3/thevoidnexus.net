function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${50 + Math.random() * (window.innerHeight - 50)}px`;
    dot.style.animationDuration = `${15 + Math.random() * 5}s`;
    document.querySelector('.dynamic-background').appendChild(dot);

    const hue = Math.random() < 0.5 ? Math.floor(300 + Math.random() * 31) : Math.floor(270 + Math.random() * 31);
        dot.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;

        dotContainer.appendChild(dot);
}

setInterval(createDot, 750);