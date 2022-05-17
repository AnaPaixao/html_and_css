console.log("you can do it")

window.onload = function countdown() {

    let countDownDate = new Date("Jul 1, 2021 15:37:25").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.querySelector("#day").innerHTML = days;
    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;

    setTimeout( countdown, 1000);
}



