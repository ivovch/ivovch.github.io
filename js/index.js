const mainSectionTitle = document.querySelector('.mainSection-title');
const form = document.querySelector('.form-block form');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-mail');
const phoneInput = document.querySelector("#phone");
const formLinkButtons = document.querySelectorAll('.form-link');
const navElements = document.querySelectorAll('.header-container a.scrollTo');
const showMenuBtn = document.querySelector('.showMenu-btn');
let telInp = window.intlTelInput(phoneInput, {
    utilsScript: "/landing/build/js/utils.js",
    initialCountry: "ua",
    separateDialCode: true,
});


window.onload = () => {
    if(document.documentElement.clientWidth > 768){
        setTimeout(() => {
            mainSectionTitle.classList.add('active');
        }, 5500)
    } else{
        setTimeout(() => {
            mainSectionTitle.classList.add('active');
        }, 1000)
    }

};
navElements.forEach(navElement => {
    navElement.addEventListener('click', function (e) {
        e.preventDefault();
        let currentNavLik = this.getAttribute('href');
        let navLinkItem = document.querySelector(`.${currentNavLik}`);
        navLinkItem.scrollIntoView({
            behavior: 'smooth'
        })
    });
});
formLinkButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        form.scrollIntoView({
            behavior: 'smooth',
            block: "center"
        })
    });
});
showMenuBtn.addEventListener('click', function(e){
    e.preventDefault();
    let menu = document.querySelector('.header-container');
    let changingBtn = document.querySelector('.showMenu-btn .containerBtn');
    menu.classList.toggle('active');
    changingBtn.classList.toggle('change');
})

nameInput.addEventListener('input', function (e) {
    if (e.target.value.length >= 4) {
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
    }
});
emailInput.addEventListener('input', function (e) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regExp.test(String(e.target.value).toLowerCase())) {
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
    }
});
phoneInput.addEventListener('input', function () {
    if (telInp.isValidNumber()) {
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
    }
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let validInputLength = document.querySelectorAll('form .valid').length;
    if (validInputLength !== 3) {
        console.log('Форма не валидна!!!');
    } else {
        console.log('Успех!!!');
    }
});