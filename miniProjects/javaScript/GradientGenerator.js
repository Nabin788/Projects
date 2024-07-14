// ! Reference the HTMl element
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let gradientCode = document.querySelector(".gradient-code");

// ? Function to generate randon gradient color.
let gradientColor = (() => {
    let color = "#";
    let hashValue = "0123456789abcdef";
    for (i = 0; i < 6; i++) {
        color = color + hashValue[Math.floor(Math.random() * 16)];
    }
    return color;
});

// ? Two variable to store random gradient color
let gradientColors = gradientColor();
let gradientColors1 = gradientColor();


// ? this function generate random gradient color, create class animation in html and rewrite gradient color code. 
const haxGradientColor1 = (() => {
    gradientColors = gradientColor();
    console.log(gradientColors);
    button3.classList.remove("animation");
    button3.style.backgroundColor = "";
    gradientCode.innerText = `background-image: linear-gradient(to right, ${gradientColors}, ${gradientColors1})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColors}, ${gradientColors1})`;
    button1.innerText = `${gradientColors}`;
});

const haxGradientColor2 = (() => {
    gradientColors1 = gradientColor();
    console.log(gradientColors1);
    button3.classList.remove("animation");
    button3.style.backgroundColor = "";
    gradientCode.innerText = `background-image: linear-gradient(to right, ${gradientColors}, ${gradientColors1})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColors}, ${gradientColors1})`;
    button2.innerText = `${gradientColors1}`;

});
// ? this function generate random gradient color, create class animation in html and rewrite gradient color code. 

// ? Animation function to add animation class, change background color of button and copy the text of gradientCode class.
const animatioSlide = (() => {
    button3.classList.add("animation");
    button3.style.backgroundColor = "blue";
    navigator.clipboard.writeText(gradientCode.innerText).then(() => {
        alert(`sucessfully copied the code: ${gradientCode.innerText}`);
        button3.classList.remove("animation");
    });
});

// ? This line add the click addevent listeners for each button
button1.addEventListener("click", haxGradientColor1);
button2.addEventListener("click", haxGradientColor2);
button3.addEventListener("click", animatioSlide);
