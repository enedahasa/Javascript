console.log("page loaded...");

// function playVideo(vid){
//     vid.play();
// }

// function pauseVideo(vid){
//     vid.pause();
//     vid.currentTime=0;
// }
let clip = document.querySelector(".vid")

clip.addEventListener("mouseover", function (e) {
    clip.play();
 })
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})