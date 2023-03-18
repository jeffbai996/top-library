// create array for book objects
let myLibrary = [];

// function to get bookList
const bookList = document.getElementById("book-list");

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

// display books to main page
function displayBooks() {
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
      const bookCell = document.createElement("div");
      bookCell.classList.add("book-cell");
      bookCell.innerHTML = `
          <div><strong>Title:</strong> ${book.title}</div>
          <div><strong>Author:</strong> ${book.author}</div>
          <div><strong>Pages:</strong> ${book.pages}</div>
          <div><strong>Read:</strong> ${book.read ? "Yes" : "No"}</div>
          <div class="book-buttons">
              <button onclick="removeBook(${index})">Remove</button>
              <button onclick="toggleReadStatus(${index})">Toggle Read</button>
          </div>
      `;
      bookList.appendChild(bookCell);
  });
}

// validate form inputs
function isValidInput(title, author, pages) {
  return title.trim() !== "" && author.trim() !== "" && pages.trim() !== "";
}

// modal handling code (attempt 2)
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  if (isValidInput(title, author, pages)) {
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
    closeModal();
  } else {
    alert ("Please fill out all fields.");
  }
});

// open the modal (event listener bound to "Add New Book" button)
const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener("click", () => {
  const modal = document.getElementById("modal-one");
  modal.classList.add("open");
})

// close the modal
function closeModal() {
  const modal = document.getElementById("modal-one");
  modal.classList.remove("open");
}

// get modal exits and add listener
const modalExits = document.querySelectorAll(".modal-exit");
modalExits.forEach((exit) => {
  exit.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
  })
})

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

// create example books
const book1 = new Book("The Hunger Games", "Suzanne Collins", 374, false);
const book2 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 870, false);

addBookToLibrary(book1);
addBookToLibrary(book2);

// print placeholder books
displayBooks();