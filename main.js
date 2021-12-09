const main = document.querySelector('.main')
const riotIcon = document.querySelector('.header-left_riot-img')
const riotArrow = document.querySelector('.header-left_riot-icon')
const modalRiot = document.querySelector('.modal-riot')
const modalRiotClose = document.querySelector('.modal-riot_close')
const firstVideo = document.querySelector('.first-video')
const secondVideo = document.querySelector('.second-video')
const introIframe = document.querySelector('.content-intro_top-video_iframe')
const introIfameBtn = document.querySelector('.content-intro_top-video_btn')
const youtubeBtn = document.querySelector('.content-intro_top-video_iframe-video')
const sliderImgs = document.querySelectorAll('.content-main_top-container_slider_img')
const nextBtn = document.querySelector('.sliders-outline_next')
const prevBtn = document.querySelector('.sliders-outline_prev')
const SliderInfos = document.querySelectorAll('.slider-info-container')
const cardEffect = document.querySelectorAll('.slider-info_card_effect')
const radioSliders = document.querySelectorAll('.slider-radio_item')
const barHeaderItems = document.querySelectorAll('.content-main_bottom_header-item')
const barHeaderList = document.querySelector('.content-main_bottom_header-list')
const barHeaderClan = document.querySelectorAll('.content-main_bottom_header_outline_clan_item')
const cardContainer = document.querySelectorAll('.content-main_bottom_CardContainer')
const modalLogin = document.querySelector('.modal-login')
const modalLoginContainer = document.querySelector('.modal-login-container')
const btnPlayModal = document.querySelectorAll('.playBtnJs')
const closeModalPlay = document.querySelector('.modal-login_close')
const modalMenu = document.querySelector('.modal-menu')
const menuIcon = document.querySelector('.header-right_menu')
const modalPlayLine = document.querySelector('.modal-login-content_line')
const modalMenuClose = document.querySelector('.modal-menu_close_icon')
const radioInfoMobiles = document.querySelectorAll('.intro-bottom-radio_item')
const infoBottomAbouts = document.querySelectorAll('.intro-bottom-about')
const infoBottomResponsive = document.querySelector('.intro-bottom-reponsive')
const modalCardMobile = document.querySelector('.modal-info-card')
const mobileCardIcon = document.querySelector('.mobile-card_icon')
const infoCardMoblieClose = document.querySelector('.modal-info-card_close')
const modalCardContainer = document.querySelectorAll('.modal-info-card-container')
    // fade and hide modal riot...................................................................
function fadeAndHideRiotModal() {
    riotIcon.addEventListener('click', () => {
        modalRiot.classList.toggle('openTranform')
    })
    riotArrow.addEventListener('click', () => {
        modalRiot.classList.toggle('openTranform')
    })
    modalRiotClose.addEventListener('click', () => {
        modalRiot.classList.remove('openTranform')
    })


}

// open menu................................................................
function OpenModalMenu() {
    menuIcon.addEventListener('click', () => {
        modalMenu.classList.add('open')
    })

    modalMenuClose.addEventListener('click', () => {
        modalMenu.classList.remove('open')

        console.log(1)

    })


}

// loading video top................................................................

function loadVideo() {
    firstVideo.ontimeupdate = function() {
        if (firstVideo.currentTime == firstVideo.duration) {
            firstVideo.style.display = 'none'
            secondVideo.style.display = 'block'
        }
    }
}
// fadein intro ifame................................................................
function fadeIntroIfame() {
    introIfameBtn.addEventListener('click', () => {
        introIframe.style.visibility = 'visible'
        introIframe.style.opacity = 1
        youtubeBtn.src += '?autoplay=1'
    })
}
// card slider change...............................................................
function cardChange() {

    const cardEffectActive = document.querySelector('.slider-info_card_effect.activecard')
    cardEffectActive.classList.remove('activecard')
    cardEffect[index].classList.add('activecard')

    cardEffect[index].addEventListener('click', () => {
        const carfEffectChange = document.querySelectorAll('.slider-info_card_effectChange')
        const currentCard = document.querySelectorAll('.currentCard')
        const onclickCard = document.querySelectorAll('.cardOnclick')

        currentCard[index].classList.toggle('cardChange')
        onclickCard[index].classList.toggle('cardChange')
        carfEffectChange[index].classList.add('cardChange')
        setTimeout(() => {
            carfEffectChange[index].classList.remove('cardChange')
        }, 700)

        cardEffect[index].style.visibility = 'hidden'
        setTimeout(() => {
            cardEffect[index].style.visibility = 'visible'
        }, 700)

    })
}


