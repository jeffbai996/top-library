// create array for book objects
let myLibrary = [];

// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// push a book to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// modal handling code (attempt 2)
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  displayBooks();

  closeModal();
})

// close the modal
function closeModal() {
  const modal = document.getElementById("modal-one");
  modal.classList.remove("open");
}

// remove a book from myLibrary array
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// toggle read status
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// print placeholder books
displayBooks();