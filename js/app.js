const row = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breeds-image")
const input  = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const select = document.querySelector(".breeds-select")

axios("https://dog.ceo/api/breeds/list/all")
    .then((res) => {
        Object.keys(res.data.message).map(el => {
            select.innerHTML += `<option value="${el}">${el}</option>`
            row.innerHTML += ` <button class="breed-names btn btn-primary m-2">${el}</button>`
        })
    })
    .then(() => getImage())
function getImage() {
    const breeds = document.querySelectorAll(".breed-names")
    breeds.forEach(btn => {
        btn.addEventListener("click", () => {
            breeds.forEach(el => el.classList.remove("btn-danger"))
            btn.classList.add("btn-danger")
            fetchingImage(btn.innerHTML)
        })
    })
}
searchBtn.addEventListener("click",() => fetchingImage(input.value))
function fetchingImage(name) {
    axios(` https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
        console.log(res.data)
        breedsImg.innerHTML = `<img src="${res.data.message}" width="500px" alt=""/>`
    })
        .then(() => window.scroll(0,1000))
}


select.addEventListener("change",(e) =>{
    fetchingImage(e.target.value)
})



