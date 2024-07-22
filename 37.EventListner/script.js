const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

// backgroundColor :#FFF
const getBGColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var orangeElementColor = getBGColor(orange);
// orange.addEventListener('mouseenter',()=>{
//     center.style.background = orangeElementColor;
// })
// var color = getBGColor(pink);
// pink.addEventListener("click",()=>{
//     center.style.background = color;
// })
const magicColorChanger=(element,color)=>{
    return element.addEventListener("click",()=>{
        center.style.background = color;
        console.log("hlo");
    });
};
magicColorChanger(red,getBGColor(cyan));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));
