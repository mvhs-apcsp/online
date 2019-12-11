function ready() {
    let now = false;
    let nows = Array.from(document.getElementsByClassName("now"));
    let originals = Array.from(document.getElementsByClassName("original"));
    let waitTime = 2500; // 2.5 seconds

    setInterval(() => {
        if (now) {
            nows.forEach(img => {
                img.classList.add("hide");
            });
            originals.forEach(img => {
                img.classList.remove("hide");
            });
        } else {
            nows.forEach(img => {
                img.classList.remove("hide");
            });
            originals.forEach(img => {
                img.classList.add("hide");
            });
        }
        now = !now;
    }, waitTime);
}

document.addEventListener('DOMContentLoaded', ready);