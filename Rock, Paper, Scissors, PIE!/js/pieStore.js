const pieStore__body = document.querySelector('.pieStore__body');
const card = document.querySelectorAll('.card');
const cardIcon = document.querySelectorAll('.card__icon');
const cardFront = document.querySelectorAll('.card__front');
const cardBack = document.querySelectorAll('.card__back');
const cardBack_close = document.querySelector('.card__back-close');
const forestTree = document.querySelectorAll('.forest-tree');

function pieStore__load(){
    pieStore__body.classList.add("active__main");
    for(let i = 0; i < forestTree.length; i++){
        forestTree[i].style.transform = `translateX(0px)`;
    }
}
window.addEventListener("load", pieStore__load);


for(let i = 0; i < cardFront.length; i++){
    cardFront[i].addEventListener("click", function(e){
        if(e.target.closest('.card__icon')){
            card[i].classList.add("card__removed");
            cardFront[i].classList.add("card__removed");
            cardBack[i].classList.add("card__appeared");
        }
    })
}
for(let i = 0; i < cardBack.length; i++){
    cardBack[i].addEventListener("click", function(e){
        if(e.target.closest('.card__back-close')){
            card[i].classList.remove("card__removed");
            cardFront[i].classList.remove("card__removed");
            cardBack[i].classList.remove("card__appeared");
        }
    })
}