const contents = document.querySelectorAll(".content")

const next = document.getElementById("next");
const previous = document.getElementById("back")

next.addEventListener("click", showNext);
previous.addEventListener("click", showPrevious)

let currentIndex = 0;

function update(){
    contents.forEach(content => content.style.display = "none");
    contents[currentIndex].style.display = "block";
}

function showNext(){
    if(currentIndex < contents.length - 1){
        currentIndex++;
        update();
    }
}


function showPrevious(){
    if(currentIndex > 0){
        currentIndex--;
        update();
    }
}

update();