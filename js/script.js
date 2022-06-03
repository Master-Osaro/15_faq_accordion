let accordionBtns = document.querySelectorAll(".acc-icon-container");
let accordionContent = document.querySelectorAll(".acc-content");
let accordionHeader = document.querySelectorAll('.acc-title');
let accordionIcon = document.querySelectorAll('.acc-icon');




// add a click event lstener to all the accordion btns
//careful with the callback function ()
for (let x = 0; x < accordionBtns.length; x++) {
    accordionBtns[x].addEventListener('click', function() {
        hideOtherAccordionContentExceptThis(x);
        toggleAccordion(accordionContent[x], x);
    })
}

function toggleAccordion(item, currentAccordionNum) {
    //Somehow, the element classlist we are recieving here is not an array
    //so we need to convert it to an array first to use the helpful Array.includes method
    let currentClassList = Array.from(item.classList);
    if (currentClassList.includes("hide")) {
        item.classList.remove("hide");
        accordionHeader[currentAccordionNum].classList.add("bold");
        accordionBtns[currentAccordionNum].style.transform = 'rotate(180deg)';
    } else {
        item.classList.add("hide");
        accordionHeader[currentAccordionNum].classList.remove("bold");
        accordionBtns[currentAccordionNum].style.transform = 'rotate(360deg)';
    }

}


//hides all accordion content except current
function hideOtherAccordionContentExceptThis(currentAccordionContentNumber) {
    for (let x = 0; x < accordionContent.length; x++) {
        if (x != currentAccordionContentNumber) {
            let currentClassList = Array.from(accordionContent[x].classList);
            if (currentClassList.includes("hide")) {
                //do nothing
            } else {
                accordionContent[x].classList.add("hide");
                accordionHeader[x].classList.remove("bold");
                accordionBtns[x].style.transform = 'rotate(360deg)';
            }
        } else {
            //do nothing
        }
    }

}


//hides all accordion content
// function hideAll(item) {
//     let currentClassList = Array.from(item.classList);
//     if (currentClassList.includes("hide")) {
//         //do nothing
//     } else {
//         item.classList.add("hide");
//     }
// }