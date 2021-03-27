const labels = document.querySelectorAll('.form-control label');
const form = document.getElementById('formSubmit');
let name = document.getElementById('userName');
let email = document.getElementById('userEmail');
let number = document.getElementById('userNumber');
let interest = document.getElementById('userInterest');
  

// STYLING
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')    
})

window.onscroll = () => {
    const nav = document.querySelector('.navbar-section');
    if(this.scrollY <= 10) {
        nav.className = 'navbar-section';
    }  else {
        nav.className = 'navbar-section scroll';
    } 
  };


const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const options = document.getElementsByClassName("nav-option");

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
 
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
   
})

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () =>{
        nav.forEach(nav_el => nav_el.classList.remove('visible'))
    });
  }
