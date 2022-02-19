const addBookButton = document.getElementById('addBook')
const deleteButton = document.getElementById('deleteBook')
const libraryDOM = document.getElementById('library')
const formOverlay = document.getElementById('overlay')
const bookForm = document.getElementById('form-popup')
const addBookConfirmButton = document.getElementById('addBookConfirmButton')

let myLibrary = [];
let deleteMode = false;

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
};

function addBookToLibrary(name, author, pages, isRead) {
    const book = new Book(name, author, pages, isRead);
    myLibrary.push(book);
};

function UpdateBookList() {
    const toRemove = Array.from(libraryDOM.children)
    toRemove.forEach(e => {
        e.remove()
    })

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')

        const bookTitle = document.createElement('h2')
        bookTitle.textContent = book.title
        const bookAuthor = document.createElement('h3')
        bookAuthor.textContent = 'Author: ' + book.author
        const bookPages = document.createElement('p')
        bookPages.textContent = 'Number of pages: ' + book.pages
        const bookIsRead = document.createElement('p')
        bookIsRead.textContent = book.isRead ? 'Read already' : 'Not read yet'

        const readToggle = document.createElement('button')
        if (book.isRead) {
            readToggle.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88M12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9M12 17.5C8.24 17.5 4.83 15.36 3.18 12C4.83 8.64 8.24 6.5 12 6.5S19.17 8.64 20.82 12C20.63 12.39 20.41 12.77 20.17 13.13C20.85 13.26 21.5 13.5 22.07 13.85C22.43 13.27 22.74 12.65 23 12C21.27 7.61 17 4.5 12 4.5S2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.35 19.5 12.69 19.5 13.03 19.45C13 19.3 13 19.15 13 19C13 18.45 13.08 17.92 13.22 17.41C12.82 17.46 12.41 17.5 12 17.5Z" />
            </svg>`
        } else {
            readToggle.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.65 22.44,13.26 22.08,13.85C21.5,13.5 20.86,13.25 20.18,13.12L20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12C4.83,15.36 8.24,17.5 12,17.5L13.21,17.43C13.07,17.93 13,18.46 13,19V19.46L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5Z" />
            </svg>`
        }
        readToggle.classList.add('read-btn')

        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookIsRead)
        bookCard.appendChild(readToggle)

        bookCard.addEventListener('click', e => {
            if (deleteMode) {
                bookCard.remove()
                myLibrary.splice(myLibrary.length - 1, 1)
                deleteMode = false
                deleteButton.classList.toggle('delete-mode')

                if (libraryDOM.childElementCount == 0) {
                    const noBooksText = document.createElement('p')
                    noBooksText.textContent = 'No books in the library yet'
                    libraryDOM.appendChild(noBooksText)
                }
            }
        })

        readToggle.addEventListener('click', e => {
            book.isRead = (book.isRead) ? false : true
            UpdateBookList()
        })

        libraryDOM.appendChild(bookCard)

    });
    if (myLibrary.length == 0) {
        const noBooksText = document.createElement('p')
        noBooksText.textContent = 'No books in the library yet'
        libraryDOM.appendChild(noBooksText)
    }
};

addBookButton.addEventListener('click', e => {
    formOverlay.classList.remove('hidden')
});

deleteButton.addEventListener('click', e => {
    deleteMode = !deleteMode
    deleteButton.classList.toggle('delete-mode')
});
<<<<<<< HEAD

bookForm.addEventListener('click', e => e.stopPropagation())

function clearForm() {
    bookForm.children[0].children[1].value = ""
    bookForm.children[0].children[2].value = ""
    bookForm.children[0].children[3].value = ""
    bookForm.children[0].children[4].children[1].checked = false
}

formOverlay.addEventListener('click', e => {
    formOverlay.classList.add('hidden')
    clearForm()
})

addBookConfirmButton.addEventListener('click', e => {
    e.preventDefault()

    addBookToLibrary(
        bookForm.children[0].children[1].value,
        bookForm.children[0].children[2].value,
        bookForm.children[0].children[3].value,
        bookForm.children[0].children[4].children[1].checked
    )

    UpdateBookList()

    formOverlay.classList.add('hidden')

    clearForm()
})
=======
>>>>>>> 382e3c4100af0cb2eb01e5635669f214072f2194
