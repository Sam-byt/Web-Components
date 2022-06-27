const contents = document.querySelectorAll('.content');
const containers = document.querySelectorAll('.container');

containers.forEach(elem => {
    elem.style.display = 'none';
})

let prevContainer = document.querySelector('.welcome');
let prevContent = contents[0];


for (let i = 0; i < contents.length; i++) {
    contents[i].addEventListener('mouseenter', () => {
        if (prevContent !== contents[i]) contents[i].style = "background-color:transparent; color:black";

    })
    contents[i].addEventListener('mouseleave', () => {
        if (prevContent !== contents[i]) contents[i].style = "background-color:lightgrey; color:black";
    })
    contents[i].addEventListener('click', () => {
        prevContainer.style.display = "none";
        prevContent.style = "background-color:lightgrey; color:black";
        contents[i].style = "background-color:slategrey; color:white;";
        containers[i].style.display = "block";
        prevContainer = containers[i];
        prevContent = contents[i];
    })
}

document.getElementById('search_input').addEventListener('keyup', () => {
    const res = document.getElementById('search_input').value.toUpperCase();
    contents.forEach((elem) => {
        elem.innerHTML.toUpperCase().search(res) == -1 ? elem.style.display = "none" : elem.style.display = "flex";
    })
})