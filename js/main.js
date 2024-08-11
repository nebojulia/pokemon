// const filterItem = document.querySelectorAll(".filter__type");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filter").addEventListener("click", function() {
        document.getElementById("container").classList.toggle("open")
    })

    // document.getElementById("filter__type").addEventListener("click", function() {
    //     document.getElementById("container").classList.remove("open")
    // })

    // filterItem.forEach((e) => e.addEventListener("click", () => {
    //     document.getElementById("container").classList.remove("open")
    // }))
})