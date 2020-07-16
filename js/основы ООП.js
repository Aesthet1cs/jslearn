const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

/*const john = {
    health: 100
};
*/

/*john.__proto__ = soldier; // устаревшая форма наследования
*/
console.log(john.armor);

Object.setPrototypeOf(john, soldier);

john.sayHello();