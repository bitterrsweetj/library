let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Alice in Wonderland", "L. Stevenson", 75, true);
addBookToLibrary("The Bell Jar", "Sylvia Plath", 294, false);

function showBooks() {
  const container = document.querySelector(".container");

  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.classList.add("book");
    const title = document.createElement("h1");
    title.classList.add("book-title");
    title.textContent = myLibrary[i].title;
    book.appendChild(title);

    const author = document.createElement("h3");
    author.classList.add("book-author");
    author.textContent = myLibrary[i].author;
    book.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("book-pages");
    pages.textContent = myLibrary[i].pages + " pages";
    book.appendChild(pages);

    const read = document.createElement("p");
    pages.classList.add("book-read");
    myLibrary[i].read
      ? (read.textContent = "read")
      : (read.textContent = "not read yet");
    book.appendChild(read);
    container.appendChild(book);
  }
}
showBooks();

// const buttonAddBook = document.querySelector(".new-book");
// buttonAddBook.addEventListener("click", () => {
//   const form = document.querySelector('.new-book-form');
//   form.classList.add('opened');
// });

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    console.log(title, author, pages, read);
    addBookToLibrary(title, author, pages, read);
    showBooks();
  });

const title = document.querySelector("#title").value;
console.log(title);
