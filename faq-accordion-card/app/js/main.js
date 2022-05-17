let question = document.getElementsByClassName("question");
let i;

console.log(question);

for(i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let answer = this.nextElementSibling;
        let arrow = this.lastChild;

        if(answer.style.display == "block") {
            answer.style.display = "none"
            arrow.src = "../../images/icon-arrow-down.svg"
        } else {
            answer.style.display = "block"
            arrow.src = "../../images/icon-arrow-up.svg"
        }

    })
}



     