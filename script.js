let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");


let sequence1 = document.getElementById("sequence1");
let sequence2 = document.getElementById("sequence2");

let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];


function changeSequence(order) {
    image1.src = images[order[0]];
    image2.src = images[order[1]];
    image3.src = images[order[2]];
}

function showSequence1() {
    changeSequence([0, 1, 2]);

    sequence1.classList.add("active");
    sequence2.classList.remove("active");
}

function showSequence2() {
    changeSequence([2, 0, 1]);

    sequence2.classList.add("active");
    sequence1.classList.remove("active");
}

sequence1.addEventListener("click", showSequence1);
sequence2.addEventListener("click", showSequence2);