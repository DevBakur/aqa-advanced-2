const Book = require('./Book');
const EBook = require('./EBook');

// Creating instances of Book
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

// Using setters to change values
book1.title = 'New Title';
book2.author = 'New Author';

// Calling printInfo method
book1.printInfo();
book2.printInfo();

// Creating instances of EBook
const ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 'PDF');
const ebook2 = new EBook('Clean Code', 'Robert C. Martin', 2008, 'EPUB');

// Using setters to change values
ebook1.fileFormat = 'MOBI';
ebook2.publicationYear = 2010;

// Calling printInfo method
ebook1.printInfo();
ebook2.printInfo();

// Using static method to find the oldest book
const oldestBook = Book.findOldestBook([book1, book2, ebook1, ebook2]);
console.log(`Oldest Book: ${oldestBook.title}, published in ${oldestBook.publicationYear}`);

// Using static method to create an EBook from a Book instance
const newEBook = EBook.createEBookFromBook(book2, 'AZW');
newEBook.printInfo();
