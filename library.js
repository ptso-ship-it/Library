var form = document.getElementById("form")
form.addEventListener("submit", createBook)

var myLibrary =[]

function createBook(event) {
    var bookData = new FormData(event.target)
    bookData.append("title", document.getElementById("title").value)
    bookData.append("author", document.getElementById("author").value)
    const bookObject = JSON.stringify(Object.fromEntries(bookData)) 
    myLibrary.push(bookObject)
    document.getElementById("container").innerHTML = myLibrary
    event.preventDefault()
}

function displayLibrary() {
    displayedLibrary = []
    myLibrary.forEach((element) => {
        displayedLibrary.push(JSON.stringify(element))
    })
    document.getElementById("container").innerHTML = displayedLibrary
}

/*function createMultipleBooks(event) {
    var titleElements = document.getElementsByClassName("title")
    var titles = []
    for(var i=0; i < titleElements.length; i++) {
        titles.push(titleElements[i].value)
    }
    var authorElements = document.getElementsByClassName("author")
    var authors = []
    for(var i=0; i < authorElements.length; i++) {
        authors.push(authorElements[i].value)
    }
    
    titles.forEach((elements, index) => {
    //    bookObject["title"] = titles[index]
    //    bookObject["author"] = authors[index]
        const bookObject = {
            title: titles[index],
            author: authors[index]
        }
    // myLibrary.push(JSON.stringify(bookObject))
        myLibrary.push(bookObject)
    })
    displayLibrary()
    event.preventDefault()
}
*/ 




function add_fields() {
    document.getElementById("wrapper").innerHTML += '<br><span>Title: <input type="text" class="title"> Author:  <input type="text" class="author"></span>\r\n'
}
