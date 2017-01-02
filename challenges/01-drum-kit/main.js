window.addEventListener('keydown', event => {
    const control = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio || !control) return;
    play(audio);
    animate(control);
});

const controls = document.querySelectorAll(`div[data-key]`);
controls.forEach(control => {
    control.addEventListener('click', (event) => {        
        const audio = document.querySelector(`audio[data-key="${control.dataset.key}"]`);
        play(audio);
        animate(control);
    })
});

function animate(control) {
    control.classList.add('active');
    control.addEventListener('transitionend', (event) => {
        event.target.classList.remove('active');
    });
}

function play(audio) {
    audio.currentTime = 0;
    audio.play();
}