!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelectorAll("button"),n=document.body;function l(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}console.log(o),t.style.marginLeft="50%",t.style.marginTop="50%",o.forEach((function(t){t.style.textTransform="uppercase",t.style.backgroundColor="white",t.style.padding="20px",t.style.fontSize="20px"}));var r=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n.style.backgroundColor=l(),r=setInterval((function(){n.style.backgroundColor=l()}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),e.disabled=!0,t.disabled=!1})),console.log(r)}();
//# sourceMappingURL=01-color-switcher.11bf2772.js.map
