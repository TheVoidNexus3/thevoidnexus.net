function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${50 + Math.random() * (window.innerHeight - 50)}px`;
    dot.style.animationDuration = `${30 + Math.random() * 5}s`;

    const hue = Math.random() < 0.5 ? Math.floor(300 + Math.random() * 31) : Math.floor(270 + Math.random() * 31);
    dot.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;

    document.querySelector('.dynamic-background').appendChild(dot);
}

let dotInterval;

function startDotCreation() {
    dotInterval = setInterval(createDot, 750);
}

function stopDotCreation() {
    clearInterval(dotInterval);
}

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        stopDotCreation();
    } else {
        startDotCreation();
    }
});

startDotCreation();
