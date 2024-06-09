const scenes = document.querySelectorAll('.scene');
const introduction = document.querySelector('.introduction');
const skipArrows = document.querySelector('.skip-arrows');
//!SCENE #1
const bigRocks = document.querySelector('.big-rocks');
const bigRocks__row = document.querySelector('.big-rocks__row');
const rockCave__row = document.querySelector('.rock-cave__row');

//!SCENE #2
const defend__row = scenes[1].children[0];
const footer__mountains__backround = scenes[1].children[1];

//!SCENE #3
const cut__title = scenes[2].children[0].children[0];
const cut__body = scenes[2].children[0].children[scenes[2].children.length];

//! SCENE #4
const pie__exploded = scenes[3].children[0];
const scene4__footer = scenes[3].children[scenes[3].children.length - 1];

//! MAIN PAGE

const mainPage = document.querySelector('.main-page');
const mainPage__header = document.querySelector('.header__main-page');
/**/
let transitionDelay;
transitionDelay = 1.6;

let nextScene__transition = 1500;
const intro__transition = `all 1s ease ${transitionDelay}s`;

let loopCounter = 0;
    function scene1__FadeUp(){
        scenes[0].classList.add('scenes1-fade-up');
        bigRocks__row.classList.add('big-tocks-fade-up');
        rockCave__row.classList.add('rock-cave-fade-up');
        setTimeout(scene1__FadeAway, nextScene__transition);
        setTimeout(scene2__FadeUp, nextScene__transition * transitionDelay);
        loopCounter++;
        if(loopCounter > 2){
            skipArrows.style.display = `block`;
        }
    }
    function scene1__FadeAway(){
        scenes[0].classList.remove('scenes1-fade-up');
        bigRocks__row.classList.remove('big-tocks-fade-up');
        rockCave__row.classList.remove('rock-cave-fade-up');
    }
    
    function scene2__FadeUp(){
        scenes[1].classList.add('scenes2-fade-up');
        defend__row.classList.add('defend-row-fade-up');
        footer__mountains__backround.classList.add('footer-mountains-backround-fade-up');
        setTimeout(scene2__FadeAway, nextScene__transition)
        setTimeout(scene3__FadeUp, nextScene__transition * transitionDelay);
    }
    function scene2__FadeAway(){
        scenes[1].classList.remove('scenes2-fade-up');
        defend__row.classList.remove('defend-row-fade-up');
        footer__mountains__backround.classList.remove('footer-mountains-backround-fade-up');
    }
    
    function scene3__FadeUp(){
        scenes[2].classList.add('scenes-3-fade-up');
        cut__title.classList.add('cut__title-fade-up');
        cut__body.classList.add('cut__body-fade-up');
        setTimeout(scene3__FadeAway, nextScene__transition)
        setTimeout(scene4__FadeUp, nextScene__transition * transitionDelay);
    }
    function scene3__FadeAway(){
        scenes[2].classList.remove('scenes-3-fade-up');
        cut__title.classList.remove('cut__title-fade-up');
        cut__body.classList.remove('cut__body-fade-up');
    }
    
    function scene4__FadeUp(){
        scenes[3].classList.add('scene-4__fade__up');
        pie__exploded.classList.add('pie-exploded__fade__up');
        scene4__footer.classList.add('scene-4__footer__fade__up');
        setTimeout(scene4__FadeAway, nextScene__transition);
        setTimeout(scene1__FadeUp, nextScene__transition * transitionDelay);
    }
    function scene4__FadeAway(){
        scenes[3].classList.remove('scene-4__fade__up');
        pie__exploded.classList.remove('pie-exploded__fade__up');
        scene4__footer.classList.remove('scene-4__footer__fade__up');
    }

    function showMainPage(event){
        window.removeEventListener("load", scene1__FadeUp)
        if(window.innerWidth < 768 && scrollY !== 0){
            document.body.classList.remove();
        }else if(window.innerWidth > 768){
            scrollTo(0,0);
        }
            introduction.style.display = `none`;
            mainPage.style.display = `block`;
            mainPage.style.opacity = 1;
            setTimeout(()=>{
                mainPage.classList.add("active");
            }, -150)
        }
window.addEventListener("load", scene1__FadeUp);
window.addEventListener('scroll', showMainPage);
if(window.history.length > 1){
    scrollTo(0,1)
}