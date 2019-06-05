function generateInterest() {
    var data = ["Blockchain", "CrossFit", "GoT", "Audio Books"]
    var element = document.getElementById("interestElement")
    data.forEach((item) => {
        element.innerHTML += `<li>
            <i class="fa-li fas fa-angle-right"></i>
            ${item}</li>`
    })
}
generateInterest()