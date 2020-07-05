'use strict';

window.addEventListener('scroll', underlineOnScroll);

function underlineOnScroll() {
    let sectionPosition0 = document.getElementById("welcome-section").getBoundingClientRect().bottom;
    let sectionPosition1 = document.getElementById("about-me").getBoundingClientRect().bottom;
    let sectionPosition3 = document.getElementById("conclusion").getBoundingClientRect().bottom;

    if (window.scrollY > 0 && window.scrollY < sectionPosition0) {
        document.getElementById("nav-item-A").classList.add('underline-dotted');
        document.getElementById("nav-item-B").classList.add('underline-dotted');
        document.getElementById("nav-item-C").classList.add('underline-dotted');
    } else if (window.scrollY < sectionPosition1 && window.scrollY > sectionPosition0) {
        document.getElementById("nav-item-A").classList.remove('underline-dotted');
        document.getElementById("nav-item-A").classList.add('underline-solid');
        document.getElementById("nav-item-B").classList.add('underline-dotted');
        document.getElementById("nav-item-C").classList.add('underline-dotted');
    } else if (window.scrollY > sectionPosition1 && window.scrollY < sectionPosition3 + document.documentElement.clientHeight) {
        document.getElementById("nav-item-A").classList.add('underline-dotted');
        document.getElementById("nav-item-B").classList.remove('underline-dotted');
        document.getElementById("nav-item-B").classList.add('underline-solid');
        document.getElementById("nav-item-C").classList.add('underline-dotted');
    } else if (window.scrollY > sectionPosition3) {
        document.getElementById("nav-item-A").classList.add('underline-dotted');
        document.getElementById("nav-item-B").classList.add('underline-dotted');
        document.getElementById("nav-item-C").classList.remove('underline-dotted');
        document.getElementById("nav-item-C").classList.add('underline-solid');
    } else {
        document.getElementsByClassName("navItems").classList.add('underline-dotted');
     
    }
    
} 

    let navItems = Array.from(document.getElementsByClassName("underline-dotted"));
    navItems.map(item => item.addEventListener("mouseover", underlineOnHover, false));
    navItems.map(item => item.addEventListener("mouseout", removeUnderline, false));

    function underlineOnHover() { event.currentTarget.setAttribute("style", "border-bottom:var(--red) solid 1.5px;") }
    function removeUnderline() { event.currentTarget.setAttribute("style", "border-bottom:"); }
    
   
