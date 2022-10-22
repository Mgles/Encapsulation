var Car = /** @class */ (function () {
    function Car(surname, age) {
        this.name = 'BMW';
        this.model = 'e90';
        this._driver = 'Mixail';
        this.injener = 'Anton';
        this.surname = surname;
        this.age = age;
    }
    Object.defineProperty(Car.prototype, "driver", {
        get: function () {
            return this._driver;
        },
        set: function (driver) {
            this._driver = driver;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.setDriver = function (driver) {
        this._driver = driver;
    };
    Car.prototype.getDriver = function (driver) {
        return this._driver;
    };
    return Car;
}());
var car = new Car("soryan", 34);
console.log(car);
console.log(car.driver);
car.driver = 'Shimaxer';
console.log(car.driver);
