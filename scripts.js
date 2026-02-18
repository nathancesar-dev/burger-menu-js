const list = document.querySelector("ul")



function aparecerprodutos() {

    let mylist = ""

    menuOptions.forEach(element => {
        mylist += `
            <li>
                <img src="${element.src}">
                <p>${element.name}</p>
                <p class="value">${element.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>
            </li>
        `
    })

    list.innerHTML = mylist
}

let desconto = 0

function AddDiscount() {
    const newvalues = menuOptions.map(element => {

        desconto = element.price / 10

        return `
            <li>
            <img src="${element.src}">
                <p>${element.name}</p>
                <p class="value">${(element.price - desconto).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>
            </li>

        `


    })

    list.innerHTML = newvalues.join("")

}

function valor() {

    const precoTotal = menuOptions.reduce((acumulador, item) => {
        return acumulador + item.price
    }, 0)

    list.innerHTML = `
                    <li class="total">
                        <p>A soma de todos os itens do menu é: R$ ${precoTotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })}</p>
                    </li> `
}

function Filter() {

    const filtered = menuOptions.filter(item => item.vegan)

    const newList = filtered.map(element => `
            <li>
                <img src="${element.src}">
                <p>${element.name}</p>
                <p class="value">${element.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
                })}</p>
            </li>
    `)

    list.innerHTML = newList.join("")
}