// change slider................................................................
let index = 0
let positionX = 0

function changeSlider() {

    const addAndRemoveActiveImg = function() {
            const sliderImgActive = document.querySelector('.content-main_top-container_slider_img.active')
            sliderImgActive.classList.remove('active')
            sliderImgs[index].classList.add('active')

        }
        // zoom Img...........................................    
    const zoomSlider = function() {
            setTimeout(() => {
                sliderImgs[index].style.transform += `scale(1.06)`
            }, 600)
        }
        // add and remove active info slider................................
    const addAndRemoveActiveInfo = function() {
        const SliderInfoActive = document.querySelector('.slider-info-container.active')
        SliderInfoActive.classList.remove('active')
        setTimeout(function() {
            SliderInfos[index].classList.add('active')
        }, 1000)
    }

    function sliderImgTransform() {
        for (const sliderImg of sliderImgs) {
            sliderImg.style.transform = `translateX(${positionX}%)`
        }
    }

    function addAndRemoveRadio() {
        const radioSLiderActive = document.querySelector('.slider-radio_item.active')
        radioSLiderActive.classList.remove('active')
        radioSliders[index].classList.add('active')
    }

    function mobileCardInfo() {
        const modalCardContainerActive = document.querySelector('.modal-info-card-container.active')
        modalCardContainerActive.classList.remove('active')
        modalCardContainer[index].classList.add('active')
    }


    // next slider...........................................

    nextBtn.addEventListener('click', () => {
            handleChangeSlider(1)
        })
        // prev slider...........................................
    prevBtn.addEventListener('click', () => {
        handleChangeSlider(-1)

    })

    // handle envent...........................................
    function handleChangeSlider(e) {
        if (e == 1) {
            index++
            positionX = positionX - 100

            prevBtn.style.opacity = 1
            prevBtn.style.cursor = 'pointer'
            index >= sliderImgs.length - 1 ? (nextBtn.style.opacity = 0.2) && (nextBtn.style.cursor = 'default') : nextBtn.style.opacity = 1
            if (index >= sliderImgs.length) {
                index = sliderImgs.length - 1
                positionX = -900
                return
            }
            sliderImgTransform()
            addAndRemoveRadio()
            zoomSlider()
            addAndRemoveActiveImg()
            addAndRemoveActiveInfo()
            cardChange()
            mobileCardInfo()

        } else if (e == -1) {
            index--
            positionX = positionX + 100
            nextBtn.style.opacity = 1
            nextBtn.style.cursor = 'pointer'
            index <= 0 ? (prevBtn.style.opacity = 0.2) && (prevBtn.style.cursor = 'default') : prevBtn.style.opacity = 1
            if (index < 0) {
                index = 0;
                positionX = 0
                return
            }

            sliderImgTransform()
            addAndRemoveRadio()
            zoomSlider()
            addAndRemoveActiveImg()
            addAndRemoveActiveInfo()
            cardChange()
            mobileCardInfo()
        }
    }

    (function radioSlider() {
        radioSliders.forEach((radio, i) => {
            radio.addEventListener('click', () => {
                index = i
                const radioSLiderActive = document.querySelector('.slider-radio_item.active')
                radioSLiderActive.classList.remove('active')
                radio.classList.add('active')
                positionX = -i * 100
                sliderImgTransform()
                zoomSlider()
                addAndRemoveActiveImg()
                addAndRemoveActiveInfo()
                cardChange()
                mobileCardInfo()
                prevBtn.style.cursor = 'pointer'
                index >= sliderImgs.length - 1 ? (nextBtn.style.opacity = 0.2) && (nextBtn.style.cursor = 'default') : nextBtn.style.opacity = 1
                nextBtn.style.cursor = 'pointer'
                index <= 0 ? (prevBtn.style.opacity = 0.2) && (prevBtn.style.cursor = 'default') : prevBtn.style.opacity = 1
            })
        });
    })()


}

