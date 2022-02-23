// carousel section
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1181,
            settings:{
                slidesToShow: 3
            }
        }, {
            breakpoint: 821,
            settings:{
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
// carousel section
 /*Desktop*/
const testerBtn = document.querySelector("#tester")
const testerTask = document.querySelector("#tester__task")
const testerTitleNone = document.querySelector(".jobs__tester-title")
const autoTesterBtn = document.querySelector("#auto__tester")
const autoTesterTask = document.querySelector("#auto__testerTask")
const autoTitleNone = document.querySelector(".jobs__auto-title")
const jobsAutoTester = document.querySelector(".jobs__auto-tester")
const jobsTester = document.querySelector(".jobs__tester")
const heroExitName = document.querySelector('.hero__exit-name')
const heroExitNumber = document.querySelector('.hero__exit-number')
const heroOkName = document.querySelector('.hero__ok-name')
const heroOkNumber = document.querySelector('.hero__ok-number')
const heroInputName = document.querySelector('#name')
const heroInputNumber = document.querySelector('#number')
const heroSkyButton = document.querySelector('.hero__sky-button')
/*Modal*/
const modal = document.querySelector('.modal')
const skyButton = document.querySelectorAll(".sky-button")
const exitModal = document.querySelector('.modal__exit')
let modalName = document.querySelector('#modal_name')
let modalNumber = document.querySelector('#modal_number')
const modalLink = document.querySelector('#modal_link')
const modalExitName = document.querySelector('.modal__exit-name')
const modalExitNumber = document.querySelector('.modal__exit-number')
const modalExitLink = document.querySelector('.modal__exit-link')
const modalSkyButton = document.querySelector('.modal__sky-button')
const modalLabelName = document.querySelector('.modal__label-name')
const modalLabelNumber = document.querySelector('.modal__label-number')
const modalLabelLink = document.querySelector('.modal__label-link')
const modalLinkImg = document.querySelector('.modal__link-img')
const modalAttachBtn = document.querySelector('.modal__attach')
const modalUploadSvg = document.querySelector('.modal__upload svg')
const okName = document.querySelector('.modal__ok-name')
const okNumber = document.querySelector('.modal__ok-number')
const okLink = document.querySelector('.modal__ok-link')
const modalSub = document.querySelector('.modal__sub')
/*Burger mobile*/
const burgerBtn = document.querySelector('.mobile__btn')
const burgerMenu = document.querySelector('.burger__menu')
const burgerExit = document.querySelector('.burger__exit')
const burgerLink = document.querySelectorAll('.burger__link')
/*Mobile*/
const skyButtonMobile = document.querySelector(".jobs__sky-button-mobile")
const testerMobileBtn = document.querySelector("#tester-mobile")
const autoMobileBtn = document.querySelector("#auto-mobile")
const testerTitleNoneMobile = document.querySelector(".jobs__tester-title_mobile")
const autoTitleNoneMobile = document.querySelector(".jobs__auto-title-mobile")
const testerTaskMobile = document.querySelector("#tester__task_mobile")
const autoTaskMobile = document.querySelector(".jobs__auto-vacancy_mobile")
const jobsBackImgMobile = document.querySelector(".jobs__background-img_mobile")
const jobsLinkMobile = document.querySelector(".jobs__link")
const jobs = document.querySelector(".jobs")

/*Desktop version*/
testerBtn.onclick = () =>{
    testerTask.style.display = "flex"
    autoTesterBtn.disabled = true
    jobsTester.style.opacity = "0"
}
testerTitleNone.onclick = () =>{
    testerTask.style.display = "none"
    autoTesterBtn.disabled = false
    jobsTester.style.opacity = "1"
}
autoTesterBtn.onclick = () =>{
    autoTesterTask.style.display = "block"
    testerBtn.disabled = true
    jobsAutoTester.style.opacity = "0"
}
autoTitleNone.onclick = () =>{
    autoTesterTask.style.display = "none"
    testerBtn.disabled = false
    jobsAutoTester.style.opacity = "1"
}


const heroCheck = (input, exit, okSvg) => {
    if (input.value === ''){
        exit.style.display = 'block'
        okSvg.style.display = "none"
    } else{
        exit.style.display = 'none'
        okSvg.style.display = "block"
    }
}
/*Writes name and number from "Hero Input" to "Modal Input*/
const heroWriter = (name, number) => {
    if (name && number !== ''){
        modalName.value = name.value
        modalNumber.value = number.value
        heroSkyButton.style.disabled = 'false'
    }
}

/*on click call modal window*/
skyButton.forEach( (el) => {
    el.onclick = () =>{
        modal.style.display = "block"
    }
})

/*On click check hero inputs for empty value*/
heroSkyButton.addEventListener('click', () =>{
    const heroInputs = [heroInputName, heroInputNumber]
    heroInputs.forEach((el) =>{
        if (el.value === ''){
            console.log('Пусто!!!')
            heroCheck(heroInputName, heroExitName, heroOkName)
            heroCheck(heroInputNumber, heroExitNumber, heroOkNumber)
        } else{
            console.log('Все заполнено!!!')
            heroCheck(heroInputName, heroExitName, heroOkName)
            heroCheck(heroInputNumber, heroExitNumber, heroOkNumber)
        }
    })
    if (heroInputName.value === ''){
        heroCheck(heroInputName, heroExitName, heroOkName)
    } else if(heroInputNumber.value === '') {
        heroCheck(heroInputNumber, heroExitNumber, heroOkNumber)
    }
})
heroInputName.addEventListener('input', () =>{
    heroCheck(heroInputName, heroExitName, heroOkName)
})
heroInputNumber.addEventListener('input', () =>{
    heroCheck(heroInputNumber, heroExitNumber, heroOkNumber)
})
/*Mobile version*/
testerMobileBtn.onclick = () =>{
    testerTaskMobile.style.display = "block"
    testerMobileBtn.style.display = "none"
}
testerTitleNoneMobile.onclick = () =>{
    testerTaskMobile.style.display = "none"
    testerMobileBtn.style.display = "block"
}
autoMobileBtn.onclick = () =>{
    autoTaskMobile.style.display = "block"
    autoMobileBtn.style.display = "none"
    skyButtonMobile.style.display = "none"
    jobsBackImgMobile.style.display = "none"
    jobsLinkMobile.style.display = "block"
    jobs.style.padding = "38px 0 45px"
}
autoTitleNoneMobile.onclick = () =>{
    jobsLinkMobile.style.display = "none"
    autoTaskMobile.style.display = "none"
    autoMobileBtn.style.display = "block"
    jobsBackImgMobile.style.display = "block"
    jobs.style.padding = "38px 0 209px"
    skyButtonMobile.style.display = "block"
}
/*Burger menu*/
burgerBtn.onclick = (e) =>{
    e.preventDefault()
    burgerMenu.style.transition = ' 1s ease-out 0.5s'
    burgerMenu.style.display = 'flex'
}
burgerExit.onclick = () =>{
    burgerMenu.style.display = 'none'

}
burgerLink.forEach( (el) =>{
    el.onclick =() =>{
        burgerMenu.style.display = 'none'
    }
})

/*Modal window*/
let innerNameModal = document.querySelector('#modal_name')
let innerNumberModal = document.querySelector('#modal_number')
const innerLinkModal = document.querySelector('#modal_link')

exitModal.onclick = () => {
    modal.style.display = "none"
}
const check = (input, exit, label, okSvg) => {
    if (input.value === ''){
        exit.style.display = 'block'
        label.style.display = 'block'
        modalLinkImg.style.display = 'block'
        modalAttachBtn.style.color = '#E84949'
        modalAttachBtn.style.border = ' 2px solid #E84949'
        modalUploadSvg.style.fill = 'E84949'
        okSvg.style.display = 'none'
    } else{
        exit.style.display = 'none'
        label.style.display = 'none'
        modalLinkImg.style.display = 'none'
        okSvg.style.display = 'block'
    }
}

modalName.addEventListener('input', () =>{
    check(modalName, modalExitName, modalLabelName, okName)
})
modalNumber.addEventListener('input', () =>{
    check(modalNumber, modalExitNumber, modalLabelNumber, okNumber)
})
modalLink.addEventListener('input', () => {
    check(modalLink, modalExitLink, modalLabelLink, okLink)
})
modalSkyButton.addEventListener('click', () =>{
    const total = [innerNameModal, innerNumberModal, innerLinkModal]
    const exit = [modalExitName, modalExitNumber, modalExitLink]
    const label = [modalLabelName, modalLabelNumber, modalLabelLink]
    const isOk = [okName, okNumber, okLink]
    total.forEach((el) => {
        console.dir(el)
        exit.forEach((ex) => {
            label.forEach((labels) => {
                isOk.forEach((ok) =>{
                    if (el.value === '') {
                        check(el, ex, labels, ok)
                    } else {
                        console.log('ok')
                    }
                })
            })
        })
    })
    if (modalName.value && modalNumber.value && modalLink.value !== ''){
        modalSub.style.display = 'block'
        console.log('URA')
    }
})
