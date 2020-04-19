//creating a parent class Media
// criando uma classe pai Media

class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [ ];
    }
    //creating a getters for tittle, isChechedOut and ratings
  // criando getters para title, isChechedOut e ratings
  
    get title(){
        return this._title;
    }
     
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }

    //creating a method toggleCheckOutStatus thar changes the
    //valuse saved to the _isCheckedOut property
 
// criando um método toggleCheckOutStatus que altera os
 // valores salvos na propriedade _isCheckedOut

    toggleCheckOutStatus(){
        this._isCheckedOut  = !this._isCheckedOutisCheckedOut;
    }

    //creating a method getAverageRating that
    // returns an average value of ratings array

    // criando um método getAverageRating that
     // retorna um valor médio da matriz de classificações

    getAverageRating(){
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
        return ratingsSum;
    }

//creating a method addRating 

// criando um método addRating


addRating(ratings) {
    this._ratings.push(ratings);
}


}


//creating a Book ckass that extends Media/parent class

// criando um ckass do Book que estende a classe Media / parent

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    //creating a getters for author and pages
    get author() {
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}


//creating a Movie class that extends Media/parent class
class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    //creating a getters for director and runTime
    get director(){
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

}

//creating a Book instance with the following properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling. toglleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//log the value
console.log(historyOfEverything.isCheckedOut);

//call .aaddRating 14 / 3 = 4.666666666666667

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

13

//log the result 
console.log(historyOfEverything.getAverageRating());

//creating a Movie instance with the following properties

const speed = new Movie('Jan de Bont', 'Speed', 166);

//Call .toggleCheckOutStatus() on the speed instance
speed.toggleCheckOutStatus();

//log the value

console.log(speed.isCheckedOut);

//call .addRating

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

//log the result

console.log(speed.getAverageRating());

console.log(historyOfEverything);
console.log(speed);