// change card main..............................................................
let positionXcard = 0

function changeCardMain() {
    barHeaderItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            const barHeaderItemActive = document.querySelector('.content-main_bottom_header-item.active')
            barHeaderItemActive.classList.remove('active')
            item.classList.add('active')
            positionXcard = -i * 220
            barHeaderList.style.transform = `translateX(${positionXcard}px)`

            const barHeaderCLanActive = document.querySelector('.content-main_bottom_header_outline_clan_item.active')
            barHeaderCLanActive.classList.remove('active')
            barHeaderClan[i].classList.add('active')

            const cardContainerActive = document.querySelector('.content-main_bottom_CardContainer.active')
            cardContainerActive.classList.remove('active')
            cardContainer[i].classList.add('active')
        })
    })


}

// modal play now..............................................................
function ModalPlayNow() {
    btnPlayModal.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalLogin.style.display = 'flex'

        })
    })
    closeModalPlay.addEventListener('click', () => {
        modalLogin.style.display = 'none'
    })
    modalLogin.addEventListener('click', () => {
        modalLogin.style.display = 'none'
    })
    modalLoginContainer.addEventListener('click', (e) => {
        e.stopPropagation()

    })
}
let positionXmobile = 0

// radio info bottom................................................................
function radioInfoBottomMobile() {

    infoBottomResponsive.addEventListener('scroll', () => {
        if (infoBottomResponsive.scrollLeft > 600) {
            const radioInfoMobilesActive = document.querySelector('.intro-bottom-radio_item.active')
            radioInfoMobilesActive.classList.remove('active')
            radioInfoMobiles[2].classList.add('active')
        }
        if (infoBottomResponsive.scrollLeft <= 600) {
            const radioInfoMobilesActive = document.querySelector('.intro-bottom-radio_item.active')
            radioInfoMobilesActive.classList.remove('active')
            radioInfoMobiles[1].classList.add('active')

        }
        if (infoBottomResponsive.scrollLeft <= 300) {
            const radioInfoMobilesActive = document.querySelector('.intro-bottom-radio_item.active')
            radioInfoMobilesActive.classList.remove('active')
            radioInfoMobiles[0].classList.add('active')

        }


        console.log(infoBottomResponsive.scrollLeft, infoBottomAbouts[1].offsetWidth)
    })
    radioInfoMobiles.forEach((radio, i) => {
        radio.addEventListener('click', () => {
            const radioInfoMobilesActive = document.querySelector('.intro-bottom-radio_item.active')
            radioInfoMobilesActive.classList.remove('active')
            radio.classList.add('active')
            infoBottomResponsive.scrollLeft = i * 342
        })

    })

}
// open modal card..............................................................
function openModalCard() {
    mobileCardIcon.addEventListener('click', () => {
        modalCardMobile.style.display = 'flex'
    })
    infoCardMoblieClose.addEventListener('click', () => {
        modalCardMobile.style.display = 'none'
    })
}

function isVisible(e) {
    let elementBox = e.getBoundingClientRect()
    let distanceFromTop = -200
    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true
    } else {
        return false
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden')
    sectionList.forEach((section) => {
        if (isVisible(section)) {
            section.classList.remove('hidden')
        }
    })
}








fadeAndHideRiotModal()
loadVideo()
fadeIntroIfame()
changeSlider()
cardChange()
changeCardMain()
ModalPlayNow()
OpenModalMenu()
radioInfoBottomMobile()
openModalCard()
document.addEventListener('scroll', scanDocument)