const wrapper = document.querySelector('.wrapper');
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
const ques = document.querySelector('.question'); 
const wrapper_react = wrapper.getBoundingClientRect();
const no_btn_react = no_btn.getBoundingClientRect();

yes_btn.addEventListener("click",()=>{
    ques.innerHtml = "I like you too" ;
});

no_btn.addEventListener("click",()=>{
    const i = Math.floor(Math.random() * (wrapper_react.width - no_btn_react.width)) + 1;

    const j = Math.floor(Math.random() * (wrapper_react.height - no_btn_react.height)) + 1;
    no_btn.style.left = i + "px";
    no_btn.style.top = j + "px";

})
no_btn.addEventListener("mouseover",()=>{
    const i = Math.floor(Math.random() * (wrapper_react.width - no_btn_react.width)) + 1;

    const j = Math.floor(Math.random() * (wrapper_react.height - no_btn_react.height)) + 1;
    no_btn.style.left = i + "px";
    no_btn.style.top = j + "px";

})

