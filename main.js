makeGrid(16, 16); 

const hoverDivs = [...document.querySelectorAll('.column')];


let changeColor = false;




function makeGridColumn(num) {
    let htmlElements = '<div class="column" id="div"></div>';

    for (let i = 0; i < num; i++) {
        let container = document.querySelector(".container2");
        container.insertAdjacentHTML("beforebegin", htmlElements);
    }
}

function makeColumnClone(num) {
    for (let i = 0; i < num-1; i++){
        let element = document.querySelector(".container");
        let clone = element.cloneNode(true);
        element.after(clone);
    }
}

function makeGrid(num1, num2) {
    makeGridColumn(num1);
    makeColumnClone(num2);
}

function changeDivColor() {
    let containerDivs = document.getElementById('container');
    let columnDivs = document.getElementById('div');
    let almightyContainer = document.getElementById('almightyContainer');


    for(let i = 0; i < almightyContainer.childNodes.length-3; i++){
        for (let j = 0; j < containerDivs.childNodes.length-3; j++){
            if(document.getElementById('div')){
                document.querySelector('.column').addEventListener('mouseenter', function () {
                    columnDivs.style.backgroundColor = 'black';
                });
            }
        }
    }
}

hoverDivs.forEach(hoverDiv => {
    hoverDiv.addEventListener('mousedown', () => {
        hoverDiv.style.backgroundColor = "black";
        changeColor = true;
    });

    hoverDiv.addEventListener('mouseup', () => {
        changeColor = false;
    })

    hoverDiv.addEventListener('mouseover', () => {
        if(changeColor){
            hoverDiv.style.backgroundColor = "black";
        }
    });
});


// function addMouseOver() {
//     let booly = false;


// }












