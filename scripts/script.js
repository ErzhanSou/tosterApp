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
}
testerTitleNone.onclick = () =>{
    testerTask.style.display = "none"
}
autoTesterBtn.onclick = () =>{
    autoTesterTask.style.display = "flex"
}
autoTitleNone.onclick = () =>{
    autoTesterTask.style.display = "none"
}

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
    jobs.style.padding = "38px 0 130px"
    skyButtonMobile.style.display = "block"
}