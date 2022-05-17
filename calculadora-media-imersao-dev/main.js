function modal() {

    const modal = document.querySelector("#myModal")
    const openModal = document.querySelector("#openModal");
    const closeModal = document.querySelector(".close");

    openModal.onclick = function() {
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }

    // console.log(modal);
    // console.log(openModal);
    // console.log(closeModal);

}

modal();

function result() {

    const inputs = Array.from(document.querySelectorAll('form div input'));
    const result = document.querySelector(".result span");
    const quote = document.querySelector(".result p");


    if(inputs) {

        let sun = 0;

        inputs.forEach((item) => {
            item.onchange = () => {

                let grade = sun += +item.value;
                let finalGrade = Math.round((grade / 4)).toFixed(1);

            

                if(finalGrade >= 6.0 ) {

                    quote.innerHTML = "Parabéns, você deu o seu melhor e foi recompensado, continue assim."
                    quote.style.color = "#2A9D8F";
                    result.style.color = "#2A9D8F";
    
                    result.innerHTML = finalGrade;
                } else {
    
                    quote.innerHTML = "Não foi dessa vez, continue se empenhando e você evoluirá."
                    quote.style.color = "#E76F51";
                    result.style.color = "#E76F51";
    
                    result.innerHTML = finalGrade;
                }
            
            }
        })
    }

}

result();







