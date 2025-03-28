export class Book {
    constructor (title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    };

    get title() {
        return this._title;
    };

    set title (value) {
        if (typeof value !== 'string' || value instanceof String){
            console.log("Title should be string");
            return;
        };
        this._title = value;
        };

    get author() {
        return this._author;
    };

    set author (value) {
        if (typeof value !== 'string' || value instanceof String){
            console.log("Author should be string");
            return;
        };
        this._author = value;
        };

    get year() {
        return this._year;
    };

    set year (value) {
        if (typeof value !== "number"){
            console.log("Year should be a number");
            return;
        };
        this._year = value;
    };

    printInfo (){
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    };

    static staticMethod (allBooks) {
        let oldestBook = allBooks[0];
        for (let i=1; i<allBooks.length; i++) {
            if (allBooks[i].year < oldestBook.year) {
                oldestBook = allBooks[i];
            };
        };
        return oldestBook;
    };
};

const book1 = new Book("The Lost World", "Sir Arthur Conan Doyle", 1912);
const book2 = new Book("The Hound of the Baskervilles", "Sir Arthur Conan Doyle", 1902);
const book3 = new Book("The Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle", 1892);

book1.printInfo();
book2.printInfo();
book3.printInfo();

export {book1, book2, book3};