// Bookstore class 👇

exports.Bookstore = class Bookstore{
  // your code here
  constructor(name){
    this.name = name;
    this.books = [];
  }
  
  pickBook(bookName){
    let found = false;
    let book = '';
    this.books.forEach((el)=>{
      if(el.name === bookName){
        found = true;
        book = el;
      }
    });
      if(found){
          if(book.quantity === 0){
            return "Not available"; 
          }else{
            book.quantity--;
            return book;
          }
      }else{
        return "Book not found";
      }
  }
  
  storeBook(book){
    this.books.push(book);
  }
  
  showBooks(){
    console.log(this.books)
  }
}


// Book class 👇

exports.Book = class Book {
  // your code here
  constructor(name,quantity){
    this.name = name;
    this.quantity = quantity;
  }
  
  changeName(newName){
    this.name = newName;
  }
}