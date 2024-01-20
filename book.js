class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === 'string' && newTitle.trim() !== '') {
            this._title = newTitle;
        } else {
            console.error('Invalid title');
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
            this._author = newAuthor;
        } else {
            console.error('Invalid author');
        }
    }

    get publicationYear() {
        return this._publicationYear;
    }

    set publicationYear(newYear) {
        if (Number.isInteger(newYear) && newYear > 0) {
            this._publicationYear = newYear;
        } else {
            console.error('Invalid publication year');
        }
    }

    printInfo() {
        console.log(`Book: ${this._title} by ${this._author}, published in ${this._publicationYear}`);
    }

    static findOldestBook(books) {
        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].publicationYear < oldestBook.publicationYear) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }
}

module.exports = Book;
