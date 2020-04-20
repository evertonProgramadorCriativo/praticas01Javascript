const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],


        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn){
            this._appetizers = appetizersIn;
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsIn){
            this._mains = mainsIn;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts = dessertsIn
        },
    },



    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
    },

  generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + main.price + dessert.price;

      return `Your meal is ${appetizers.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;

  },
};

menu.addDishToCourse('appetizers', 'Ceaser Salad', 4.25);
menu.addDishToCourse('appetizers', 'Chicken Salad', 3.90);
menu.addDishToCourse('appetizers', 'Bruschetta', 1.99);

menu.addDishToCourse('mains', 'Burger', 7.00);
menu.addDishToCourse('mains', 'Steak', 10.12);
menu.addDishToCourse('mains', 'Fish', 18.20);

menu.addDishToCourse('desserts', 'Cake', 2.00);
menu.addDishToCourse('desserts', 'Cake 2', 2.20);

let meal = menu.generateRandomMeal();

console.log(meal);