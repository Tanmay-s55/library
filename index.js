//array of objects to store books
let myLibrary = [
    {
        title: "Ikigai",
        author: "Hector Garcia",
        pages: 208,
        haveRead: true
    }
];

//query selectors
const addBtn = document.getElementById('add-btn');
const closeBtn = document.querySelector('.close')
const formEl = document.getElementById('book-form');
const submitBtn = document.getElementById('submit-btn');
const bookShelf = document.querySelector('.book-container');

//Book constructor
function Book(title,author,pages,haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

//funcs to toggle form view 
function hideForm(){
    clearForm();
    formEl.classList.add('hide-form');
    formEl.classList.remove('show-form');
}
function showForm(){
    formEl.classList.remove('hide-form');
    formEl.classList.add('show-form');
}

//function to add book to library
function addBookToLibrary(bookObj){
    myLibrary.push(bookObj);

    let bookNode = document.createElement('div');
    bookNode.classList.add('book');

    const title = bookObj.title;
    let bookTitle = document.createElement('h2');
    bookTitle.innerHTML = `Title: ${title}`;

    const author = bookObj.author;
    let bookAuthor = document.createElement('h3');
    bookAuthor.innerHTML = `Author: ${author}`;

    const pages = bookObj.pages;
    let bookPages = document.createElement('h3');
    bookPages.innerHTML = `Pages: ${pages}`;

    let haveRead = bookObj.haveRead;
    let read = document.createElement('h3');
    read.innerHTML = `Read?${haveRead}`;

    let updateBtn = document.createElement('button');
    updateBtn.classList.add('update');
    updateBtn.innerHTML = `Update`;

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;

    bookNode.appendChild(bookTitle);
    bookNode.appendChild(bookAuthor);
    bookNode.appendChild(bookPages);
    bookNode.appendChild(read);
    bookNode.appendChild(updateBtn);
    bookNode.appendChild(deleteBtn);
    bookShelf.appendChild(bookNode);

    updateBtn.addEventListener('click',function(){
        if(read.innerHTML == 'Read?true'){
            read.innerHTML = 'Read?false';
            bookObj.haveRead = false;
        }else{
            read.innerHTML = 'Read?true';
            bookObj.haveRead = true;
        }
    });

    deleteBtn.addEventListener('click',function(){
        bookShelf.removeChild(bookNode);
        myLibrary.splice(bookObj,1);
    });
}

//function to get book data from form 
function getBook(){
    //book data
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let haveRead = document.getElementById('checkbox').checked;

    let newBook = new Book(title,author,pages,haveRead);
    addBookToLibrary(newBook);
    hideForm();
}

//function to display books in library
function displayBooks(){
    myLibrary.forEach(function(book){
        let bookNode = document.createElement('div');
        bookNode.classList.add('book');

        const title = book.title;
        let bookTitle = document.createElement('h2');
        bookTitle.innerHTML = `Title: ${title}`;

        const author = book.author;
        let bookAuthor = document.createElement('h3');
        bookAuthor.innerHTML = `Author: ${author}`;

        const pages = book.pages;
        let bookPages = document.createElement('h3');
        bookPages.innerHTML = `Pages: ${pages}`;

        let haveRead = book.haveRead;
        let read = document.createElement('h3');
        read.innerHTML = `Read?${haveRead}`;

        let updateBtn = document.createElement('button');
        updateBtn.classList.add('update');
        updateBtn.innerHTML = `Update`;

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;

        bookNode.appendChild(bookTitle);
        bookNode.appendChild(bookAuthor);
        bookNode.appendChild(bookPages);
        bookNode.appendChild(read);
        bookNode.appendChild(updateBtn);
        bookNode.appendChild(deleteBtn);
        bookShelf.appendChild(bookNode);

        updateBtn.addEventListener('click',function(){
            if(read.innerHTML == 'Read?true'){
                read.innerHTML = 'Read?false';
                book.haveRead = false;
            }else{
                read.innerHTML = 'Read?true';
                book.haveRead = true;
            }
        });

        deleteBtn.addEventListener('click',function(){
            bookShelf.removeChild(bookNode);
            myLibrary.splice(book,1); //remove 1 element starting from book
        });
    });
}

//function to clear inputs when form closed
function clearForm(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let haveRead = document.getElementById('checkbox');

    title.value = "";
    author.value = "";
    pages.value = "";
    haveRead.checked = false;
}

//event listeners
window.addEventListener('load',displayBooks);
addBtn.addEventListener('click',showForm);
closeBtn.addEventListener('click',hideForm);
submitBtn.addEventListener('click',getBook);