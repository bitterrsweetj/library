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
  console.log(Book.title);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Alice in Wonderland', 'L. Stevenson', 75, true);

console.log(myLibrary);

const div = document.querySelector('.book');
for (let i = 0; i < myLibrary.length; i++) {
  div.textContent += myLibrary[i].title;
  console.log(myLibrary[i]);
}


