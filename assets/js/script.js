const menu = document.getElementById('menu')
const firstP = document.getElementById('first-p')
const secp = document.getElementById('sec-p')
const sec1 = document.getElementById('sec1')
const sec1Span = document.querySelectorAll('#sec1>span')
const sec1p = document.querySelectorAll('#sec1>div>p')

const sec2 = document.getElementById('sec2')

const sec3 = document.getElementById('sec3')
const sec3Div = document.querySelectorAll('#sec3>div')

const sec4 = document.getElementById('sec4')
const sec4Title = document.querySelectorAll('#title>h2')

const sec5 = document.getElementById('sec5')

const sec6 = document.getElementById('sec6')
const sec6P = document.querySelectorAll('#sec6>p')

const stickyBox = document.getElementById("sticky-box");
const container = document.getElementById("sticky-container");
const image = document.querySelectorAll("#image>img");
const leftContent = document.querySelectorAll("#left-side-content>div");
const rightContent = document.querySelectorAll("#right-side-content>div");
const boxHeight = stickyBox.offsetHeight;
const containerHeight = container.offsetHeight;


window.addEventListener('scroll', () => {
    let st = window.scrollY

    if (st > 250) {
        menu.parentElement.style.transform = `translateY(-${menu.parentElement.offsetHeight}px)`
    } else {
        menu.parentElement.style.transform = `translateY(0)`
    }

    // header paragraph
    let topFistP = calculateTop(firstP.parentElement)
    if (topFistP < 600) {
        firstP.children[0].style.transform = `translateY(${firstP.children[0].clientHeight}px)`
        if (calculateTop(firstP.parentElement) < 550) {
            firstP.children[1].style.transform = `translateY(${(firstP.children[0].clientHeight) * 2}px)`
        } else {
            firstP.children[1].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 500) {
            secp.children[0].style.transform = `translateY(${secp.children[0].clientHeight}px)`
        } else {
            secp.children[0].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 450) {
            secp.children[1].style.transform = `translateY(${(secp.children[0].clientHeight) * 2}px)`
        } else {
            secp.children[1].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 400) {
            secp.children[2].style.transform = `translateY(${(secp.children[0].clientHeight) * 3}px)`
        } else {
            secp.children[2].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 350) {
            secp.children[3].style.transform = `translateY(${(secp.children[0].clientHeight) * 4}px)`
        } else {
            secp.children[3].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 300) {
            secp.children[4].style.transform = `translateY(${(secp.children[0].clientHeight) * 5}px)`
        } else {
            secp.children[4].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 250) {
            secp.children[5].style.transform = `translateY(${(secp.children[0].clientHeight) * 6}px)`
        } else {
            secp.children[5].style.transform = `translateY(0)`
        }
        if (calculateTop(firstP.parentElement) < 200) {
            secp.children[6].style.transform = `translateY(${(secp.children[0].clientHeight) * 7}px)`
        } else {
            secp.children[6].style.transform = `translateY(0)`

        }

    } else {
        firstP.children[0].style.transform = `translateY(0)`
    }
    // header paragraph


    // sec1 paragraph
    let topSec1 = calculateTop(sec1.children[4])
    if (topSec1 < 500) {
        sec1Span[0].style.transform = 'translate3D(350px,200px,0)'
        sec1Span[1].style.transform = 'translate3D(-350px,200px,0)'
        sec1Span[2].style.transform = 'translate3D(350px,-200px,0)'
        sec1Span[3].style.transform = 'translate3D(-350px,-200px,0)'

        sec1p[0].style.transform = `translateY(${sec1p[0].offsetHeight}px)`
        if (topSec1 < 450) {
            sec1p[1].style.transform = `translateY(${(sec1p[0].offsetHeight) * 2}px)`
            sec1p[2].style.transform = `translateY(${(sec1p[0].offsetHeight) * 3}px)`
        } else {
            sec1p[1].style.transform = `translateY(0)`
            sec1p[2].style.transform = `translateY(0)`
        }
        if (topSec1 < 350) {
            sec1p[3].style.transform = `translateY(${(sec1p[0].offsetHeight) * 4}px)`
            sec1p[4].style.transform = `translateY(${(sec1p[0].offsetHeight) * 5}px)`
        } else {
            sec1p[3].style.transform = `translateY(0)`
            sec1p[4].style.transform = `translateY(0)`
        }
        if (topSec1 < 250) {
            sec1p[5].style.transform = `translateY(${(sec1p[0].offsetHeight) * 6}px)`
            sec1p[6].style.transform = `translateY(${(sec1p[0].offsetHeight) * 7}px)`
        } else {
            sec1p[5].style.transform = `translateY(0)`
            sec1p[6].style.transform = `translateY(0)`
        }
        if (topSec1 < 150) {
            sec1p[7].style.transform = `translateY(${(sec1p[0].offsetHeight) * 8}px)`
            sec1p[8].style.transform = `translateY(${(sec1p[0].offsetHeight) * 9}px)`
        } else {
            sec1p[7].style.transform = `translateY(0)`
            sec1p[8].style.transform = `translateY(0)`
        }

    } else {
        sec1p[0].style.transform = `translateY(0)`
    }
    // sec1 paragraph

    let topSec2 = calculateTop(sec2)
    if (topSec2 < 500) {
        sec2.children[2].classList.replace('w-[40%]', 'w-[50%]')
        if (topSec2 < 400) {
            sec2.children[2].classList.replace('w-[50%]', 'w-[60%]')
            sec2.children[0].children[0].style.transform = 'translateX(-100%)'
            sec2.children[0].children[1].style.transform = 'translateX(100%)'
            sec2.children[1].children[0].style.transform = 'translateX(-30%)'
            sec2.children[1].children[1].style.transform = 'translateX(50%)'

        } else {
            sec2.children[2].classList.replace('w-[50%]', 'w-[60%]')
            sec2.children[0].children[0].style.transform = 'translateX(0)'
            sec2.children[0].children[1].style.transform = 'translateX(0)'
            sec2.children[1].children[0].style.transform = 'translateX(0)'
            sec2.children[1].children[1].style.transform = 'translateX(0)'
        }

        if (topSec2 < -200) {
            sec2.children[3].children[0].style.transform = 'translateX(68%)'
            sec2.children[3].children[1].style.transform = 'translateX(15%)'
        } else {
            sec2.children[3].children[0].style.transform = 'translateX(0)'
            sec2.children[3].children[1].style.transform = 'translateX(0)'
        }



    }


    // sec3 images
    let topSec3 = calculateTop(sec3)
    if (topSec3 < 400) {
        sec3.children[0].children[1].classList.remove('-translate-y-[100%]')

        if (topSec3 < 100) {
            sec3Div[1].classList.remove('translate-x-[100%]')
        }
        if (topSec3 < -200) {
            sec3Div[2].classList.remove('-translate-x-[100%]')

        }

    } else {
        sec3.children[0].children[1].classList.add('-translate-y-[100%]')
    }
    // sec3 images


    // sec4
    let topSec4 = calculateTop(sec4)
    if (topSec4 < 400) {
        sec4Title[0].style.transform = 'translateX(-45%)'
        sec4Title[1].style.transform = 'translateY(110%)'
    }
    // sec4

    // sec 5
    if (calculateTop(sec5) < 400) {
        sec5.children[1].style.transform = 'translateY(150%)'
    } else {
        sec5.children[1].style.transform = 'translateY(0)'

    }
    // sec 5

    // sec6
    let topSec6 = calculateTop(sec6)
    if (topSec6 < 500) {
        sec6P[0].classList.remove('translate-x-[110%]')
        if (topSec6 < 400) {
            sec6P[1].classList.remove('translate-x-[110%]')
            sec6P[2].classList.remove('translate-x-[110%]')
        } else {
            sec6P[1].classList.add('translate-x-[110%]')
            sec6P[2].classList.add('translate-x-[110%]')
        }
        if (topSec6 < 300) {
            sec6P[3].classList.remove('translate-x-[110%]')
            sec6P[4].classList.remove('translate-x-[110%]')
        } else {
            sec6P[3].classList.add('translate-x-[110%]')
            sec6P[4].classList.add('translate-x-[110%]')
        }
        if (topSec6 < 200) {
            sec6P[5].classList.remove('translate-x-[110%]')
            sec6P[6].classList.remove('translate-x-[110%]')
        } else {
            sec6P[5].classList.add('translate-x-[110%]')
            sec6P[6].classList.add('translate-x-[110%]')
        }
    } else {
        sec6P[0].classList.add('translate-x-[110%]')

    }
    // sec6

    // last
    const containerRect = container.getBoundingClientRect();
    console.log(containerRect);


    if (containerRect.top > 0) {
        // هنوز به بالای viewport نرسیده
        stickyBox.classList.remove("fixed");
        stickyBox.classList.add("absolute", "top-0");
    }
    else if (containerRect.top <= 0 && containerRect.bottom - boxHeight >= 0) {
        // بین بالای container و انتهای آن
        stickyBox.classList.remove("absolute");
        stickyBox.classList.add("fixed", "top-0");
    }
    else if (containerRect.bottom - boxHeight < 0) {
        // رسیدیم به پایین container
        stickyBox.classList.remove("fixed");
        stickyBox.classList.add("absolute");
    }

    if (parseInt(image[1].getBoundingClientRect().top) < 200) {
        leftContent[0].classList.add('hidden')
        leftContent[1].classList.remove('hidden')

        rightContent[1].classList.add('hidden')
        rightContent[2].classList.remove('hidden')

        if (parseInt(image[2].getBoundingClientRect().top) < 400) {
            leftContent[1].classList.add('hidden')
            leftContent[2].classList.remove('hidden')

            rightContent[2].classList.add('hidden')
            rightContent[3].classList.remove('hidden')
        } else {
            leftContent[1].classList.remove('hidden')
            leftContent[2].classList.add('hidden')

            rightContent[2].classList.remove('hidden')
            rightContent[3].classList.add('hidden')
        }

    } else {
        leftContent[0].classList.remove('hidden')
        leftContent[1].classList.add('hidden')

        rightContent[1].classList.remove('hidden')
        rightContent[2].classList.add('hidden')
    }
    // last

})





function calculateTop(sec) {
    return parseInt(sec.getBoundingClientRect().top)
}

document.getElementById('menuBtn').addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})