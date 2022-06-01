var form = document.getElementById("form")
form.addEventListener("submit", createBook)

var myLibrary =[]
var displayedLibrary = []

function addRow(title, author) {
    var tbodyRef = document.getElementById("bookTable").getElementsByTagName("tbody")[0]
    var newRow = tbodyRef.insertRow()
    newRow.classList.add("newRow")
    var titleCell = newRow.insertCell()
    var authorCell = newRow.insertCell()
    var readCell = newRow.insertCell()
    var removeCell = newRow.insertCell()
    var titleText = document.createTextNode(title)
    var authorText = document.createTextNode(author)
    var readText = document.createElement("INPUT")
    readText.setAttribute("type", "checkbox")
    const remove = document.createElement('button');
    const handleRemove = e => {
        const item = e.target.closest('.newRow');
        item.parentElement.removeChild(item);
      };
    remove.textContent = 'Remove';
    remove.addEventListener('click', handleRemove);
    // document.createTextNode(displayedLibrary.map(x => x.value));
    titleCell.appendChild(titleText)
    authorCell.appendChild(authorText)
    readCell.appendChild(readText)
    removeCell.appendChild(remove)
    // document.getElementById("container").innerHTML = displayedLibrary
}

function createBook(event) {
    var bookData = new FormData(event.target)
    bookData.append("title", document.getElementById("title").value)
    bookData.append("author", document.getElementById("author").value)
    addRow(bookData.get("title"), bookData.get("author"))
    // const bookObject = JSON.stringify(Object.fromEntries(bookData)) 
    // myLibrary.push(bookData)
    // displayedLibrary.push(bookObject)
    
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
