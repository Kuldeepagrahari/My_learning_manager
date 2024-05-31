const end = document.getElementById("final");
const enddate = "30 July 2024 9:00 PM";
end.innerText = enddate;

const inputs = document.querySelectorAll("input");

function cntdn() {
    const endd = new Date(enddate);
    const now = new Date();
    const dif = (endd - now) / 1000;
    if (dif < 0) return;
    inputs[0].value = Math.floor(dif / 60 / 60 / 24);
    inputs[1].value = Math.floor(dif / 60 / 60) % 24;
    inputs[2].value = Math.floor(dif / 60) % 60;
    inputs[3].value = Math.floor(dif) % 60;
}

cntdn();
setInterval(() => {
    cntdn();
}, 1000); // arrow function call after every 1000ms or 1 sec

const slides = document.querySelectorAll(".photo");
let count = 0;

slides.forEach((photo, index) => {
    photo.style.left = `${index * 100}%`;
});

function prev() {
    count--;
    if (count < 0) count = slides.length - 1;
    slideImage();
}

function next() {
    count++;
    if (count >= slides.length) count = 0;
    slideImage();
}

const slideImage = () => {
    slides.forEach((photo) => {
        photo.style.transform = `translateX(-${count * 100}%)`;
    });
};

// Auto-slide every second
setInterval(next, 2000);

// Optional: Uncomment if you want to add buttons for manual navigation
// document.querySelector('#prevButton').addEventListener('click', prev);
// document.querySelector('#nextButton').addEventListener('click', next);
