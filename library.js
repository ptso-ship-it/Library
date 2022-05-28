let myLibrary =[]

function createBook() {
    var bookData = new FormData()
    bookData.append("title",document.getElementById("Title").value)
    bookData.append("author",document.getElementById("Author").value)
    bookData.append("pages",document.getElementById("Pages").value)
    const readRadio = document.querySelector("input[name=have_read]:checked").value
    bookData.append("read",readRadio)
    const bookObject = JSON.stringify(Object.fromEntries(bookData)) 
    myLibrary.push(bookObject)
    const container = document.getElementById("container")
    const div = document.createElement("div")
    div.textContent = myLibrary
    container.appendChild(div)
}

function displayLibrary() {
    createBook()
    alert(myLibrary)
}