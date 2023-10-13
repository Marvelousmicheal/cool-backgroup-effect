let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")
let background = document.querySelector(".behindimage")
let indexes = document.querySelectorAll(".index")
let currentindex = 0
let titleDisplacement = 0
let descriptionDisplacement = 0

let bgImgs =["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg"]

document.addEventListener("DOMContentLoaded",()=>{
    new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        gap: 100,
        perView: 3
      }).mount();

indexes.forEach(index=>index.classList.remove("active"))
indexes[currentindex].classList.add("active")
var myAnimation = new hoverEffect({
    parent: document.querySelector(".behindimage"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `images/${bgImgs[0]}`,
    image2: `images/${bgImgs[1]}`,
    displacementImage: "images/14.jpg",
    hover: false
  });

  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".behindimage"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `images/${bgImgs[1]}`,
    image2: `images/${bgImgs[2]}`,
    displacementImage: "images/14.jpg",
    hover: false
  });

  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".behindimage"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `images/${bgImgs[2]}`,
    image2: `images/${bgImgs[3]}`,
    displacementImage: "images/14.jpg",
    hover: false
  });

  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".behindimage"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `images/${bgImgs[3]}`,
    image2: `images/${bgImgs[0]}`,
    displacementImage: "images/14.jpg",
    hover: false
  });

  let distortAnimations = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4
  ];

function startNextAnimation(){
    let prevIndex = currentindex
    currentindex = (currentindex + 1) % 4 /// to make sure the currentindex doesnt pass 4
    indexes.forEach(index => index.classList.remove("active"))
    indexes[currentindex].classList.add("active")
    distortAnimations[prevIndex].next()
   
    setTimeout(()=>{
      let canvas = background.querySelectorAll("canvas")
      background.appendChild(canvas[0])
      distortAnimations[prevIndex].previous()
    },1200)
}

nextBtn.addEventListener("click" , ()=>{
    startNextAnimation()
})

function startPrevAnimation(){
  currentindex = currentindex -1 <0 ? 3 : currentindex -1
  indexes.forEach(index=>index.classList.remove("active"))
  indexes[currentindex].classList.add("active")
  distortAnimations[currentindex].next()

  setTimeout(()=>{
    let canvas = background.querySelectorAll("canvas")
    background.insertBefore(canvas[canvas.length - 1],background.firstChild)
    distortAnimations[currentindex].previous()
  },500)
}

prevBtn.addEventListener("click",()=>{
  startPrevAnimation()
})




})