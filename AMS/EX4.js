function searchBooks(library, authorName) {
    let books = [];
    let bookStrings = "";
    for(let i = 0;i < library.length; i++){
        if(library[i].author == authorName){
            books.push(library[i].title)
        }
    }

    for (let i = 0; i < books.length; i++) {
        if (i !== 0) {
            bookStrings += ',';
        }
        bookStrings += books[i];
    }
    if(bookStrings == ""){
        bookStrings = "NOT FOUND";
    }
    return bookStrings;
}

//library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Carolann Camilo', title: 'Eyewitness', libraryID: 32456},
//    { author: 'Carolann Camilo', title: 'Cocky Marine', libraryID: 32457}  
//   ];
//
//console.log(searchBooks(library,'Bill Gates'));
//console.log(searchBooks(library,'Carolann Camilo'));
//console.log(searchBooks(library,'Bill Gate'));




