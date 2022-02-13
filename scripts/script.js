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

const testerBtn = document.querySelector("#tester")
const testerTask = document.querySelector("#tester__task")
const testerTitleNone = document.querySelector(".jobs__tester-title")

const autoTesterBtn = document.querySelector("#auto__tester")
const autoTesterTask = document.querySelector("#auto__testerTask")
const autoTitleNone = document.querySelector(".jobs__auto-title")
const jobsSkyButton = document.querySelector(".jobs__sky-button")
const jobsBackImg = document.querySelector('.jobs__background-img')
const jobsLink = document.querySelector(".jobs__link")


testerBtn.onclick = () =>{
    testerTask.style.display = "flex"
    testerBtn.style.display = "none"
    jobsSkyButton.style.display = "none"
    jobsLink.style.display = 'block'
}
testerTitleNone.onclick = () =>{
    testerBtn.style.display = "block"
    testerTask.style.display = "none"
    jobsSkyButton.style.display = "block"
    jobsLink.style.display = 'none'
}
autoTesterBtn.onclick = () =>{
    autoTesterBtn.style.display = "none"
    autoTesterTask.style.display = "flex"
    jobsSkyButton.style.display = "none"
    jobsBackImg.style.display = "none"
    jobsLink.style.display = 'block'
}
autoTitleNone.onclick = () =>{
    autoTesterBtn.style.display = "block"
    autoTesterTask.style.display = "none"
    jobsSkyButton.style.display = "block"
    jobsBackImg.style.display = "block"
    jobsLink.style.display = 'none'
}