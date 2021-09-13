const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let idx = 0

function carousel() {
    idx ++

    if(idx > img.length - 1) {
        idx=0
    }

    imgs.style.transform = `translatex(${-idx * 500}px)`

}

setInterval(carousel, 2500)