const menuHamburger = document.querySelector(".burger")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('mousemove', () => {
    navLinks.classList.toggle('mobile-menu')
})
console.log(navLinks.classList);
let con = document.getElementById("con")
let apiData = []
class Product {
    constructor(title, price, description, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            apiData.push(new Product(json[i].title, json[i].price, json[i].description, json[i].image))
        }
        render(apiData)
    })

function render(apiData) {
    apiData.map((e) => {
        let card = document.createElement("div")

        let img = document.createElement("img")
        img.src = `${e.image}`
        card.appendChild(img)

        let title = document.createElement("p")
        title.innerHTML = `<strong>Title :</strong>  ${e.title}`
        card.appendChild(title)

        let price = document.createElement("p")
        price.innerHTML = `<strong>Price :</strong>  ${e.price}`
        card.appendChild(price)

        let description = document.createElement("p")
        description.innerHTML = `<strong>Description :</strong>  ${e.description}`
        card.appendChild(description)

        con.appendChild(card)
    })
}