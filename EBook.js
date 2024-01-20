const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, publicationYear, fileFormat) {
        super(title, author, publicationYear);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFormat) {
        if (typeof newFormat === 'string' && newFormat.trim() !== '') {
            this._fileFormat = newFormat;
        } else {
            console.error('Invalid file format');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this._fileFormat}`);
    }

    static createEBookFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.publicationYear, fileFormat);
    }
}

module.exports = EBook;