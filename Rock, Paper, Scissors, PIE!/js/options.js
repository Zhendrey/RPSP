const bodyOptions__website = document.querySelector('.options-body');
const optionsRow = document.querySelector('.options__row');
const option = document.querySelectorAll('.options__option');
const continueButton = document.querySelector('.continue');
const mainContent = document.querySelector('.content__main');
const battle = document.querySelector('.battle');
const battleItem = document.querySelectorAll('.battle__item');
const battleItems = document.querySelector('.battle__items');
const radioButtons = document.getElementsByName('radio');

function loadOptionsWebsite(event){
    bodyOptions__website.classList.add('load-options-website');
}



let userItem__radio;
let enemyItem__INDEX;
function renderFighingItems(){
    userItem__radio = [...radioButtons].filter(radio =>{
        if(window.getComputedStyle(radio, "before").backgroundColor === "rgb(102, 102, 102)"){
            radio.parentElement.classList.add("checked")
            return radio;
        }
        radio.parentElement.classList.remove("checked")
    })
    console.log(userItem__radio);
    enemyItem__INDEX = Math.floor(Math.random() * option.length);
    console.log(enemyItem__INDEX);
}
const userItem = document.getElementsByClassName('checked');

window.addEventListener("load", loadOptionsWebsite);
optionsRow.addEventListener("click",(e)=>{
    let tragetElem = e.target.closest('.options__option');
    if(tragetElem){
        continueButton.classList.add('show-continue');
        renderFighingItems()
        console.log(userItem__radio);
    }
})
continueButton.addEventListener("click", function(event){
    mainContent.style.display = `none`;
    battle.style.display = `block`;
    battleItem[1].children[0].src = option[enemyItem__INDEX].children[1].children[0].src;
    battleItem[0].children[0].src = userItem[0].children[1].children[0].src;
    battleItems.classList.add('fighting-animation')
})