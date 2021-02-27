(function () {
    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social, index) {
        social.style.animation = `moveIn 0.6s ease-in-out forwards ${index/7 + 0.2}s`
    })

let rocketPieces = document.querySelectorAll('.rocket-body span')

let rocket = document.querySelector('.rocket')

let triggerStart = window.innerHeight / 2;

let rocketoffsetTop = rocket.offsetTop;

let thirdoffsetTop = rocketPieces[2].offsetTop;

document.addEventListener('scroll', (e) =>{ 
    if(window.scrollY > (rocketoffsetTop - triggerStart)){
        rocketPieces[0].classList.add ('active');
        rocketPieces[1].classList.add ('active');
    }else{
        rocketPieces[0].classList.remove ('active');
        rocketPieces[1].classList.remove ('active');
    }

    if(window.scrollY > (thirdoffsetTop - triggerStart)) {
        rocketPieces[2].classList.add ('active');
    }else{
        rocketPieces[2].classList.remove ('active');
    }
})


}())