

function toggle(event) {
    closeAllOpenedItems()
    
    const item = event.target.closest('.item')
    const content = item.querySelector(".content")
    
    item.classList.add('opened')
    content.toggleAttribute("hidden")
}

function closeAllOpenedItems() {
    const items = document.querySelectorAll("#accordeon .item")

    items.forEach(item => {
        item.classList.remove('opened')
        item.querySelector('.content').setAttribute("hidden", true)
    })
}