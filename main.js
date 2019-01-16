let playbutton2 = document.getElementById('playbutton2')
let video2 = document.getElementById('video2')
video2.addEventListener('ended', clearclass, false)
playbutton2.addEventListener('click', play2, false)
function clearclass() {
    playbutton2.className = ''
    playbutton1.className = ''
}
function play2() {
    if (video2.paused) {
        video2.play();
        playbutton2.className = 'hidden'
    } else {
        video2.pause();
        playbutton2.className = ''
    }
}
let playbutton1 = document.getElementById('playbutton1')
let video1 = document.getElementById('video1')
video1.addEventListener('ended', clearclass, false)
playbutton1.addEventListener('click', play1, false)

function play1() {
    if (video1.paused) {
        video1.play();
        playbutton1.className = 'hidden'
    } else {
        video1.pause();
        playbutton1.className = ''
    }
}

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.5; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}