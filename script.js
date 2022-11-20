const container = document.querySelector('#container');
const yes_btn = document.querySelector('#yes-btn');
const no_btn = document.querySelector('#no-btn');

const container_react = container.getBoundingClientRect();
const no_btn_react = no_btn.getBoundingClientRect();

yes_btn.addEventListener("click",()=>{
    alert("I <3 you too!");
});

no_btn.addEventListener("mouseover",()=>{
    const i = Math.floor(Math.random() * (container_react.width - no_btn_react.width)) + 1;

    const j = Math.floor(Math.random() * (container_react.height - no_btn_react.height)) + 1;
    no_btn.style.left = i + "px";
    no_btn.style.top = j + "px";

})

