// Function to create a dot
function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${60 + Math.random() * (window.innerHeight - 50)}px`;
    dot.style.animationDuration = `${30 + Math.random() * 5}s`;

    const hue = Math.random() < 0.5 ? Math.floor(300 + Math.random() * 31) : Math.floor(270 + Math.random() * 31);
    dot.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;

    document.querySelector('.dynamic-background').appendChild(dot);

    setTimeout(function() {
        dot.remove();
    }, 60000);
}

function startCreatingDots() {
    createDotInterval = setInterval(function() {
        createDot();
    }, 750);
}

function stopCreatingDots() {
    clearInterval(createDotInterval);
}

startCreatingDots();

setInterval(function() {
    colormode();
}, 10000);

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        startCreatingDots();

        document.querySelectorAll('.dot').forEach(dot => {
            dot.style.animationPlayState = "running";
        });
    } else {
        stopCreatingDots();
            document.querySelectorAll('.dot').forEach(dot => {
            dot.style.animationPlayState = "paused";

        });
    }
});


function colormode() {
    const stylesheet = document.getElementById('stylesheet');
    const mstylesheet = document.getElementById('mstylesheet');

    let setting = localStorage.getItem('Colormode');
    if (setting == "dark") {
        stylesheet.setAttribute('href', 'CSS/style.css');
        mstylesheet.setAttribute('href', 'CSS/mstyle.css');
    } else if (setting == "light") {
        stylesheet.setAttribute('href', 'CSS/lightstyle.css');
        mstylesheet.setAttribute('href', 'CSS/mlightstyle.css');
    } else {

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    stylesheet.setAttribute('href', 'CSS/lightstyle.css');
    localStorage.setItem("Colormode", "light");
} else {
    stylesheet.setAttribute('href', 'CSS/style.css');
    localStorage.setItem("Colormode", "dark");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    mstylesheet.setAttribute('href', 'CSS/mlightstyle.css');
    localStorage.setItem("Colormode", "light");
} else {
    mstylesheet.setAttribute('href', 'CSS/mstyle.css');
    localStorage.setItem("Colormode", "dark");
}
}
}
const coloricon = document.getElementById('coloricon');
coloricon.addEventListener("click", function() {
    let setting = localStorage.getItem('Colormode');
    if (setting == "light") {
        localStorage.setItem('Colormode', "dark");
    } else if (setting == "dark") {
        localStorage.setItem('Colormode', "light");
    } else if (setting == null && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        localStorage.setItem('Colormode', "dark");
    } else {
        localStorage.setItem('Colormode', "light");
    }

    colormode();
})

colormode();