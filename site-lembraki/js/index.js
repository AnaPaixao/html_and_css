const star = document.querySelectorAll(".star");


document.querySelectorAll("a").forEach(a => a.addEventListener("mouseover", () => a.classList.add("border-bottom")))

document.querySelectorAll("a").forEach(a => a.addEventListener("mouseout", () => a.classList.remove("border-bottom")))

star.forEach(star => star.addEventListener("mouseover", () => {
    if (star.classList.contains("full") == false) {
        star.classList.add("full")
        return star.src = "../img/star.svg"

    } else {
        star.classList.remove("full")
        return star.src = "../img/empty-star.svg"
    }
}))
