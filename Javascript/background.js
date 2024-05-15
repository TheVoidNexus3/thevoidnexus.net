function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.top = `${60 + Math.random() * (window.innerHeight - 50)}px`;
    dot.style.animationDuration = `${30 + Math.random() * 5}s`;

    const hue = Math.random() < 0.5 ? Math.floor(300 + Math.random() * 31) : Math.floor(270 + Math.random() * 31);
    dot.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;

    document.querySelector('.dynamic-background').appendChild(dot);

    setTimeout(function() {
        document.querySelector('.dynamic-background').removeChild(dot);
        dot.remove;
    }, 60000);
}

setInterval(function() {
    createDot();
}, 750);


setInterval(function() {
    colormode()
},10000)


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
} else {
    stylesheet.setAttribute('href', 'CSS/style.css');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    mstylesheet.setAttribute('href', 'CSS/mlightstyle.css');
} else {
    mstylesheet.setAttribute('href', 'CSS/mstyle.css');
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

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        const loading = document.getElementById("loading");
        setTimeout(function() {
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.style.display = "none";
            }, 1000)
        }, 1000);
    });
});