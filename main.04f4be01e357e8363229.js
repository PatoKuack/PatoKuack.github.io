(()=>{var e={921:()=>{var e,t,n,s,i=document.getElementById("body"),a=document.getElementById("menu-toggle"),o=document.getElementById("menu-navigator"),c=document.getElementById("banner"),l=document.getElementById("card"),r=document.getElementById("footer"),d=document.getElementById("banner-container-img"),m=document.getElementById("banner-balloon"),g=document.getElementById("banner-balloon-text"),u=document.getElementById("hardskills-content__icons"),h=Array.from(document.querySelectorAll(".hardskills-tech__icon")),v=document.getElementById("switch-idioms"),f=document.getElementById("switch-lightdark-container"),L=document.getElementById("switch-lightdark"),y=document.getElementById("switch-lightdark-moonsun");!function(){if(a&&o&&c&&l&&r){a.addEventListener("click",(function(){o.classList.toggle("show"),a.classList.toggle("active")})),window.addEventListener("resize",(function(){visualViewport.width>=1024&&(o.classList.remove("show"),a.classList.remove("active"))}));var e=function(){var e=o.classList[1];2==o.classList.length&&"show"==e&&(o.classList.remove("show"),a.classList.remove("active"))};c.addEventListener("click",(function(){e()})),l.addEventListener("click",(function(){e()})),r.addEventListener("click",(function(){e()}))}}(),d.addEventListener("click",(function(){d.classList.toggle("imageShow"),c.classList.toggle("imageShow");var e=c.classList[1];2==c.classList.length&&"imageShow"==e&&window.addEventListener("scroll",(function(){d.classList.remove("imageShow"),c.classList.remove("imageShow")}))})),g.addEventListener("animationend",(function(){m.classList.remove("showgreat"),g.classList.remove("showgreat")})),h.map((function(e){var t=document.createElement("div");t.classList.add("balloon-description"),getChildrenAlt=e.children[0].alt,t.textContent="".concat(getChildrenAlt),e.insertBefore(t,e.children[0])})),u.addEventListener("click",(function(){h.map((function(e){e.classList.toggle("show")}))})),t=Array.from(document.querySelectorAll(".text-spanish")),n=Array.from(document.querySelectorAll(".text-english")),s=localStorage.getItem("language"),window.addEventListener("load",(function(){"spanish"===s?(v.checked=!1,t.map((function(e){return e.style.display="inherit"})),n.map((function(e){return e.style.display="none"}))):"english"===s&&(v.checked=!0,t.map((function(e){return e.style.display="none"})),n.map((function(e){return e.style.display="inherit"})))})),v.addEventListener("change",(function(){0==v.checked?(t.map((function(e){return e.style.display="inherit"})),n.map((function(e){return e.style.display="none"})),e="spanish"):(t.map((function(e){return e.style.display="none"})),n.map((function(e){return e.style.display="inherit"})),e="english"),localStorage.setItem("language",e)})),function(){window.addEventListener("load",(function(){"rgb(240, 248, 255)"==getComputedStyle(i).color||"#f0f8ff"==getComputedStyle(i).color?L.checked=!1:L.checked=!0})),f.addEventListener("click",(function(){var e=y.classList[1],t=y.classList.length;window.matchMedia("(prefers-color-scheme)").matches;2==t&&"scaling"==e&&y.classList.remove("scaling"),y.classList.add("scaling"),y.addEventListener("animationend",(function(){y.classList.remove("scaling")}))}));var e,t=localStorage.getItem("theme");"dark"===t?i.classList.toggle("dark-theme"):"light"===t&&i.classList.toggle("light-theme"),L.addEventListener("change",(function(){1==L.checked?(i.classList.add("light-theme"),i.classList.remove("dark-theme"),e="light"):(i.classList.add("dark-theme"),i.classList.remove("light-theme"),e="dark"),localStorage.setItem("theme",e)}))}()}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(921)})()})();