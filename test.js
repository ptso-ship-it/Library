function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return Object.values(this).join(', ')
    }
    console.log(this.info())
}

const theHobbit = new Book("The Hobbit","JR Tolkien","295","yes")
