// ============================== Task 1 ============================
const taskOneContainer = document.querySelector(".task-one-container")
const phone = document.getElementById ("phone")
const funPhoneBlue = () =>{
    taskOneContainer.style.backgroundColor= "rgb(29, 124, 207)"
    phone.innerHTML = `<img src="./assets/images/1.png" alt="">`
}
const funPhoneBlack = () =>{
    taskOneContainer.style.backgroundColor= "rgb(32, 32, 32)"
    phone.innerHTML = `<img src="./assets/images/2.png" alt="">`
}
const funPhoneWhite = () =>{
    taskOneContainer.style.backgroundColor= "rgb(200, 152, 77)"
    phone.innerHTML = `<img src="./assets/images/3.png" alt="">`
}
const funPhoneGold = () =>{
    taskOneContainer.style.backgroundColor= "rgb(221, 159, 23)"
    phone.innerHTML = `<img src="./assets/images/0.png" alt="">`
}
const funPhoneRed = () =>{
    taskOneContainer.style.backgroundColor= "rgb(200, 37, 37)"
    phone.innerHTML = `<img src="./assets/images/4.png" alt="">`
}

// ============================== Task 2 ============================
const sun= document.getElementById("sun");
const moon= document.getElementById("moon");
const modeIcon = document.getElementById("mode-icon")
const taskTwoContent=document.getElementById("task-two-content");
const hello = document.querySelector("#hello")
const lorem = document.querySelector("#lorem")

const light = ()=>{
    sun.style.display="none"
    moon.style.display="block"
    taskTwoContent.style.backgroundColor="white"
    hello.style.color = "black"
    lorem.style.color = "black"
}
const dark = () => {
    sun.style.display="block"
    moon.style.display="none"
    taskTwoContent.style.backgroundColor="black"
    hello.style.color = "white"
    lorem.style.color = "white"
}

// ============================== Task 3 ============================
let answer1 = document.querySelector("#answer-1");
let answer2 = document.querySelector("#answer-2");
let answer3 = document.querySelector("#answer-3");
let answerDown1= ()=> {
    if (answer1.style.display == ("none")) {
        answer1.style.display = ("block")
    } else{
        answer1.style.display = ("none")
    }
}
let answerDown2= ()=> {
    if (answer2.style.display == ("none")) {
        answer2.style.display = ("block")
    } else{
        answer2.style.display = ("none")
    }
}
let answerDown3= ()=> {
    if (answer3.style.display == ("none")) {
        answer3.style.display = ("block")
    } else{
        answer3.style.display = ("none")
    }
}
// ============================== Task 4 ============================
let description = document.querySelector(".description")
let star1 = document.querySelector(".star1");
let star2 = document.querySelector(".star2");
let star3 = document.querySelector(".star3");
let star4 = document.querySelector(".star4");
let star5 = document.querySelector(".star5");
let angryFace = String.fromCodePoint(0x1F621);
let unamusedFace = String.fromCodePoint(0x1F612);
let relievedFace = String.fromCodePoint(0x1F60C);
let smilingFaceWithHeartEyes = String.fromCodePoint(0x1F60D);
let starStruck = String.fromCodePoint(0x1F929);

star1.addEventListener("click", () => {
    description.innerHTML = `I Just Hate It ${angryFace} `
    star1.classList.add("active")
    star2.classList.remove("active")
    star3.classList.remove("active")
    star4.classList.remove("active")
    star5.classList.remove("active")
})
star2.addEventListener("click", () => {
    description.innerHTML = `I Don't Like It ${unamusedFace} `
    star1.classList.add("active")
    star2.classList.add("active")
    star3.classList.remove("active")
    star4.classList.remove("active")
    star5.classList.remove("active")
})
star3.addEventListener("click", () => {
    description.innerHTML = `It Is Awesome ${relievedFace} `
    star1.classList.add("active")
    star2.classList.add("active")
    star3.classList.add("active")
    star4.classList.remove("active")
    star5.classList.remove("active")
})
star4.addEventListener("click" , ()=>{
    description.innerHTML = `I Love It ${smilingFaceWithHeartEyes} `
    star1.classList.add("active")
    star2.classList.add("active")
    star3.classList.add("active")
    star4.classList.add("active")
    star5.classList.remove("active")
})
star5.addEventListener("click" , ()=>{
    description.innerHTML = `I Adore It ${smilingFaceWithHeartEyes} `
    star1.classList.add("active")
    star2.classList.add("active")
    star3.classList.add("active")
    star4.classList.add("active")
    star5.classList.add("active")
})
// ============================== Task 5 ============================
const male = document.querySelector(".male-tab");
const female = document.querySelector(".female-tab");
const bothIcone = document.querySelector(".both");
const maleIcone = document.querySelector(".male");
const femaleIcone = document.querySelector(".female")
const femaleHide = () => {
    female.style.display = ("none");
    male.style.display = ("block");
    bothIcone.classList.remove("active");
    maleIcone.classList.add("active");
    femaleIcone.classList.remove("active");
}
const maleHide = () => {
    male.style.display = ("none");
    female.style.display = ("block");
    bothIcone.classList.remove("active");
    maleIcone.classList.remove("active");
    femaleIcone.classList.add("active");
}
const both = () => {
    female.style.display = ("block");
    male.style.display = ("block");
    bothIcone.classList.add("active");
    maleIcone.classList.remove("active");
    femaleIcone.classList.remove("active");
}

// ============================== Task 6 ============================

// ============================== Task 7 ============================
const main = document.querySelector("#main");
const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");
const f4 = document.querySelector(".f4");

f1.addEventListener("click" , ()=> {
    main.innerHTML = `<img src="assets/images/f1.png" alt="" id="mainImg" width="100%">`
})
f2.addEventListener("click" , ()=> {
    main.innerHTML = `<img src="assets/images/f2.png" alt="" id="mainImg" width="100%">`
})
f3.addEventListener("click" , ()=> {
    main.innerHTML = `<img src="assets/images/f3.png" alt="" id="mainImg" width="100%">`
})
f4.addEventListener("click" , ()=> {
    main.innerHTML = `<img src="assets/images/f4.png" alt="" id="mainImg" width="100%">`
})