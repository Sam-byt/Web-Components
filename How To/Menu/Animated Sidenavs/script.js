// document.querySelector('.navbar').style.display = 'none';
let prevWidth = 0,tt= 500,currWidth =0;
document.getElementById('sidenav_overlay').addEventListener("click", () => {
    document.querySelector('.navbar').style.transition = '500ms';
    document.querySelector('.navbar').style.width = `20vw`;
    currWidth = 20;
    tt = 500;
})
document.getElementById('crossing').addEventListener("click", () => {
    document.querySelector('.navbar').style.transition = `${tt}ms`;
    document.querySelector('.navbar').style.width =`${prevWidth}vw`;
})

document.getElementById('sidenavOverlayWithoutAnimation').addEventListener("click", () => {
    document.querySelector('.navbar').style.transition = '0ms';
    document.querySelector('.navbar').style.width = `20vw`;
    currWidth = 20;
    tt = 0;
})

