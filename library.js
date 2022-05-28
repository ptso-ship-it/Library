function createBook() {
    var bookData = new FormData()
    bookData.append("title",document.getElementById("Title").value)
    bookData.append("author",document.getElementById("Author").value)
    alert(bookData)
}

