let image = document.getElementById("image");
let buttons = document.getElementsByTagName("button");


let index = 0;
let imagesSrc = ["images/Desert.jpg" , "images/Penguins.jpg" , "images/Koala.jpg"];



for (let i = 0 ; i < buttons.length ; i++) {
    buttons[i].addEventListener("click", scroll);
}

function scroll( eventObject ) {
    let clickedButton = eventObject.currentTarget;
    switch (clickedButton) {
        case buttons[0] :
            if (index < imagesSrc.length-1) {
                image.src = imagesSrc[index + 1];
                index++
            } else {
                image.src = imagesSrc[0];
                index = 0;
            }
            break;
        case buttons[1] :
            if (index !== 0) {
                image.src = imagesSrc[index - 1];
                index--
            } else {
                image.src = imagesSrc[imagesSrc.length - 1];
                index = imagesSrc.length - 1;
            }
    }
}


