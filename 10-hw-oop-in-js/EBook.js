import { Book } from './Book.js';
import {book1, book2, book3} from './Book.js';

class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    };

    get fileFormat() {
        return this._fileFormat;
    };

    set fileFormat (value) {
        if (typeof value !== 'string' || value instanceof String){
            console.log("File format should be string");
            return;
        };
        this._fileFormat = value;
        };

    printInfo(){
        console.log(`${this.title} by ${this.author}, published in ${this.year}, file format: ${this.fileFormat}`);
    };

    static staticCreateFromBook (book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    };
};

const book4 = new EBook ("The Valley of Fear", "Sir Arthur Conan Doyle", 1915, "epub");
book4.printInfo();

let allBooks = [book1, book2, book3, book4];
let oldestBook = Book.staticMethod(allBooks);
console.log('Oldest book: ');
oldestBook.printInfo();
